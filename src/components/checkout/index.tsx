'use client';

import { useState } from 'react';
import CartSummary from './cartSummary';
import CustomerForm from './customerForm';
import CheckoutButton from './checkoutButton';
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
})

export default function CheckoutPage() {
    const [canCheckout, setCanCheckout] = useState(false);

    return (
        <div className={`flex justify-center flex-col sm:px-120 pb-10 pt-5 ${pacifico.variable} px-5`}>
          <h1 className='text-center text-pink-300 text-4xl font-script tracking-wide text-shadow-md h-15'>Checkout</h1>
            <div className='flex flex-col bg-pink-200 gap-10 px-5 sm:px-10 py-10 rounded-xl'>
                <CartSummary />

                <CustomerForm onValidityChange={setCanCheckout} />

                <CheckoutButton disabled={!canCheckout} />
            </div>
        </div>
    );
}
