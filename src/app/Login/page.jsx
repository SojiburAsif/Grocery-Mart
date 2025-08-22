"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login to MyShop</h1>
      <button
        onClick={handleLogin}
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Sign in with Google"}
      </button>
    </div>
  );
}
