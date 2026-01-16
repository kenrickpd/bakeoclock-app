'use client';

import { useCart } from "@/src/context/CartContext";

export default function CheckoutButton({
  disabled,
}: {
  disabled: boolean;
}) {
  const { cart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  return (
    <button
      disabled={disabled}
      className={`w-full py-3 rounded-xl font-semibold text-white transition
        ${disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-pink-400 hover:bg-pink-500'}
      `}
    >
      Checkout • Rp {total.toLocaleString()}
    </button>
  );
}
