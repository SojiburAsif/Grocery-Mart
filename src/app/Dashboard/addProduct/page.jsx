"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiPackage, FiDollarSign, FiImage, FiEdit, FiPlusCircle, FiArrowLeft } from "react-icons/fi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AddProductPage = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const resetForm = () => {
        setName("");
        setDesc("");
        setPrice("");
        setImageURL("");
        setCategory("");
        setStock("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) return Swal.fire({ icon: "warning", title: "Validation", text: "Product name is required", background: "#111827", color: "#f9fafb" });
        if (!price || Number(price) <= 0) return Swal.fire({ icon: "warning", title: "Validation", text: "Valid price is required", background: "#111827", color: "#f9fafb" });

        setLoading(true);

        try {
            const productData = {
                name,
                description: desc,
                price: Number(price),
                image: imageURL,
                category,
                stock: Number(stock) || 0,
            };

            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to add product");

            await Swal.fire({
                icon: "success",
                title: "Product added!",
                text: `${name} has been added successfully.`,
                background: "#111827",
                color: "#f9fafb",
            });

            resetForm();
            router.push("/products");
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: err.message || "Something went wrong. Try again.",
                background: "#111827",
                color: "#f9fafb",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-3xl">
                {/* Back Button */}
                <button
                    onClick={() => router.push("/products")}
                    className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white"
                >
                    <FiArrowLeft /> Back to Products
                </button>

                <div className="mb-6 flex items-center gap-3">
                    <FiPlusCircle className="text-green-500 text-4xl" />
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-green-500">
                            Add New Product
                        </h1>
                      
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Product Name <span className="text-red-400">*</span>
                            </label>
                            <div className="flex items-center bg-gray-800 border border-gray-700 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                                <FiPackage className="text-green-500 mr-2" />
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Product Name"
                                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Price (BDT) <span className="text-red-400">*</span>
                            </label>
                            <div className="flex items-center bg-gray-800 border border-gray-700 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                                <FiDollarSign className="text-green-500 mr-2" />
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Tk"
                                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Category"
                                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Stock Quantity</label>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                type="number"
                                min="0"
                                placeholder="e.g. 20"
                                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                            <div className="flex items-start bg-gray-800 border border-gray-700 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                                <FiEdit className="text-green-500 mt-1 mr-2" />
                                <textarea
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    rows={4}
                                    placeholder="Short description about the product"
                                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                            <div className="flex items-center bg-gray-800 border border-gray-700 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                                <FiImage className="text-green-500 mr-2" />
                                <input
                                    value={imageURL}
                                    onChange={(e) => setImageURL(e.target.value)}
                                    placeholder="https://example.com/product.jpg"
                                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`inline-flex items-center gap-2 px-5 py-2 rounded-md font-medium transition ${loading
                                ? "bg-green-600/70 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-500"
                                }`}
                        >
                            {loading ? "Adding..." : "Add Product"}
                        </button>

                        <button
                            type="button"
                            onClick={resetForm}
                            className="px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800/60"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
