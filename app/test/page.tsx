"use client";

import { useState } from "react";

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow p-10 text-center">
        <p className="text-6xl font-bold text-indigo-600 mb-6">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-600"
        >
          +1
        </button>
      </div>
    </main>
  );
}
