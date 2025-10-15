import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

export async function POST(req: NextRequest) {
  try {
    const { customerId } = await req.json();

    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    // Get all paid invoices for the customer
    const invoices = await stripe.invoices.list({
      customer: customerId,
      status: 'paid',
      limit: 100,
    });

    return NextResponse.json({
      invoices: invoices.data.map((invoice) => ({
        id: invoice.id,
        number: invoice.number,
        amount_paid: invoice.amount_paid,
        currency: invoice.currency,
        created: invoice.created,
        invoice_pdf: invoice.invoice_pdf,
        hosted_invoice_url: invoice.hosted_invoice_url,
      })),
    });
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}

