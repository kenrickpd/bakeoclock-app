'use client';
import Image from 'next/image';
import { MenuItem } from '@/src/lib/data';
import { useCart } from '@/src/context/CartContext';

type Props = {
    item: MenuItem;
};

export default function MenuCard({ item }: Props) {
    const { cart, addToCart, increaseQty, decreaseQty } = useCart();

    const cartItem = cart.find((c) => c.id === item.id);
    const quantity = cartItem?.quantity ?? 0;

    return (
        <div
            className='
        w-[calc(50%-10px)]
        sm:w-[calc(50%-10px)]
        lg:w-[calc(33.333%-14px)]
        h-80
        bg-white
        rounded-xl
        shadow-xl
        hover:shadow-2xl
        transition
        overflow-hidden
  '
        >
            {/* Image */}
            <div className='relative h-44'>
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover'
                />
            </div>

            {/* Content */}
            <div className='p-3 space-y-1'>
                <h3 className='text-sm font-semibold text-gray-800'>
                    {item.name}
                </h3>

                <p className='text-xs text-gray-500 sm:text-sm'>
                    Available: {item.availableDays.join(', ')}
                </p>
                <div className='flex items-center justify-between pt-1 sm:pt-2 flex-col sm:flex-row align-middle sm:h-10'>
                    <span className='font-bold text-[#F6B3CF]'>
                        Rp {new Intl.NumberFormat('id-ID').format(item.price)}
                    </span>

                    {quantity === 0 ? (
                        <button
                            onClick={() => addToCart(item)}
                            className='px-3 py-1.5 rounded-md bg-[#F6B3CF] text-white text-sm hover:opacity-90 hover:cursor-pointer hover:scale-105 transition'
                        >
                            Add to cart
                        </button>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => decreaseQty(item.id)}
                                className='w-7 h-7 flex items-center justify-center rounded-md bg-pink-100 text-pink-500 text-lg hover:cursor-pointer hover:scale-105 transition'
                            >
                                -
                            </button>

                            <span className='text-sm font-semibold w-4 text-center'>
                                {quantity}
                            </span>

                            <button
                                onClick={() => increaseQty(item.id)}
                                className='w-7 h-7 flex items-center justify-center rounded-md bg-pink-300 text-white text-lg hover:cursor-pointer hover:scale-105 transition'
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
