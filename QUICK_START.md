# AdRadar Account Management - Quick Start

## ✅ What's Been Installed

1. **Firebase** (v12.3.0) - For authentication
2. **Stripe** - For payment management
3. **@stripe/stripe-js** - Stripe client library

## 🎯 What's Been Created

### New Routes
- `/AdRadar` - Account management page with login and subscription features

### New Components
- `LoginForm.tsx` - Email/password and Google sign-in
- `AccountManagement.tsx` - View subscriptions, invoices, and manage account

### API Endpoints
- `/api/stripe/create-portal-session` - Creates Stripe customer portal session
- `/api/stripe/get-customer` - Fetches customer and subscription data
- `/api/stripe/get-invoices` - Fetches customer invoices

### Configuration Files
- `lib/firebase.ts` - Firebase initialization
- `contexts/AuthContext.tsx` - Authentication context provider

## 🚀 Next Steps

### 1. Create `.env.local` file

Create a file named `.env.local` in the root directory with:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key

# Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Set Up Firebase

1. Visit https://console.firebase.google.com/
2. Create/select project
3. Enable Authentication > Email/Password & Google sign-in
4. Copy credentials to `.env.local`

### 3. Set Up Stripe

1. Visit https://dashboard.stripe.com/
2. Get API keys from Developers > API keys
3. Enable Customer Portal: Settings > Billing > Customer Portal
4. Copy credentials to `.env.local`

### 4. Test It Out

1. Your dev server is already running at http://localhost:3000
2. Visit http://localhost:3000/AdRadar
3. Create an account or sign in
4. (You'll need a Stripe customer with matching email to see subscriptions)

## 🎨 Features Available

✅ **Authentication**
- Email/password sign up & sign in
- Google sign-in
- Secure logout

✅ **Subscription Management**
- View current subscriptions
- See renewal/cancellation dates
- Cancel subscriptions via Stripe portal
- Update payment methods via Stripe portal

✅ **Invoices & Receipts**
- View all paid invoices
- Download invoice PDFs
- Access hosted invoice pages

## 📝 Important Notes

- The homepage now has a "MANAGE ACCOUNT" button on the AdRadar product card
- Users must have a Stripe customer account with matching email to see their data
- All Stripe operations are secure and happen server-side
- The Stripe Customer Portal is a hosted, secure page by Stripe

## 🔒 Security

- Firebase handles authentication securely
- Stripe secret keys are only used server-side
- Customer Portal is hosted by Stripe (PCI compliant)
- All sensitive operations are protected by authentication

For detailed information, see `ADRADAR_SETUP.md`.

