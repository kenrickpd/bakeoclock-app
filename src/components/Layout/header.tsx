'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import CartIcon from './cartIcon';

export default function Header() {
  return (
    <header className='sticky flex items-center px-6 h-16 bg-[#F6B3CF] text-white'>
      <div className='flex-1 flex justify-start hover:cursor-pointer'>
        <Link href="/" aria-label="Back to homepage">
        <Image src="/bakeoclock-logo.png" alt='logo' width={80} height={30}></Image>
        </Link>
      </div>
      <div className='flex-1 flex justify-end'>
        <Link href="/checkout">
        <CartIcon />
        </Link>
      </div>
    </header>
  )
}
