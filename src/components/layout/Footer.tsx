import Link from 'next/link'
import { navItems } from '@/data/navigation'
import LogoMark from '@/components/ui/LogoMark'

const houseLinks = navItems.filter((n) => n.isHouse)

export default function Footer() {
  return (
    <footer
      className="bg-base border-t border-white/5 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-5 hover:opacity-80 transition-opacity"
              aria-label="The CEE Company homepage"
            >
              <LogoMark size={80} />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Creative Entertainment Enterprises Pvt Ltd. Five Houses. One Dynasty. Built to further human potential.
            </p>
          </div>

          {/* Houses column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Our Houses
            </h3>
            <ul className="space-y-3" role="list">
              {houseLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  About CEE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Get in Touch
            </h3>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Tell us which house you need. We will route your enquiry to the
              right team.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold text-bombay hover:text-bombay-light transition-colors duration-200"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Creative Entertainment Enterprises
            Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/legal"
              className="text-white/25 text-xs hover:text-white/50 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal"
              className="text-white/25 text-xs hover:text-white/50 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
