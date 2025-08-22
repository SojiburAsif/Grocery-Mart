// components/Footer.jsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand / About */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* compact svg logo */}
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-500"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 2l2.5 6.5L21 9l-5 3.8L17 20l-5-3.2L7 20l1-7.2L3 9l6.5-.5L12 2z"
                />
              </svg>
              <span className="text-lg font-semibold text-green-500">Grocery Mart</span>
            </Link>

            <p className="text-sm text-gray-300 max-w-[16rem]">
              Grocery Mart <br />
              Trusted groceries and essentials since day one.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="mailto:asif81434@gmail.com"
                className="text-sm text-gray-300 hover:text-green-300"
                aria-label="Email support"
              >
                asif81434@gmail.com
              </a>
          
              <a
                href="tel:01840587095"
                className="text-sm text-gray-300 hover:text-green-300"
                aria-label="Call support"
              >
               phone: +8801840587095
              </a>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <h6 className="text-sm font-medium text-green-400 mb-2">Company</h6>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-green-300">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-green-300">About</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-green-300">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-medium text-green-400 mb-2">Products</h6>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-green-300">All Products</Link>
                </li>
                <li>
                  <Link href="/products?category=new" className="text-gray-300 hover:text-green-300">New Arrivals</Link>
                </li>
                <li>
                  <Link href="/products?category=sale" className="text-gray-300 hover:text-green-300">On Sale</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-medium text-green-400 mb-2">Support</h6>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-green-300">Helpdesk</Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-gray-300 hover:text-green-300">Refund policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-green-300">Terms</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Social & Address */}
          <div className="space-y-4">
            <div>
              <h6 className="text-sm font-medium text-green-400 mb-2">Follow Us</h6>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-800 hover:bg-green-800/40"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current text-green-300">
                    <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.86 9.86 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.203-4.92 4.92 0 .386.044.762.128 1.124C7.728 8.86 4.1 6.9 1.67 3.92A4.822 4.822 0 0 0 .96 5.9c0 1.706.87 3.214 2.188 4.098A4.9 4.9 0 0 1 .96 9.5v.06c0 2.385 1.693 4.374 3.946 4.825a4.935 4.935 0 0 1-2.212.084c.623 1.944 2.432 3.36 4.576 3.4A9.868 9.868 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 21.5c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-800 hover:bg-green-800/40"
                  aria-label="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current text-green-300">
                    <path d="M19.615 3.184C16.01 2.938 7.983 2.938 4.383 3.184.486 3.45.026 5.804 0 11.0c.026 5.195.486 7.55 4.383 7.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.55-4.385-8.816zM9 15.999V8.0l8 4-8 3.999z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-800 hover:bg-green-800/40"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current text-green-300">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.7c0-2.2 1.3-3.4 3.3-3.4.95 0 1.94.17 1.94.17v2.14h-1.1c-1.1 0-1.45.69-1.45 1.4V12h2.47l-.39 2.9h-2.08v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              <div>Office Address</div>
              <div className="mt-1">Level-4, 34, Awal Centre, Banani, Dhaka</div>
              <div className="mt-2 text-xs text-gray-500">Available: Sat - Thu, 10:00 AM to 7:00 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Grocery Mart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
