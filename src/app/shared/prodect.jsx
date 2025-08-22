"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiPackage,
  FiDollarSign,
  FiImage,
  FiShoppingCart,
  FiArrowUpRight,
} from "react-icons/fi";
import Swal from "sweetalert2";

const Prodect = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (mounted) setProducts(data);
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          background: "#111827",
          color: "#f9fafb",
        });
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchProducts();
    return () => {
      mounted = false;
    };
  }, []);

  const handleBuyNow = (product) => {
    Swal.fire({
      title: "Buy Now",
      text: `You clicked Buy Now for "${product.name}"`,
      icon: "success",
      background: "#111827",
      color: "#f9fafb",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg border border-gray-800 shadow-lg p-4 animate-pulse"
            >
              <div className="h-40 bg-gray-800 rounded mb-4" />
              <div className="h-5 bg-gray-800 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-800 rounded w-1/2 mb-3" />
              <div className="h-9 bg-gray-800 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <p className="text-gray-400 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div id="#products" className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 flex items-center gap-3">
            <FiPackage className="text-green-500 text-4xl" /> Top Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product._id}
              className="group bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl border border-gray-800 shadow-lg overflow-hidden hover:shadow-green-500 transition-transform transform "
            >
              {/* Image */}
              <div className="relative w-full h-44 bg-gray-800">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <FiImage size={36} />
                  </div>
                )}

                {/* stock badge */}
                <div
                  className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${
                    product.stock > 0
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {product.stock > 0
                    ? `Stock: ${product.stock}`
                    : "Out of stock"}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col h-full">
                <div>
                  <h3 className="text-lg font-semibold text-green-300 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                    {product.description || "No description available."}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-green-300">
                    <FiDollarSign />
                    <span className="font-medium">
                      BDT {Number(product.price).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">
                    {product.category || "Uncategorized"}
                  </div>
                </div>

                {/* Actions (only icons) */}
                <div className="mt-4 flex gap-3">
                  <button
                    aria-label={`Buy now ${product.name}`}
                    onClick={() => handleBuyNow(product)}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <FiShoppingCart size={20} />
                  </button>

                  <Link
                    href={`/products/${product._id}`}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label={`View details of ${product.name}`}
                  >Deatils
                    <FiArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prodect;
