"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 fixed">
      <h2 className="text-xl font-bold mb-6">🚀 Dashboard</h2>
      <nav className="space-y-2">
        <Link href="/" className="block p-2 rounded hover:bg-gray-700">
          📊 Overview
        </Link>
        <Link href="/users" className="block p-2 rounded hover:bg-gray-700">
          👤 Users
        </Link>
        <Link href="/products" className="block p-2 rounded hover:bg-gray-700">
          🛒 Products
        </Link>
        <Link href="/settings" className="block p-2 rounded hover:bg-gray-700">
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}
