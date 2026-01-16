'use client'

import { useCart } from "@/src/context/CartContext"

export default function CartSummary() {
  const { cart, increaseQty, decreaseQty } = useCart()

  if (cart.length === 0) {
    return <p className="text-white text-center text-[18px] sm:text-2xl">Tidak ada item didalam cart !</p>
  }

  return (
    <div className="space-y-3">
      {cart.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">
              Rp {item.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(item.id)} className='w-7 h-7 flex items-center justify-center rounded-md bg-pink-100 text-pink-500 text-lg hover:cursor-pointer hover:scale-105 transition'>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)} className='w-7 h-7 flex items-center justify-center rounded-md bg-[#F6B3CF] text-white text-sm hover:opacity-90 hover:cursor-pointer hover:scale-105 transition'>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}
