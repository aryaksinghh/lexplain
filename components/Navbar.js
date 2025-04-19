// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

const Navbar = () => {
  const supabase = createClient();
  const menuRef = useRef(null);
  const [profile, setProfile] = useState(null);
  const [showdropdown, setshowdropdown] = useState(false);
  const [session, setSession] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchsession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        setSession(true);
        setProfile(data.user.user_metadata);
      }
    }
    fetchsession();
  }, [])

  const handlesignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      setSession(false);
      window.location.reload();
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setshowdropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="w-[100vw] md:w-[50vw] mx-auto flex justify-center px-4 py-4 z-50">
      <nav className="bg-black rounded-full relative w-full max-w-6xl flex items-center justify-between px-6 py-3 shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-white text-xl font-bold italic">Lexplain</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/#features"
            className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
          >
            Pricing
          </Link>
        </div>

        {/* Get Started Button */}
        {!session &&
          <div className="hidden lg:block">
            <Link
              href="/playground"
              className="bg-white text-black font-medium px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-sm shadow-white"
            >
              Get started for free
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>}
        {session &&
          <div ref={menuRef} className="relative">
            <div className="hidden lg:block ">
              <button
                onClick={() => setshowdropdown(!showdropdown)}
                className="bg-white cursor-pointer relative text-black font-medium px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-sm shadow-white"
              >
                Welcome {profile?.full_name.split(" ")[0]}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            {showdropdown && <div className="absolute hidden lg:block right-0 top-14 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <ul className="divide-y divide-gray-100">

                <li>
                  <Link
                    className="flex gap-2 cursor-pointer items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/playground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                    Start Clausing
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex cursor-pointer items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href={"/pricing"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Upgrade plan
                  </Link>
                </li>
                <li>
                  <button
                    className="flex cursor-pointer items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handlesignout}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>}

          </div>}

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (positioned below the navbar) */}
      {mobileMenuOpen && (
        <div className="absolute top-21 left-4 right-4 md:w-[50vw] mx-auto lg:hidden bg-black rounded-xl shadow-xl overflow-hidden z-50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/#features"
              className="block text-white hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-white hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block text-white hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {session &&
            <button
              className="block text-white hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={handlesignout}
            >
              Sign out
            </button>}
            {!session &&
            <Link
              href="/playground"
              className="block bg-white text-black font-medium px-3 py-2 rounded-full text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started for free
            </Link>}
            {session &&
            <Link
              href="/playground"
              className="flex gap-1 items-center justify-center bg-white text-black font-medium px-3 py-2 rounded-full text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Welcome {profile?.full_name.split(" ")[0]}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </Link>}

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;