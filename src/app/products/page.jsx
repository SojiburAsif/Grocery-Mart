"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  FiPackage,
  FiDollarSign,
  FiEdit,
  FiTrash2,
  FiImage,
  FiArrowUpRight,
  FiBox,
  FiClipboard,
} from "react-icons/fi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          background: "#111827",
          color: "#f9fafb",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const toast = (title, icon = "success") =>
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1800,
      icon,
      title,
      background: "#111827",
      color: "#f9fafb",
    });

  const handleDelete = async (e, id, name) => {
    e.stopPropagation();
    const result = await Swal.fire({
      title: `Delete "${name}"?`,
      text: "This will permanently remove the product.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#374151",
      background: "#111827",
      color: "#f9fafb",
    });
    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Delete failed" }));
        throw new Error(err.error || "Failed to delete product");
      }
      setProducts((prev) => prev.filter((p) => p._id !== id));
      toast("Product deleted", "success");
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
        background: "#111827",
        color: "#f9fafb",
      });
    }
  };

  const openEditModal = (e, product) => {
    e.stopPropagation();
    setEditProduct(product);
  };
  const closeEditModal = () => setEditProduct(null);

  const handleUpdate = async () => {
    if (!editProduct?.name?.trim())
      return Swal.fire({
        title: "Validation",
        text: "Name required",
        icon: "warning",
        background: "#111827",
        color: "#f9fafb",
      });
    if (!editProduct?.price || Number(editProduct.price) <= 0)
      return Swal.fire({
        title: "Validation",
        text: "Price must be >0",
        icon: "warning",
        background: "#111827",
        color: "#f9fafb",
      });

    try {
      const res = await fetch(`/api/products/${editProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editProduct),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Update failed" }));
        throw new Error(err.error || "Failed to update product");
      }
      setProducts((prev) => prev.map((p) => (p._id === editProduct._id ? { ...p, ...editProduct } : p)));
      closeEditModal();
      toast("Product updated");
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
        background: "#111827",
        color: "#f9fafb",
      });
    }
  };

  const handleCardClick = (id) => {
    router.push(`/products/${id}`);
  };

  if (loading)
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="space-y-3 w-full max-w-6xl">
          <div className="h-64 bg-gray-900 rounded-lg animate-pulse" />
          <div className="h-6 bg-gray-900 rounded w-1/4 animate-pulse" />
        </div>
        
      </div>
    );

  if (!products.length)
    return <p className="text-gray-400 p-6">No products found</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 flex items-center gap-3">
          <FiPackage className="text-green-500 text-4xl" />
          Products
        </h1>
        <div className="flex gap-3">
          <Link
            href="Dashboard/addProduct"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded shadow"
          >
            Add Product <FiArrowUpRight />
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <article
            key={product._id}
            onClick={() => handleCardClick(product._id)}
            className="bg-gradient-to-b from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900 transition-transform transform hover:-translate-y-1 rounded-xl border border-gray-800 shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-44 sm:h-48 lg:h-40">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
                  <FiImage size={36} />
                </div>
              )}
              {/* id badge */}
              <div className="absolute top-3 left-3 bg-black/60 text-xs text-gray-200 px-2 py-1 rounded">
                {String(product._id).slice(0, 8)}
              </div>
              {/* stock pill */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${product.stock > 0 ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                {product.stock > 0 ? `In stock (${product.stock})` : "Out of stock"}
              </div>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3">
              <div>
                <h3 className="text-lg font-semibold text-green-300 flex items-center gap-2">
                  <FiPackage /> <span className="truncate">{product.name}</span>
                </h3>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">{product.description || "No description available."}</p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3 text-green-300">
                  <FiDollarSign />
                  <span className="font-medium">BDT {Number(product.price).toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">{product.category || "N/A"}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={(e) => openEditModal(e, product)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-500 rounded text-white"
                >
                  <FiEdit size={16} /> Edit
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/products/${product._id}`); }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
                >
                  <FiArrowUpRight size={16} /> Details
                </button>

                <button
                  onClick={(e) => handleDelete(e, product._id, product.name)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-500 rounded text-white"
                >
                  <FiTrash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Edit Modal (centered overlay) */}
      {editProduct && (
        <div
          onClick={closeEditModal}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-gray-950 rounded-xl p-6 shadow-xl"
          >
            <header className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                <FiEdit /> Edit product
              </h3>
              <button onClick={closeEditModal} className="text-gray-300 hover:text-white text-lg">✕</button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                className="input input-bordered w-full bg-gray-800 text-white"
                placeholder="Name"
                value={editProduct.name || ""}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
              />
              <input
                type="number"
                min="0"
                className="input input-bordered w-full bg-gray-800 text-white"
                placeholder="Price"
                value={editProduct.price ?? 0}
                onChange={(e) => setEditProduct({ ...editProduct, price: Number(e.target.value) })}
              />
              <input
                type="text"
                className="input input-bordered w-full bg-gray-800 text-white sm:col-span-2"
                placeholder="Category"
                value={editProduct.category || ""}
                onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
              />
              <input
                type="number"
                min="0"
                className="input input-bordered w-full bg-gray-800 text-white"
                placeholder="Stock"
                value={editProduct.stock ?? 0}
                onChange={(e) => setEditProduct({ ...editProduct, stock: Number(e.target.value) })}
              />
              <input
                type="text"
                className="input input-bordered w-full bg-gray-800 text-white sm:col-span-2"
                placeholder="Image URL"
                value={editProduct.image || ""}
                onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
              />
              <textarea
                className="textarea textarea-bordered w-full bg-gray-800 text-white sm:col-span-2"
                rows={4}
                placeholder="Description"
                value={editProduct.description || ""}
                onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
              />
            </div>

            <footer className="flex justify-end gap-3 mt-4">
              <button onClick={closeEditModal} className="btn bg-gray-700 hover:bg-gray-600 text-white">Cancel</button>
              <button onClick={handleUpdate} className="btn bg-green-600 hover:bg-green-500 text-white">Save changes</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
