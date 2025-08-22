"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiUser, FiHome, FiBox } from "react-icons/fi";
import { FaLeaf, FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  const navLinks = [
    { href: "/", label: "Home", icon: <FiHome className="w-4 h-4" aria-hidden /> },
    { href: "/products", label: "Products", icon: <FiBox className="w-4 h-4" aria-hidden /> },
    { href: "/about", label: "About", icon: <FaInfoCircle className="w-4 h-4" aria-hidden /> },
  ];

  const linkBase = "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors duration-150";

  const linkActive = "bg-gray-800 text-green-300";
  const linkInactive = "text-gray-300 hover:text-green-300 hover:bg-gray-900";

  const linkClasses = (href) => `${linkBase} ${pathname === href ? linkActive : linkInactive}`;

  return (
    <header className="bg-gray-950 text-white border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-md flex items-center justify-center bg-transparent ring-1 ring-gray-800">
                <FaLeaf className="text-emerald-300 w-5 h-5" />
              </div>
              <span className="text-lg font-semibold text-green-300">Grocery Mart</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                {link.icon}
                <span className="leading-none">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu toggle */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md lg:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>

            {/* Auth area */}
            {isLoading ? (
              <div className="px-3 py-2 text-sm text-gray-400">Loading...</div>
            ) : !isAuthenticated ? (
              <button
                onClick={() => signIn("google")}
                className="px-3 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md text-sm font-medium"
              >
                Login
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/Dashboard/addProduct"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm font-medium"
                >
                  <FiUser className="w-4 h-4 text-gray-200" />
                  <span className="hidden sm:inline text-sm text-gray-200">{session?.user?.name ? session.user.name.split(" ")[0] : session?.user?.email}</span>
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-3 py-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile nav panel */}
        <div className={`lg:hidden transform transition-all duration-200 ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="mt-2 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-2 px-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`${linkClasses(link.href)} w-full`}> 
                  {link.icon}
                  <span className="leading-none">{link.label}</span>
                </Link>
              ))}

              <div className="pt-2 border-t border-gray-800 mt-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-200">Hi, {session?.user?.name?.split(" ")[0]}</div>
                    <Link
                      href="/Dashboard/addProduct"
                      className="block px-3 py-2 bg-gray-800 rounded-md mt-2 text-sm text-white"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full text-left px-3 py-2 mt-2 rounded-md text-sm text-red-400 border border-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => signIn("google")}
                    className="block w-full text-left px-3 py-2 mt-2 rounded-md bg-green-500 text-white"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
