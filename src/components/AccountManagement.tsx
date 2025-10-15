'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface Subscription {
  id: string;
  status: string;
  current_period_end: number;
  cancel_at_period_end: boolean;
}

interface Invoice {
  id: string;
  number: string | null;
  amount_paid: number;
  currency: string;
  created: number;
  invoice_pdf: string | null;
  hosted_invoice_url: string | null;
}

export default function AccountManagement() {
  const { user, logout } = useAuth();
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetchCustomerData();
    }
  }, [user]);

  const fetchCustomerData = async () => {
    if (!user?.email) return;

    try {
      setLoading(true);
      setError('');

      // Get customer and subscriptions
      const customerResponse = await fetch('/api/stripe/get-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email }),
      });

      if (!customerResponse.ok) {
        const errorData = await customerResponse.json();
        throw new Error(errorData.error || 'Failed to fetch customer data');
      }

      const customerData = await customerResponse.json();
      setCustomerId(customerData.customer.id);
      setSubscriptions(customerData.subscriptions);

      // Get invoices
      const invoicesResponse = await fetch('/api/stripe/get-invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId: customerData.customer.id }),
      });

      if (invoicesResponse.ok) {
        const invoicesData = await invoicesResponse.json();
        setInvoices(invoicesData.invoices);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const openCustomerPortal = async () => {
    if (!customerId) return;

    try {
      setPortalLoading(true);
      const response = await fetch('/api/stripe/create-portal-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create portal session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setPortalLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white border-4 border-black p-8">
        <div className="text-center text-xl">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Account Info */}
      <div className="bg-white border-4 border-black p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">ACCOUNT</h2>
            <p className="text-lg">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="px-6 py-3 border-2 border-black font-bold hover:bg-black hover:text-white transition-colors"
          >
            SIGN OUT
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-2 border-red-600 text-red-600 px-4 py-3 mb-6">
            {error}
          </div>
        )}

        {!customerId && !error && (
          <div className="bg-yellow-100 border-2 border-yellow-600 text-yellow-800 px-4 py-3">
            No Stripe customer found for this account. You may need to subscribe first.
          </div>
        )}
      </div>

      {/* Subscriptions */}
      {subscriptions.length > 0 && (
        <div className="bg-white border-4 border-black p-8">
          <h3 className="text-2xl font-bold mb-6">SUBSCRIPTIONS</h3>
          <div className="space-y-4">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="border-2 border-black p-6 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-lg uppercase">
                    Status: {sub.status}
                  </p>
                  <p className="text-sm mt-2">
                    {sub.cancel_at_period_end
                      ? `Cancels on ${formatDate(sub.current_period_end)}`
                      : `Renews on ${formatDate(sub.current_period_end)}`}
                  </p>
                </div>
                <button
                  onClick={openCustomerPortal}
                  disabled={portalLoading}
                  className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {portalLoading ? 'LOADING...' : 'MANAGE'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Invoices */}
      {invoices.length > 0 && (
        <div className="bg-white border-4 border-black p-8">
          <h3 className="text-2xl font-bold mb-6">INVOICES & RECEIPTS</h3>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="border-2 border-black p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">
                    {invoice.number || invoice.id}
                  </p>
                  <p className="text-sm mt-1">
                    {formatDate(invoice.created)} •{' '}
                    {formatAmount(invoice.amount_paid, invoice.currency)}
                  </p>
                </div>
                <div className="flex gap-3">
                  {invoice.hosted_invoice_url && (
                    <a
                      href={invoice.hosted_invoice_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-black font-bold hover:bg-black hover:text-white transition-colors text-sm"
                    >
                      VIEW
                    </a>
                  )}
                  {invoice.invoice_pdf && (
                    <a
                      href={invoice.invoice_pdf}
                      download
                      className="px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-colors text-sm"
                    >
                      DOWNLOAD
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manage in Stripe Portal */}
      {customerId && (
        <div className="bg-white border-4 border-black p-8">
          <h3 className="text-2xl font-bold mb-4">MANAGE SUBSCRIPTION</h3>
          <p className="mb-6">
            Access the full Stripe customer portal to manage your subscription,
            update payment methods, and view all billing information.
          </p>
          <button
            onClick={openCustomerPortal}
            disabled={portalLoading}
            className="px-8 py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {portalLoading ? 'LOADING...' : 'OPEN CUSTOMER PORTAL →'}
          </button>
        </div>
      )}
    </div>
  );
}

