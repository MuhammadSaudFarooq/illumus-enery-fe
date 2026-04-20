import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const LAST_UPDATED = 'January 15, 2025';

function Section({ heading, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-slate-200">
        {heading}
      </h2>
      <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Ul({ children }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-slate-600 text-[15px]">
      {children}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <div>
      {/* ── Hero banner ── */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute top-0 inset-x-0 h-1 bg-accent-500" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent-500 flex-shrink-0" />
            <p className="section-label mb-0">Legal</p>
          </div>
          <h1 className="animate-fade-up-d1 section-heading-light mb-5 max-w-2xl">
            Privacy{' '}
            <span className="text-accent-500">Policy</span>
          </h1>
          <p className="animate-fade-up-d2 text-slate-400 text-lg max-w-xl leading-relaxed">
            Last updated: {LAST_UPDATED}. Learn how Illumus Energy collects, uses,
            and protects your business information.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro callout */}
          <div className="flex items-start gap-4 bg-accent-500/10 border-l-4 border-accent-500 rounded-r-sm p-5 mb-12">
            <ShieldCheck className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Illumus Energy LLC</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a
              strictly B2B commercial electrical contractor. We are committed to protecting the privacy
              and security of business information entrusted to us. This policy applies to our website
              and any related services we provide to commercial clients.
            </p>
          </div>

          <Section heading="1. Information We Collect">
            <p>We collect information you provide directly when you:</p>
            <Ul>
              <li>Submit a project inquiry or quote request through our contact form</li>
              <li>Correspond with us by email, phone, or other communication channels</li>
              <li>Enter into a service agreement or contract with Illumus Energy</li>
            </Ul>
            <p>
              <strong className="text-navy-800">Business Contact Information:</strong> Company name,
              contact name, business email address, phone number, and project details.
            </p>
            <p>
              <strong className="text-navy-800">Technical Data:</strong> IP address, browser type,
              referring URLs, pages visited, and time spent on our website — collected automatically
              via standard web server logs and analytics tools.
            </p>
            <p>
              We do not collect or process personal information from residential consumers. Our
              services are exclusively for commercial and industrial business clients.
            </p>
          </Section>

          <Section heading="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <Ul>
              <li>Respond to project inquiries and provide detailed quotes</li>
              <li>Fulfill service agreements and project contracts</li>
              <li>Send project updates, invoices, and service-related communications</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with applicable legal obligations</li>
              <li>Prevent fraud and protect the security of our systems</li>
            </Ul>
            <p>
              We will not use your business contact information for unsolicited marketing
              communications without your prior consent.
            </p>
          </Section>

          <Section heading="3. Information Sharing &amp; Disclosure">
            <p>
              We do not sell, rent, or trade your information to third parties. We may share
              information only in the following limited circumstances:
            </p>
            <Ul>
              <li>
                <strong className="text-navy-800">Service Partners:</strong> Trusted subcontractors
                or vendors who assist in project delivery, bound by confidentiality agreements
              </li>
              <li>
                <strong className="text-navy-800">Legal Requirements:</strong> When required by law,
                court order, or governmental authority
              </li>
              <li>
                <strong className="text-navy-800">Business Transfers:</strong> In the event of a
                merger, acquisition, or sale of business assets, where your data may be transferred
                as part of that transaction
              </li>
              <li>
                <strong className="text-navy-800">Protection of Rights:</strong> To protect the
                rights, property, or safety of Illumus Energy, our clients, or others
              </li>
            </Ul>
          </Section>

          <Section heading="4. Data Security">
            <p>
              We implement appropriate technical and organizational security measures to protect your
              information against unauthorized access, alteration, disclosure, or destruction. These
              measures include encrypted communications, secure server infrastructure, and access
              controls limited to authorized personnel only.
            </p>
            <p>
              While we take reasonable precautions to protect your data, no method of transmission
              over the internet is 100% secure. We encourage you to use secure channels when sharing
              sensitive project information.
            </p>
          </Section>

          <Section heading="5. Cookies &amp; Tracking Technologies">
            <p>
              Our website may use cookies and similar technologies to enhance your browsing
              experience and collect analytical data. You can control cookie preferences through
              your browser settings. The following types may be used:
            </p>
            <Ul>
              <li>
                <strong className="text-navy-800">Essential Cookies:</strong> Required for basic
                website functionality
              </li>
              <li>
                <strong className="text-navy-800">Analytics Cookies:</strong> Help us understand how
                visitors use our site to improve performance (e.g., Google Analytics)
              </li>
            </Ul>
            <p>We do not use advertising or retargeting cookies.</p>
          </Section>

          <Section heading="6. Data Retention">
            <p>
              We retain business contact information and project records for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal obligations, resolve
              disputes, and enforce our agreements.
            </p>
            <Ul>
              <li>Inquiry data from non-clients is retained for up to 24 months</li>
              <li>Active client project records are retained for the duration of our engagement</li>
              <li>Completed project and contract records may be retained for up to 7 years for
                  legal, warranty, and regulatory purposes</li>
            </Ul>
          </Section>

          <Section heading="7. Your Rights">
            <p>
              Depending on your jurisdiction, you or your organization may have rights regarding
              information we hold, including the right to:
            </p>
            <Ul>
              <li>Access the information we hold about your company or contact</li>
              <li>Request correction of inaccurate or outdated information</li>
              <li>Request deletion of your information, subject to legal retention requirements</li>
              <li>Withdraw consent for non-essential communications at any time</li>
            </Ul>
            <p>To exercise any of these rights, please contact us using the details below.</p>
          </Section>

          <Section heading="8. Third-Party Links">
            <p>
              Our website may contain links to third-party websites or services. We are not
              responsible for the privacy practices or content of those external sites. We encourage
              you to review the privacy policies of any third-party sites you visit.
            </p>
          </Section>

          <Section heading="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or
              applicable law. When we make material changes, we will update the &ldquo;Last
              Updated&rdquo; date at the top of this page. Continued use of our website following
              any updates constitutes your acceptance of the revised policy.
            </p>
          </Section>

          <Section heading="10. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please reach out to us:
            </p>
            <Ul>
              <li><strong className="text-navy-800">Email:</strong> commercial@illumusenergy.com</li>
              <li><strong className="text-navy-800">Phone:</strong> 1-800-555-1234</li>
              <li>
                <strong className="text-navy-800">Mail:</strong> 1200 Commerce Dr, Suite 400,
                Houston, TX 77001
              </li>
            </Ul>
          </Section>

          {/* CTA */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-navy-900 font-bold mb-1">Questions about your data?</h3>
              <p className="text-slate-500 text-sm">
                Our team is happy to clarify how we handle your business information.
              </p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
