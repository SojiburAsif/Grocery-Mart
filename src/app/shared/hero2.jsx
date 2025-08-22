'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaStore } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: 'Fresh Apples',
      tagline: 'Locally sourced • Crisp',
      details:
        'Fresh red apples from local farms. Sold per kg. Carefully selected and quality checked before dispatch.',
      price: '$120 / kg',
      image: 'https://i.ibb.co/DDYR9mrw/apple-1702316-1920.jpg',
    },
    {
      id: 2,
      title: 'Organic Eggs (12)',
      tagline: 'Free-range • Protein rich',
      details: 'A dozen free-range eggs from trusted suppliers. Perfect for breakfast and baking.',
      price: '$160 / pack',
      image: 'https://i.ibb.co/6R6xFjnh/easter-eggs-1231120-1920.jpg',
    },
    {
      id: 3,
      title: 'Daily Milk (1L)',
      tagline: 'Fresh • Pasteurized',
      details: 'Fresh pasteurized milk delivered same day when available. Keep refrigerated.',
      price: '$80 / L',
      image: 'https://i.ibb.co/tpMCH9j7/milk-4082580-1920.jpg',
    },
  ];

  function openModal(product) {
    setActiveProduct(product);
    setModalOpen(true);
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setModalOpen(false);
    setActiveProduct(null);
    if (typeof window !== 'undefined') document.body.style.overflow = '';
  }

  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-16 py-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-full bg-green-800/20 border border-green-700">
            <GiShoppingBag className="w-10 h-10 text-green-400" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-400">
              Grocery Mart
            </h2>
            <p className="text-sm">Fresh • Fast • Friendly</p>
          </div>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-3 text-green-300">Welcome to Grocery Mart</h3>
            <p className="mb-6 max-w-3xl">
              Grocery Mart delivers fresh groceries straight to your door. We carefully select quality products and partner with local farmers to bring you the best every day.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 bg-green-500 text-black font-semibold px-5 py-3 rounded-full shadow">
                <FaStore />
                Shop Products
              </Link>

              <a href="#contact" className="inline-flex items-center gap-2 border border-green-700 text-white px-4 py-3 rounded-full">
                <FaEnvelope />
                Contact Us
              </a>
            </div>


          </div>

          {/* Contact / Info card */}

        </div>

        {/* Products grid */}
        <h3 id="#products" className="mt-12 text-2xl font-bold text-green-300 flex items-center gap-2">
          <GiShoppingBag className="w-6 h-6 text-green-400" />
          Grocery Showcase
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((p) => (
            <article key={p.id} className="bg-[rgba(255,255,255,0.02)] border border-green-900/40 p-6 rounded-2xl shadow-sm">
              <div className="h-40 rounded-md overflow-hidden mb-4">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <h4 className="text-lg font-semibold text-green-300">{p.title}</h4>
              <p className="text-sm text-white/80 mb-4">{p.tagline}</p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-white/80">{p.price}</div>

                <button
                  onClick={() => openModal(p)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-700 text-white text-sm hover:bg-green-900/20"
                >
                  View
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA & Footer small */}
        <div className="mt-12 flex items-center gap-4">
          <a href="#contact" className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg">Contact Us</a>
          <Link href="#products" className="text-sm text-white/80 underline underline-offset-2">View All Products</Link>
        </div>

        {/* Modal */}
        {modalOpen && activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeModal}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-xl w-full mx-4 bg-black rounded-2xl border border-green-900/40 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-green-300">{activeProduct.title}</h4>
                  <p className="text-sm text-white/80 mt-2">{activeProduct.tagline}</p>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="text-white/80 hover:text-green-300"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 mb-4 h-56 rounded-md overflow-hidden">
                <img src={activeProduct.image} alt={activeProduct.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-white/80">{activeProduct.details}</p>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-white font-semibold">{activeProduct.price}</div>
                <div className="flex items-center gap-3">
                  <Link href="#" className="inline-flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-full font-semibold">Add to Cart</Link>
                  <button onClick={closeModal} className="inline-flex items-center gap-2 px-4 py-2 border border-green-700 rounded-full text-white">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
