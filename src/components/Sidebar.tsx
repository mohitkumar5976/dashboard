"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, People, ShoppingCart, Settings } from "@mui/icons-material";

const links = [
  { href: "/", label: "Overview", icon: <Home fontSize="small" /> },
  { href: "/users", label: "Users", icon: <People fontSize="small" /> },
  { href: "/products", label: "Products", icon: <ShoppingCart fontSize="small" /> },
  { href: "/settings", label: "Settings", icon: <Settings fontSize="small" /> },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 h-screen fixed bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold tracking-wide">🚀 Dashboard</h2>
        </div>
        <nav className="mt-6 space-y-2 px-3">
          {links.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {icon}
                <span className="font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="w-64 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-2xl font-bold mb-6">🚀 Dashboard</h2>
            <nav className="space-y-2">
              {links.map(({ href, label, icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                      active
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)} // close on navigation
                  >
                    {icon}
                    <span className="font-medium">{label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
