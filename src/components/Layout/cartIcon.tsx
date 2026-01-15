'use client'
import { useCart } from "@/src/context/CartContext" 
import Image from "next/image"

export default function CartIcon() {
  const { cart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="relative flex cursor-pointer hover:scale-105 transition">
        <Image src="/cart.png" alt='cart' width={30} height={30}></Image>
      {total > 0 && (
        <span className="absolute -top-1 bg-pink-400 text-white text-xs rounded-full px-1.5 ml-5">
          {total}
        </span>
      )}
    </div>
  )
}
