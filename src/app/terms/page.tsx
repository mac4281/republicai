import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/" 
          className="inline-block mb-12 text-base font-semibold hover:underline uppercase tracking-wide"
        >
          ← BACK TO HOME
        </Link>

        <h1 className="text-6xl md:text-7xl mb-12">
          TERMS & CONDITIONS
        </h1>

        <div className="space-y-8 text-base leading-relaxed">
          <p className="text-sm text-gray-600">Last updated: September 30, 2025</p>

          <section>
            <h2 className="text-3xl mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Republic AI's products and services, you agree to be 
              bound by these Terms and Conditions. If you disagree with any part of these 
              terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use Republic AI's products and services 
              for personal or commercial use. This license shall automatically terminate if 
              you violate any of these restrictions.
            </p>
            <p className="mt-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Modify or copy our materials without permission</li>
              <li>Use our products for any illegal purpose</li>
              <li>Attempt to reverse engineer any software contained in our services</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4">3. Account Responsibilities</h2>
            <p>
              When you create an account with us, you are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Ensuring your account information is accurate and current</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4">4. Products and Services</h2>
            <p>
              Republic AI provides various products and services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>SimpleAIAssistant.com - AI voice receptionist service</li>
              <li>LeadRadar - iOS mobile application for lead generation</li>
              <li>AdRadar - Chrome extension for advertising analytics</li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any product or service 
              at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">5. Payment and Subscriptions</h2>
            <p>
              Some of our services may require payment. By subscribing to a paid service, 
              you agree to pay all applicable fees. All fees are non-refundable unless 
              otherwise stated. We reserve the right to change our pricing at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">6. Intellectual Property</h2>
            <p>
              The products, services, and materials provided by Republic AI are protected by 
              copyright, trademark, and other intellectual property laws. All rights, title, 
              and interest in and to our services remain with Republic AI.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">7. User Content</h2>
            <p>
              You retain ownership of any content you submit through our services. However, 
              by submitting content, you grant us a worldwide, non-exclusive, royalty-free 
              license to use, reproduce, and distribute your content for the purpose of 
              providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties, 
              expressed or implied. Republic AI does not warrant that our services will be 
              uninterrupted, secure, or error-free. We make no warranties regarding the 
              accuracy or reliability of any information obtained through our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">9. Limitation of Liability</h2>
            <p>
              Republic AI shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of or inability 
              to use our services. Our total liability shall not exceed the amount paid 
              by you, if any, for accessing our services in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold Republic AI harmless from any claims, losses, 
              liabilities, damages, costs, or expenses arising from your use of our services, 
              your violation of these Terms, or your violation of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">11. Third-Party Links</h2>
            <p>
              Our services may contain links to third-party websites or services. We are not 
              responsible for the content, accuracy, or practices of these third-party sites. 
              Access to third-party sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">12. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without 
              prior notice or liability, for any reason, including breach of these Terms. 
              Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              the jurisdiction in which Republic AI operates, without regard to its conflict 
              of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision 
              is material, we will provide at least 30 days' notice prior to any new terms 
              taking effect. Continued use of our services after changes constitutes acceptance 
              of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mt-4 font-bold">
              Republic AI<br />
              Email: legal@republicai.net
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-black">
          <Link 
            href="/" 
            className="inline-block text-base font-semibold hover:underline uppercase tracking-wide"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
