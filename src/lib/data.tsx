import React from 'react';

export type MenuItem = {
  id: number
  name: string
  price: number
  image: string
  availableDays: string[]
}

export const menuData: MenuItem[] = [
    {
        id: 1,
        name: 'Bagel',
        price: 18000,
        image: '/baggel.webp',
        availableDays: ['Tuesday', 'thursday']
    },
    {
        id: 2,
        name: 'Salt Bread',
        price: 22000,
        image: '/salt-bread.jpg',
        availableDays: ['Tuesday', 'thursday']
    },
    {
        id: 3,
        name: 'Bread Load',
        price: 22000,
        image: '/bread-loaf.jpg',
        availableDays: ['Monday-Friday']
    },
    {
        id: 4,
        name: 'Bread Load',
        price: 22000,
        image: '/bread-loaf.jpg',
        availableDays: ['Monday-Friday']
    }
];
