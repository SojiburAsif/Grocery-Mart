"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FiPackage, FiDollarSign, FiTag, FiBox, FiImage, FiCopy, FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setLoading(true);
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error("Failed to fetch product details");
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error(err);
                Swal.fire({ title: "Error", text: err.message, icon: "error", background: "#0f172a", color: "#f8fafc" });
                router.push("/products");
            } finally {
                setLoading(false);
            }
        }
        if (id) fetchProduct();
    }, [id, router]);

    const handleCopyId = async () => {
        try {
            await navigator.clipboard.writeText(id);
            Swal.fire({ toast: true, position: "top-end", icon: "success", title: "ID copied", showConfirmButton: false, timer: 1400, background: "#0f172a", color: "#f8fafc" });
        } catch {
            Swal.fire({ title: "Error", text: "Unable to copy", icon: "error", background: "#0f172a", color: "#f8fafc" });
        }
    };

    const handleDelete = async () => {
        const confirm = await Swal.fire({
            title: `Delete "${product?.name}"?`,
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#dc2626",
            background: "#0f172a",
            color: "#f8fafc",
        });
        if (!confirm.isConfirmed) return;

        try {
            setBusy(true);
            const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
            if (!res.ok) {
                const err = await res.json().catch(() => ({ error: "Delete failed" }));
                throw new Error(err?.error || "Failed to delete product");
            }
            Swal.fire({ toast: true, position: "top-end", icon: "success", title: "Product deleted", showConfirmButton: false, timer: 1400, background: "#0f172a", color: "#f8fafc" });
            router.push("/products");
        } catch (err) {
            Swal.fire({ title: "Error", text: err.message || "Delete failed", icon: "error", background: "#0f172a", color: "#f8fafc" });
        } finally {
            setBusy(false);
        }
    };

    const handleEdit = () => {
        router.push(`/products/${id}/edit`); // যদি edit route না থাকে, তুমি এখানে ঠিক করে দিবে
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
                <div className="animate-pulse w-full max-w-4xl">
                    <div className="h-64 bg-gray-900 rounded-lg mb-4" />
                    <div className="h-6 bg-gray-900 rounded w-1/3 mb-3" />
                    <div className="h-4 bg-gray-900 rounded w-1/2 mb-2" />
                    <div className="h-40 bg-gray-900 rounded" />
                </div>
            </div>
        );
    }

    if (!product) return null;

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <button
                            onClick={() => router.back()}
                            className="text-gray-300 hover:text-white px-3 py-1 rounded transition"
                        >
                            ← Back
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleCopyId}
                            className="flex items-center gap-2 text-sm text-gray-300 px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 transition"
                            title="Copy product ID"
                        >
                            <FiCopy /> <span className="hidden sm:inline">Copy ID</span>
                        </button>

                        <button
                            onClick={handleEdit}
                            className="flex items-center gap-2 text-sm px-3 py-1 rounded bg-green-600 hover:bg-green-500 transition"
                            title="Edit product"
                        >
                            <FiEdit /> <span className="hidden sm:inline">Edit</span>
                        </button>

                        <button
                            onClick={handleDelete}
                            disabled={busy}
                            className="flex items-center gap-2 text-sm px-3 py-1 rounded bg-red-600 hover:bg-red-500 transition disabled:opacity-50"
                            title="Delete product"
                        >
                            <FiTrash2 /> <span className="hidden sm:inline">Delete</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Image */}
                    <div className="md:col-span-7">
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                            {product.image ? (
                                <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
                            ) : (
                                <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-gray-400">
                                    <FiImage size={56} />
                                </div>
                            )}
                        </div>

                        {/* small info under image */}
                        <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300">ID: <span className="font-mono ml-1 text-xs text-gray-200">{id}</span></span>
                                <span className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300">Category: <span className="ml-2 text-gray-200">{product.category || "N/A"}</span></span>
                            </div>
                            <div className="text-sm text-gray-400">Stock: <span className="text-gray-200 ml-2">{product.stock ?? 0}</span></div>
                        </div>
                    </div>

                    {/* Details panel */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <div className="bg-gray-900 rounded-xl p-5 shadow-lg h-full flex flex-col justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-green-400 flex items-center gap-3">
                                    <FiPackage /> <span>{product.name}</span>
                                </h1>

                                <div className="mt-3 flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-green-400 text-lg">
                                        <FiDollarSign />
                                        <span className="text-lg font-semibold">BDT {Number(product.price).toLocaleString()}</span>
                                    </div>

                                    <div className="px-2 py-1 rounded bg-gray-800 text-sm text-gray-300">Availability: <span className="ml-2 text-gray-200">{(product.stock ?? 0) > 0 ? "In stock" : "Out of stock"}</span></div>
                                </div>

                                <div className="mt-4 text-gray-300 leading-relaxed">
                                    {product.description ? (
                                        <p>{product.description}</p>
                                    ) : (
                                        <p className="italic text-gray-500">No description provided for this product.</p>
                                    )}
                                </div>
                            </div>

                         
                        </div>

                        {/* meta / extra */}
                        <div className="bg-gray-900 rounded-xl p-4 shadow">
                            <h4 className="text-sm text-gray-400 mb-2">Product details</h4>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center gap-3">
                                    <FiTag className="text-green-400" /> <span>Category:</span> <strong className="ml-2 text-gray-200">{product.category || "N/A"}</strong>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiBox className="text-green-400" /> <span>Stock:</span> <strong className="ml-2 text-gray-200">{product.stock ?? 0}</strong>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiDollarSign className="text-green-400" /> <span>Price:</span> <strong className="ml-2 text-gray-200">BDT {Number(product.price).toLocaleString()}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
