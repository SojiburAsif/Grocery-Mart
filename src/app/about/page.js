"use client";

import Link from "next/link";
import { FaArrowLeft, FaShoppingCart, FaUsers, FaMapMarkerAlt, FaPhoneAlt, FaLeaf } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar / Back button */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300">
          <FaArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-2xl">
              <span className="font-bold text-black">GM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold">Grocery Mart</h1>
              <p className="text-xs text-green-300">Fresh • Fast • Friendly</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-black/60 via-black/50 to-black/40 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 leading-tight">Welcome to Grocery Mart</h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              Grocery Mart delivers fresh groceries straight to your door. We carefully select quality products and
              partner with local farmers to bring you the best — every day.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-xl font-semibold shadow hover:brightness-95"
              >
                <FaShoppingCart className="w-4 h-4" />
                Shop Products
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-green-700 text-green-300 px-4 py-2 rounded-xl hover:bg-green-900/30"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 shadow-lg">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/grocery-hero-placeholder.jpg"
                alt="Grocery showcase"
                className="w-full h-56 object-cover block brightness-75"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Why customers love us</h3>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>• Fresh local produce sourced daily</li>
                <li>• Fast delivery across city</li>
                <li>• Simple returns & great customer service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-green-300">What we do</h3>
          <p className="mt-2 text-gray-400 max-w-2xl">A quick overview of Grocery Mart — grounded in quality and community.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl border border-white/5 bg-white/2">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-green-600/20">
                  <FaShoppingCart className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Easy Ordering</h4>
                  <p className="text-sm text-gray-300 mt-1">Order in few clicks and get items delivered same day.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/5 bg-white/2">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-green-600/20">
                  <FaUsers className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Community Focus</h4>
                  <p className="text-sm text-gray-300 mt-1">We support local farmers and small producers.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/5 bg-white/2">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-green-600/20">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="text-sm text-gray-300 mt-1">On-time delivery with strict quality checks.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/5 bg-white/2">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-green-600/20">
                  <FaPhoneAlt className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Support</h4>
                  <p className="text-sm text-gray-300 mt-1">24/7 customer support for all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission & Team */}
      <section className="py-14 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-green-300">Our Mission</h3>
            <p className="mt-3 text-gray-300">To make fresh groceries accessible to everyone while supporting local producers and minimizing waste.</p>

            <h4 className="mt-6 text-lg font-semibold">Our Story</h4>
            <p className="mt-2 text-gray-300">Founded by neighbourhood shoppers and food lovers. We started small and grew with community trust.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-300">Team</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/3">
                <div className="font-semibold">Ayesha Karim</div>
                <div className="text-sm text-gray-300">Co-founder & Operations</div>
              </div>
              <div className="p-4 rounded-lg bg-white/3">
                <div className="font-semibold">Rafi Ahmed</div>
                <div className="text-sm text-gray-300">Head of Partnerships</div>
              </div>
              <div className="p-4 rounded-lg bg-white/3">
                <div className="font-semibold">Sadia Islam</div>
                <div className="text-sm text-gray-300">Customer Success</div>
              </div>
              <div className="p-4 rounded-lg bg-white/3">
                <div className="font-semibold">Jamal Khan</div>
                <div className="text-sm text-gray-300">Delivery Lead</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h4 className="text-lg font-bold">Grocery Mart</h4>
            <p className="mt-2 text-gray-300">Fresh groceries delivered with care.</p>
          </div>

          <div>
            <h5 className="font-semibold text-green-300">Contact</h5>
            <p className="text-sm text-gray-300 mt-2">123 Market St, YourCity</p>
            <p className="text-sm text-gray-300">+880 1X XXXX XXXX</p>
            <p className="text-sm text-gray-300">hello@grocerymart.example</p>
          </div>

          <div>
            <h5 className="font-semibold text-green-300">Quick Links</h5>
            <ul className="mt-2 text-sm text-gray-300 space-y-2">
              <li>
                <Link href="/products" className="hover:text-green-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-green-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/dashboard/add-product" className="hover:text-green-300">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Grocery Mart. All rights reserved.</div>
      </footer>
    </div>
  );
}
