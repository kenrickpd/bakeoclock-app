'use client';
import { useCart } from '@/src/context/CartContext';
import { useMemo, useState, useEffect } from 'react';

const DAY_MAP = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export default function CustomerForm({
    onValidityChange
}: {
    onValidityChange: (valid: boolean) => void;
}) {
    const { cart } = useCart();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const [dateError, setDateError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const allowedDays = useMemo(() => {
        if (cart.length === 0) return [];

        return cart
            .map((item) => item.availableDays)
            .reduce((acc, days) => acc.filter((day) => days.includes(day)));
    }, [cart]);

    const isDateAllowed = (dateStr: string) => {
        const date = new Date(dateStr);
        const dayName = DAY_MAP[date.getDay()];
        return allowedDays.includes(dayName);
    };

    useEffect(() => {
        const dateValid = !!selectedDate;
        const nameFilled = name.trim().length > 0;
        const phoneFilled = phone.trim().length > 0;

        onValidityChange(dateValid && nameFilled && phoneFilled);
    }, [selectedDate, name, phone, onValidityChange]);

    return (
        <div className='bg-white rounded-xl p-4 shadow space-y-4'>
            <h2 className='font-semibold'>Tanggal Pre Order</h2>

            {allowedDays.length > 0 && (
                <p className='text-xs text-black'>
                    Tersedia:{' '}
                    <span className='font-medium'>
                        {allowedDays.join(', ')}
                    </span>
                </p>
            )}

            <input
                type='date'
                className={`w-full border rounded-md p-2 text-sm ${
                    dateError ? 'border-red-400' : ''
                }`}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                    const value = e.target.value;

                    if (!isDateAllowed(value)) {
                        setSelectedDate(null);
                        setDateError('Tanggal tidak tersedia untuk semua menu');
                        e.target.value = '';
                        return;
                    }

                    setDateError('');
                    setSelectedDate(value);
                }}
            />

            {dateError && <p className='text-xs text-red-500 px-1'>{dateError}</p>}

            <h2 className='font-semibold'>Data Pembeli</h2>

            <div className='flex flex-col gap-1'>
                <p className='text-xs px-1 font-semibold'>Nama</p>
                <input
                    type='text'
                    placeholder='Nama'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError(
                            e.target.value.trim() ? '' : 'Nama wajib diisi'
                        );
                    }}
                    className={`w-full border rounded-md p-2 text-sm ${
                        nameError ? 'border-red-400' : ''
                    }`}
                />
                {nameError && (
                    <p className='text-xs text-red-500 px-1'>{nameError}</p>
                )}
            </div>

            <div className='flex flex-col gap-1'>
              <p className='text-xs px-1 font-semibold'>No. Whatsapp</p>
                <input
                    type='text'
                    placeholder='No WhatsApp'
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        setPhoneError(
                            e.target.value.trim()
                                ? ''
                                : 'No WhatsApp wajib diisi'
                        );
                    }}
                    className={`w-full border rounded-md p-2 text-sm ${
                        phoneError ? 'border-red-400' : ''
                    }`}
                />
                {phoneError && (
                    <p className='text-xs text-red-500 px-1'>{phoneError}</p>
                )}
            </div>
        </div>
    );
}
