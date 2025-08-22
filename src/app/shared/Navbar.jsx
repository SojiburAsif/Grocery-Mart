"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiUser, FiHome, FiBox } from "react-icons/fi";
import { FaLeaf, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  const navLinks = [
    { href: "/", label: "Home", icon: <FiHome className="w-4 h-4" /> },
    { href: "/products", label: "Products", icon: <FiBox className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <FaInfoCircle className="w-4 h-4" /> },
  ];

  const linkClasses = (href) =>
    `flex items-center gap-4 rounded-md px-4 bg-gray-950 text-sm ${pathname === href
      ? "text-green-400 bg-gray-800"
      : "text-gray-300 hover:text-green-300 "
    }`;


  return (
    <header className="bg-gray-950 text-white border-b border-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center bg-transparent"
                aria-hidden="true"
              >
                <FaLeaf className="text-emerald-300 w-6 h-6" />
              </div>
              <span className="text-2xl font-semibold text-green-300">Grocery Mart</span>
            </Link>
          </div>

          {/* Center nav (desktop) */}
          <nav className="hidden lg:flex space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                {link.icon} {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md lg:hidden text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
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
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <FiUser className="text-gray-300" />
                  <span className="hidden sm:inline text-sm font-medium text-gray-200">
                    {session?.user?.name ? session.user.name.split(" ")[0] : session?.user?.email}
                  </span>
                </div>
                <Link
                  href="/Dashboard/addProduct"
                  className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium"
                >
                  Dashboard
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

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden mt-2 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                  {link.icon} {link.label}
                </Link>
              ))}

              <div className="pt-2 border-t border-gray-800">
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
        )}
      </div>
    </header>
  );
};

export default Navbar;
