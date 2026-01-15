import React from 'react'
import { menuData } from '@/src/lib/data'
import MenuCard from './menuCard'

export default function MenuCategory() {
  return (
    <section className='px-4 py-8 bg-pink-200 rounded-2xl mb-10 shadow-md'>
        <div className='flex flex-wrap gap-5'>
            {menuData.map(item => (
                <MenuCard key={item.id} item={item}/>
            ))}
        </div>

    </section>
  )
}
