"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

export default function AvatarMenu({pic}) {
  const supabase = createClient();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlesignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      setIsOpen(false);
      window.location.reload();
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-center rounded-full overflow-hidden w-10 h-10 cursor-pointer focus:outline-none border-2 border-gray-200"
      >
        <Image 
          src={pic? pic : "/L.png"} // Replace with your avatar image path
          alt="User avatar"
          width={40}
          height={40}
          className="object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <ul className="divide-y divide-gray-100">
            
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
        </div>
      )}
    </div>
  );
}