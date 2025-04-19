"use client"
import React from 'react'
import MainInput from '@/components/maininput'
import Login from '@/components/login'
import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import AvatarMenu from '@/components/avatar'
import Link from 'next/link'

const Playground = () => {
  const [showlogin, setShowLogin] = useState(true)
  const [pic, setPic] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data.user) {
        setPic(data.user.user_metadata?.avatar_url);
        setShowLogin(false)
      } else {
        setShowLogin(true)
      }
    }
    checkSession()
  }, [])

  return (<>
    <div className='bg-black overflow-y-hidden min-h-screen text-white'>
      {showlogin && <Login />}
      <div className='pt-3 px-4 flex justify-between z-50'>
        <AvatarMenu pic={pic} />
        <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
      </div>
      <div className=' motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-200'>
        <MainInput />
      </div>
    </div>
  </>)
}

export default Playground
