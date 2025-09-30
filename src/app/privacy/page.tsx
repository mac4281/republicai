import Link from "next/link";

export default function Privacy() {
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
          PRIVACY POLICY
        </h1>

        <div className="space-y-8 text-base leading-relaxed">
          <p className="text-sm text-gray-600">Last updated: September 30, 2025</p>

          <section>
            <h2 className="text-3xl mb-4">1. Introduction</h2>
            <p>
              Republic AI ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website or use our products and services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information 
              we may collect includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Personal Data: Name, email address, and contact information you provide</li>
              <li>Usage Data: Information about how you use our products and services</li>
              <li>Device Information: Browser type, IP address, and device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide, operate, and maintain our products and services</li>
              <li>Improve, personalize, and expand our offerings</li>
              <li>Understand and analyze how you use our services</li>
              <li>Communicate with you about updates, offers, and support</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Service providers who assist in operating our business</li>
              <li>Law enforcement when required by law or to protect our rights</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4">5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to protect 
              your personal information. However, no security system is impenetrable, and 
              we cannot guarantee the absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4">7. Third-Party Services</h2>
            <p>
              Our products may contain links to third-party websites or services. 
              We are not responsible for the privacy practices of these third parties. 
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. 
              We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you 
              of any changes by posting the new Privacy Policy on this page and updating 
              the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4 font-bold">
              Republic AI<br />
              Email: privacy@republicai.net
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
