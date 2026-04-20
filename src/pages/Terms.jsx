import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

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

export default function Terms() {
  return (
    <div>
      {/* ── Hero banner ── */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80')` }}
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
            Terms &amp;{' '}
            <span className="text-accent-500">Conditions</span>
          </h1>
          <p className="animate-fade-up-d2 text-slate-400 text-lg max-w-xl leading-relaxed">
            Last updated: {LAST_UPDATED}. Please read these terms carefully before engaging
            our commercial electrical services.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro callout */}
          <div className="flex items-start gap-4 bg-accent-500/10 border-l-4 border-accent-500 rounded-r-sm p-5 mb-12">
            <FileText className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the Illumus
              Energy LLC website located at <strong>illumusenergy.com</strong> and the commercial
              electrical services we provide. By accessing our website or engaging our services, you
              agree to be bound by these Terms. If you do not agree, please do not use our website
              or services.
            </p>
          </div>

          <Section heading="1. Acceptance of Terms">
            <p>
              By accessing or using the Illumus Energy website, requesting a quote, or entering into
              a service agreement with us, you confirm that you represent a legitimate commercial or
              industrial business entity and that you have the authority to bind that entity to these
              Terms.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you (the client) and
              Illumus Energy LLC, a Texas-based commercial electrical contractor.
            </p>
          </Section>

          <Section heading="2. Commercial Clients Only">
            <p>
              Illumus Energy provides electrical contracting services <strong>exclusively to
              commercial and industrial business clients</strong>. We do not accept, quote, or
              perform residential electrical work under any circumstances.
            </p>
            <p>By using our website or requesting services, you represent that:</p>
            <Ul>
              <li>You are a duly organized business entity (corporation, LLC, partnership, etc.)</li>
              <li>You are requesting services for a commercial or industrial property or facility</li>
              <li>You are not seeking residential electrical services of any kind</li>
            </Ul>
          </Section>

          <Section heading="3. Services Description">
            <p>
              Illumus Energy offers the following primary commercial electrical services:
            </p>
            <Ul>
              <li>Commercial lighting solutions and LED retrofits</li>
              <li>Maintenance and service contracts for commercial facilities</li>
              <li>New commercial electrical installations and tenant improvements</li>
              <li>Energy audits and utility rebate management</li>
              <li>Emergency electrical response for commercial clients</li>
            </Ul>
            <p>
              All services are subject to a formal written proposal and executed service agreement
              prior to commencement. Website descriptions are for informational purposes only and do
              not constitute a binding offer or guarantee of service availability.
            </p>
          </Section>

          <Section heading="4. Quotes, Proposals &amp; Contracts">
            <p>
              All project quotes and service proposals issued by Illumus Energy are:
            </p>
            <Ul>
              <li>Valid for 30 days from the date of issue unless otherwise stated in writing</li>
              <li>Subject to on-site verification of scope prior to contract execution</li>
              <li>Not binding until a written service agreement is signed by both parties</li>
            </Ul>
            <p>
              Changes to project scope after contract execution must be documented via a written
              change order approved by both parties. Verbal modifications are not binding.
            </p>
          </Section>

          <Section heading="5. Payment Terms">
            <p>
              Payment terms are established in each individual service agreement. Standard terms
              unless otherwise negotiated include:
            </p>
            <Ul>
              <li>Progress billing milestones for projects over $25,000</li>
              <li>Net 30 payment terms from invoice date for maintenance contract clients</li>
              <li>A deposit of 20–35% may be required prior to material procurement on large installs</li>
              <li>Late payments are subject to a 1.5% monthly finance charge after 30 days</li>
            </Ul>
            <p>
              Illumus Energy reserves the right to suspend services on accounts with outstanding
              balances over 45 days past due, without liability for project delays resulting from
              such suspension.
            </p>
          </Section>

          <Section heading="6. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos, images, and software —
              is the property of Illumus Energy LLC and is protected by applicable copyright and
              trademark laws. You may not reproduce, distribute, or create derivative works from
              any website content without our express written permission.
            </p>
            <p>
              Project-specific documentation such as as-built drawings and engineering reports
              produced under a service agreement remain the intellectual property of Illumus Energy
              until final payment is received in full.
            </p>
          </Section>

          <Section heading="7. Warranties &amp; Workmanship">
            <p>
              Illumus Energy warrants that all labor performed will be free from defects in
              workmanship for a period of <strong>one (1) year</strong> from the date of project
              substantial completion, subject to the following conditions:
            </p>
            <Ul>
              <li>The warranty covers workmanship defects only, not manufacturer defects in materials</li>
              <li>Equipment and materials carry the manufacturer&rsquo;s warranty, which we will help facilitate</li>
              <li>Warranty is void if work is altered, damaged, or improperly maintained by others</li>
              <li>Warranty claims must be submitted in writing within the warranty period</li>
            </Ul>
          </Section>

          <Section heading="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Illumus Energy LLC shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of revenue, loss of profits, or business interruption,
              arising from or related to our services or website use.
            </p>
            <p>
              Our total cumulative liability for any claim arising from a specific project shall not
              exceed the total contract value paid by the client for that project.
            </p>
          </Section>

          <Section heading="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Illumus Energy LLC and its
              officers, employees, and agents from any claims, damages, losses, or expenses
              (including reasonable attorney fees) arising from:
            </p>
            <Ul>
              <li>Your breach of these Terms or any service agreement</li>
              <li>Your negligence or willful misconduct on project sites</li>
              <li>False or misleading information provided to us in connection with services</li>
            </Ul>
          </Section>

          <Section heading="10. Dispute Resolution">
            <p>
              In the event of a dispute arising from these Terms or any service agreement, the
              parties agree to first attempt resolution through good-faith negotiation within 30 days
              of written notice of the dispute.
            </p>
            <p>
              If negotiation is unsuccessful, disputes shall be submitted to binding arbitration in
              Harris County, Texas under the rules of the American Arbitration Association (AAA). The
              prevailing party shall be entitled to recover reasonable attorney fees and costs.
            </p>
          </Section>

          <Section heading="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Texas, without regard to its conflict of law provisions. Any legal proceedings
              not subject to arbitration shall be brought exclusively in the state or federal courts
              located in Harris County, Texas.
            </p>
          </Section>

          <Section heading="12. Modifications to Terms">
            <p>
              Illumus Energy reserves the right to modify these Terms at any time. When changes are
              made, we will update the &ldquo;Last Updated&rdquo; date at the top of this page.
              Continued use of our website or services following any modifications constitutes your
              acceptance of the revised Terms. We recommend reviewing this page periodically.
            </p>
          </Section>

          <Section heading="13. Contact Information">
            <p>
              For questions about these Terms &amp; Conditions or any aspect of your engagement
              with Illumus Energy, please contact us:
            </p>
            <Ul>
              <li><strong className="text-navy-800">Email:</strong> commercial@illumusenergy.com</li>
              <li><strong className="text-navy-800">Phone:</strong> 1-800-555-1234</li>
              <li>
                <strong className="text-navy-800">Mail:</strong> Illumus Energy LLC, 1200 Commerce
                Dr, Suite 400, Houston, TX 77001
              </li>
            </Ul>
          </Section>

          {/* CTA */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-navy-900 font-bold mb-1">Ready to start a commercial project?</h3>
              <p className="text-slate-500 text-sm">
                Contact our estimation team for a detailed scope and transparent pricing.
              </p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
