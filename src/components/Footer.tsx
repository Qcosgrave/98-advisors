import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <span className="font-serif text-2xl font-semibold text-ivory">
                98
              </span>
              <span className="font-serif text-2xl font-light text-ivory ml-1">
                Advisors
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-sm text-ivory/50">
              Boutique strategic advisory for founders and business owners
              navigating complex decisions and transactions.
            </p>
            <p className="text-sm font-light mt-4 text-ivory/40">
              Philadelphia, PA
            </p>
            <p className="text-xs font-light mt-2 text-ivory/25">
              A 98 Holdings LLC company
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/situations", label: "Who We Help" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light text-ivory/50 hover:text-ivory transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-6">
              Advisory Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Sell-Side Advisory",
                "Buy-Side Advisory",
                "Capital Advisory",
                "Strategic Advisory",
                "Acquisition Readiness",
              ].map((service) => (
                <span
                  key={service}
                  className="text-sm font-light text-ivory/50"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-xs font-light text-ivory/30">
              &copy; {new Date().getFullYear()} 98 Holdings LLC. All rights
              reserved.
            </p>
            <p className="text-xs font-light text-ivory/25 max-w-xl leading-relaxed">
              98 Advisors provides strategic advisory and consulting services.
              The firm is not a registered broker-dealer or investment adviser
              and does not provide securities brokerage or placement services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
