import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal | Privacy Policy and Terms of Service',
  description:
    'Privacy Policy and Terms of Service for Creative Entertainment Enterprises Pvt Ltd.',
}

export default function LegalPage() {
  return (
    <>
      <section className="pt-36 pb-16 border-b border-white/5" aria-label="Legal documents">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-none">
            Privacy and Terms.
          </h1>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 border-b border-white/5" aria-labelledby="privacy-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            id="privacy-heading"
            className="font-display text-3xl font-black text-white mb-10"
          >
            Privacy Policy
          </h2>

          {/* PLACEHOLDER: full Privacy Policy copy to be drafted by legal counsel */}
          <div className="space-y-8 text-white/60 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-3">1. Who we are</h3>
              <p>
                Creative Entertainment Enterprises Pvt Ltd (&quot;CEE&quot;, &quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;) is a company registered in India. Our registered address
                will be published here once confirmed. We operate the website at
                cee.co.in and all subdomain pages associated with our four
                operating houses.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">2. Data we collect</h3>
              <p>
                We collect personal data only when you voluntarily provide it to
                us — for example, by submitting our contact form. The data we
                collect includes your name, email address and the content of
                your message. We do not collect payment data directly through
                this website.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">3. How we use your data</h3>
              <p>
                We use the data you submit to respond to your enquiry and to
                route it to the relevant CEE operating house. We do not sell,
                rent or share your personal data with third parties for
                marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">4. Data retention</h3>
              <p>
                We retain enquiry data for as long as is reasonably necessary
                to respond to and follow up on your request. You may request
                deletion of your data at any time by contacting us at the
                address below.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">5. Cookies</h3>
              <p>
                This website may use essential cookies to ensure correct
                functionality. No third-party tracking or advertising cookies
                are currently in use. We will update this section if this
                changes.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">6. Your rights</h3>
              <p>
                You have the right to access, correct and delete any personal
                data we hold about you. To exercise these rights, please contact
                us at{' '}
                {/* PLACEHOLDER: insert legal contact email */}
                <span className="text-white/40">[legal contact email to be confirmed]</span>.
              </p>
            </div>

            <p className="text-white/30 text-sm">
              {/* PLACEHOLDER: insert effective date */}
              Last updated: [date to be confirmed]. This policy is a stub and
              must be reviewed and approved by qualified legal counsel before
              this website is published.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="py-20" aria-labelledby="terms-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            id="terms-heading"
            className="font-display text-3xl font-black text-white mb-10"
          >
            Terms of Service
          </h2>

          {/* PLACEHOLDER: full Terms of Service to be drafted by legal counsel */}
          <div className="space-y-8 text-white/60 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-3">1. Acceptance of terms</h3>
              <p>
                By accessing this website you agree to be bound by these Terms
                of Service. If you do not agree to any part of these terms,
                please do not use this website.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">2. Intellectual property</h3>
              <p>
                All content on this website, including text, graphics, logos and
                design, is the property of Creative Entertainment Enterprises
                Pvt Ltd or its licensors and is protected by applicable
                intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">3. Limitation of liability</h3>
              <p>
                CEE makes no warranties, expressed or implied, regarding the
                accuracy or completeness of information on this website. To the
                fullest extent permitted by law, we exclude all liability for
                any loss or damage arising from use of this website.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">4. Governing law</h3>
              <p>
                These terms are governed by the laws of India. Any disputes
                shall be subject to the exclusive jurisdiction of courts in
                {/* PLACEHOLDER: insert jurisdiction city */}
                  {' '}<span className="text-white">India</span>.
              </p>
            </div>

            <p className="text-white/30 text-sm">
              {/* PLACEHOLDER: insert effective date */}
              Last updated: [date to be confirmed]. These terms are a stub and
              must be reviewed and approved by qualified legal counsel before
              this website is published.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
