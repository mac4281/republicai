# AdRadar Account Management Setup Guide

## Overview

The `/AdRadar` route has been created with the following features:
- Firebase authentication (email/password and Google sign-in)
- Stripe subscription management
- Invoice/receipt viewing and downloading
- Subscription cancellation through Stripe Customer Portal

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password"
   - Enable "Google" sign-in provider
4. Get your configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps"
   - Click the web icon (</>)
   - Copy the config values to your `.env.local`

## Stripe Setup

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your API keys:
   - Go to Developers > API keys
   - Copy the Secret key to `STRIPE_SECRET_KEY`
   - Copy the Publishable key to `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Enable Customer Portal:
   - Go to Settings > Billing > Customer Portal
   - Activate the customer portal
   - Configure allowed features (subscriptions, payment methods, invoices)

## Features

### Authentication
- Users can sign up with email/password
- Users can sign in with Google
- Protected route that requires authentication

### Subscription Management
- View current subscription status
- See renewal/cancellation dates
- Access Stripe Customer Portal to:
  - Cancel subscriptions
  - Update payment methods
  - Change billing information

### Invoices & Receipts
- View all paid invoices
- Download invoice PDFs
- Access hosted invoice URLs

## File Structure

```
src/
├── app/
│   ├── AdRadar/
│   │   ├── page.tsx          # Main AdRadar page
│   │   └── layout.tsx         # Layout with AuthProvider
│   └── api/
│       └── stripe/
│           ├── create-portal-session/
│           │   └── route.ts   # Create Stripe portal session
│           ├── get-customer/
│           │   └── route.ts   # Get customer & subscriptions
│           └── get-invoices/
│               └── route.ts   # Get customer invoices
├── components/
│   ├── LoginForm.tsx          # Login/signup form component
│   └── AccountManagement.tsx  # Account & subscription management
├── contexts/
│   └── AuthContext.tsx        # Firebase auth context provider
└── lib/
    └── firebase.ts            # Firebase configuration
```

## Usage

1. Install dependencies (already done):
   ```bash
   npm install firebase stripe @stripe/stripe-js
   ```

2. Set up environment variables (see above)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000/AdRadar`

## Connecting Stripe Customers

For users to manage their subscriptions, they need to:
1. Have a Stripe customer account
2. The customer's email in Stripe must match their Firebase authentication email
3. Have an active subscription

You can create subscriptions through:
- Stripe Checkout
- Stripe Billing
- Your own subscription creation flow

The system will automatically match Firebase users to Stripe customers by email.

## Security Notes

- All Stripe operations happen server-side via API routes
- Firebase Auth tokens are managed securely by Firebase SDK
- Never expose `STRIPE_SECRET_KEY` in client-side code
- The Customer Portal is a secure Stripe-hosted page

## Next Steps

1. Set up your Firebase project and add credentials to `.env.local`
2. Set up your Stripe account and add credentials to `.env.local`
3. Configure Stripe Customer Portal settings
4. Test the authentication flow
5. Create a test subscription to verify the management features
6. Customize the UI to match your brand (optional)

