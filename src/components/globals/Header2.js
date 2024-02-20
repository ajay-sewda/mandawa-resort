import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="border-b border-white/4 min-h-[100px] flex items-center fixed top-0 w-full bg-FFF6EA z-50">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-20 h-20 mr-8 relative">
            <Image
              src="/images/logo.png" // Adjust the path to your logo image
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* Navigation */}
        <ul className="text-black flex gap-12 text-sm font-medium tracking-wider ">
            <li className='hover:text-accent'>
              <Link href={"/"}>Home</Link>
            </li>
            <li className='hover:text-accent'>
              <Link href={"/luxury-stay"}>Luxury Stay</Link>
            </li>
            <li className='hover:text-accent'>
              <Link href={"/dining"}>Dining</Link>
            </li>
            <li className='hover:text-accent'>
              <Link href={"/entertainment"}>Entertainment</Link>
            </li>
            <li className='hover:text-accent'>
              <Link href={"/events"}>Events</Link>
            </li>
            <li className='hover:text-accent'>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
          </ul>
      </div>
    </header>
  )
}

export default Header
