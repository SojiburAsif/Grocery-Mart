// app/error.js
"use client"; // error.js সবসময় client component হতে হবে

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error log:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-red-600 text-2xl font-bold">Something went wrong!</h2>
      <p className="mt-2 text-gray-700">{error.message}</p>
      <button
        onClick={() => reset()} 
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
