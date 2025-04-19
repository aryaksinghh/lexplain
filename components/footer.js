import React from 'react'
import Link from 'next/link'
import { BackgroundBeams } from './ui/backgroundbeam'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const Footer = () => {
    return (
        <footer className="mt-16 pb-5 md:pb-6">
            <div className="container relative py-8 w-[95vw] md:w-[95vw] flex flex-col mx-auto min-h-[70vh] rounded-3xl bg-black text-white">
                <BackgroundBeams />
                <div className="mx-auto mt-5 flex flex-col items-center gap-3">
                    <h1 className="px-3 text-white text-4xl font-serif italic text-center">Understand Legal Instantly</h1>
                    <p className="text-center font-mono">With our well trained AI app</p>
                    <Link href={'/playground'} target="_">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 cursor-pointer"
                        >
                            <span>Ask now</span>
                        </HoverBorderGradient>
                    </Link>
                </div>
                <div className="border-t-2 border-dashed border-gray-600 w-full mx-auto mt-10"></div>
                <div className="flex flex-col md:flex-row justify-between gap-15 md:gap-0 items-start md:items-center px-7 md:px-15 mt-10">
                    <div className="flex flex-col gap-5 w-[70vw] md:w-[20vw]">
                        <h1 className="text-2xl">Built By Aryak Singh</h1>
                        <p className="text-sm text-gray-300">Hey, I am 16 year old high school student, I keep making different types of apps which you might like. Follow me on twitter @aryakceo for more updates of what i am building. </p>
                        <p className="text-sm text-gray-300">Thanks for visiting my app.</p>
                    </div>
                    <ul className="flex flex-col gap-3 text-sm text-gray-300">
                        <Link className='z-10' href={'/about'} target="_"><li>About</li></Link>
                        <Link className='z-10' href={'/contact'} target="_"><li>Contact</li></Link>
                        <Link className='z-10' href={'/termsofservice'} target="_"><li>Terms of Service</li></Link>
                        <Link className='z-10' href={'/privacypolicy'} target="_"><li>Privacy Policy</li></Link>
                    </ul>
                </div>
                <div className="border-t-2 border-dashed border-gray-600 w-full mx-auto mt-10"></div>
                <div className="mt-11 flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center px-15">
                    <p className=" text-gray-300 text-sm text-center">
                        © 2025 All Rights Reserved by lexplain.app
                    </p>
                    <img className="w-[30vw] md:w-[8vw] lg:mr-60" src="/logo.png" alt="logo" />
                    <Link className='z-10' href={'https://www.x.com/aryakceo'} target="_"><img className="w-[40px] bg-white p-1.5 rounded-md" src="/x.png" alt="" /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
