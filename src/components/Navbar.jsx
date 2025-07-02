import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shring-0 items-center'>
                <a href="/" aria-label='Home'>
                    <img src={assets.logo} className='mx-2 w-19' width={50} height={33} alt="" />
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://github.com/AbdulrahmanAkramDev" target='_blank' rel='' aria-label='GitHub'>
                    <div className=' gap-2.5  py-3  bg-white rounded-full text-sm inline-flex h-12 animate-background-shine items-center justify-center border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                        <p className='font-medium'>Visit My GitHub</p>
                        <img src={assets.githubwhite} className='w-7.5 rounded-full' alt="" />
                    </div>
                </a>

            </div>
        </nav>
    )
}

export default Navbar
