'use client'
import React from 'react'
import MenuCategory from './menuCategory'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
})

export default function MenuPage() {
  return (
    <main className={`flex flex-col justify-center px-4 ${pacifico.variable}`}>
      <div className='flex h-20 items-center justify-center align-middle'>
        <h1 className='text-center text-pink-300 text-2xl sm:text-4xl font-script tracking-wide text-shadow-md'>PRE ORDER MENU</h1>
      </div>
      
      <MenuCategory />
    </main>
  )
}
