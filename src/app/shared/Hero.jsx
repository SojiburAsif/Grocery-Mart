'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaLeaf, FaTruck, FaShoppingCart, FaBolt } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  { id: 1, image: 'https://i.ibb.co.com/R4cNHGbB/pineapple-8440180-1920.jpg' },
  { id: 2, image: 'https://i.ibb.co.com/LHQrCk8/grapes-1844745-1920.jpg' },
  { id: 3, image: 'https://i.ibb.co.com/KpW8phx3/cherry-1437707-1920.jpg' },
]

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* background overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Container: constrained width and responsive padding */}
      <div className="relative mx-auto w-full max-w-367 px-4 sm:px-6 lg:px-8">
        {/* center content vertically: responsive min-heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[54vh] md:min-h-[64vh] lg:min-h-[79vh] py-8 lg:py-14">

          {/* LEFT: TEXT BLOCK */}
          <div className="z-10 px-1 md:px-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <FaLeaf className="text-emerald-300 w-5 h-5" aria-hidden />
              <span className="text-emerald-400 uppercase tracking-wide text-xs sm:text-sm font-semibold">Grocery Mart</span>
            </div>

            {/* Fixed responsive heading sizes */}
            <h1 className="font-extrabold leading-tight text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] xl:text-[56px]">
              Fresh & Healthy
              <br className="hidden lg:inline" /> Grocery Products
            </h1>

            <p className="mt-4 text-[13px] sm:text-sm md:text-[16px] text-gray-300 max-w-lg">
              Order fresh fruits, vegetables and daily essentials delivered to your doorstep. Handpicked quality, fast delivery and transparent pricing — every single day.
            </p>

            {/* Feature list */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/8 text-xs sm:text-sm">
                <FaTruck className="text-emerald-300 w-4 h-4" aria-hidden />
                <span>Free delivery over ৳500</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/8 text-xs sm:text-sm">
                <FaBolt className="text-emerald-300 w-4 h-4" aria-hidden />
                <span>Fast delivery · 30–45 min</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2.5 rounded-lg font-semibold shadow transition transform hover:-translate-y-0.5 text-[13px] sm:text-sm">
                <FaShoppingCart aria-hidden />
                <span>Shop Now</span>
              </button>

              <button className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-semibold shadow text-[13px] sm:text-sm">
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* RIGHT: SWIPER / SHOWCASE */}
          <div className="z-10 px-1 md:px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="rounded-xl shadow-2xl overflow-hidden"
            >
              {slides.map((s) => (
                <SwiperSlide key={s.id}>
                  <div className="relative group">
                    {/* fixed responsive image heights + lazy loading */}
                    <img
                      src={s.image}
                      alt={`Slide ${s.id}`}
                      loading="lazy"
                      className="w-full h-44 sm:h-56 md:h-72 lg:h-[420px] object-cover"
                    />

                    {/* overlay CTA on image (appears on hover for pointer devices) */}
                    <div className="absolute inset-0 flex items-end justify-center p-3 sm:p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-full max-w-xs sm:max-w-sm mx-auto flex flex-col sm:flex-row justify-between gap-2">
                        <button className="w-full sm:w-auto bg-white/95 text-black px-3 py-2 rounded-lg font-medium flex items-center justify-center gap-2 text-sm">
                          <FaShoppingCart aria-hidden /> Add to Cart
                        </button>
                        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 px-3 py-2 rounded-lg text-white font-medium flex items-center justify-center gap-2 text-sm">
                          <FaBolt aria-hidden /> Buy Now
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
