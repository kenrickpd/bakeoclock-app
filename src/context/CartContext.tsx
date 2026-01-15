'use client'

import { createContext, useContext, useState } from 'react'
import { MenuItem } from '../lib/data'

type CartItem = MenuItem & {
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: MenuItem) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === item.id)

      if (exist) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      }

      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const increaseQty = (id: number) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

const decreaseQty = (id: number) => {
  setCart(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  )
}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty,}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}