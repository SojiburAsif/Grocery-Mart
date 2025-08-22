"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login to MyShop</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="btn btn-primary"
      >
        Sign in with Google
      </button>
    </div>
  );
}
