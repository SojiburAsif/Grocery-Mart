'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaLeaf, FaTruck, FaShoppingCart, FaBolt } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  { id: 1, image: 'https://i.ibb.co/FL0NFSws/car-8136751-1920.jpg' },
  { id: 2, image: 'https://i.ibb.co/FL0NFSws/car-8136751-1920.jpg' },
  { id: 3, image: 'https://i.ibb.co/FL0NFSws/car-8136751-1920.jpg' },
]

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* background overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Container: constrained width and responsive padding */}
      <div className="relative mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* center content vertically: responsive min-heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center
                        min-h-[70vh] md:min-h-[78vh] lg:min-h-screen py-12 lg:py-20">

          {/* LEFT: TEXT BLOCK */}
          <div className="z-10 px-1 md:px-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaLeaf className="text-emerald-300 w-6 h-6" />
              <span className="text-emerald-400 uppercase tracking-wide text-sm md:text-base font-semibold">
                Grocery Mart
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-[1.02]">
              Fresh & Healthy
              <br className="hidden lg:inline" /> Grocery Products
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
              Order fresh fruits, vegetables and daily essentials delivered to your doorstep.
              Handpicked quality, fast delivery and transparent pricing — every single day.
            </p>

            {/* Feature list */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/8">
                <FaTruck className="text-emerald-300 w-5 h-5" />
                <span className="text-sm text-gray-200">Free delivery over ৳500</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/8">
                <FaBolt className="text-emerald-300 w-5 h-5" />
                <span className="text-sm text-gray-200">Fast delivery · 30–45 min</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5">
                <FaShoppingCart /> <span className="text-sm md:text-base">Shop Now</span>
              </button>

              <button className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold shadow transition">
                <span className="text-sm md:text-base">Learn More</span>
              </button>
            </div>
          </div>

          {/* RIGHT: SWIPER / SHOWCASE */}
          <div className="z-10 px-1 md:px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="rounded-xl shadow-2xl overflow-hidden"
            >
              {slides.map((s) => (
                <SwiperSlide key={s.id}>
                  <div className="relative group">
                    {/* responsive image heights:
                        - mobile: h-56
                        - sm: h-64
                        - md: h-80
                        - lg: h-[520px] */}
                    <img
                      src={s.image}
                      alt={`Slide ${s.id}`}
                      className="w-full h-56 sm:h-64 md:h-80 lg:h-[520px] object-cover"
                    />

                    {/* overlay CTA on image (appears on hover for pointer devices) */}
                    <div className="absolute inset-0 flex items-end justify-center p-5 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row justify-between gap-3">
                        <button className="w-full sm:w-auto bg-white/95 text-black px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                          <FaShoppingCart /> Add to Cart
                        </button>
                        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-white font-medium flex items-center justify-center gap-2">
                          <FaBolt /> Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  )
}
