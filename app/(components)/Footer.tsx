import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-8 md:px-12 lg:px-16 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#B88E2F]">Funiro</h2>
          <address className="not-italic text-base text-gray-600 space-y-2">
            <p>400 University Drive Suite 200 Coral</p>
            <p>Gables, FL 33134 USA</p>
          </address>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Links</h3>
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-base text-gray-600 hover:text-[#B88E2F] transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-base text-gray-600 hover:text-[#B88E2F] transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-base text-gray-600 hover:text-[#B88E2F] transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Help */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Help</h3>
          <nav className="flex flex-col gap-3">
            <Link href="/payment-options" className="text-base text-gray-600 hover:text-[#B88E2F] transition-colors">
              Payment Options
            </Link>
            <Link href="/returns" className="text-base text-gray-600 hover:text-[#B88E2F] transition-colors">
              Returns
            </Link>
            <Link href="/privacy-policies" className="text-base text-gray-600 hover:text-[#B88E2F] transition-colors">
              Privacy Policies
            </Link>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-col gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-[#B88E2F] placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 text-base font-medium text-[#B88E2F] border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Funiro. All rights reserved
        </p>
      </div>
    </footer>
  );
}