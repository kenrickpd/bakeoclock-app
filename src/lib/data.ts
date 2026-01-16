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
        availableDays: ['Tuesday', 'Thursday']
    },
    {
        id: 2,
        name: 'Salt Bread',
        price: 22000,
        image: '/salt-bread.jpg',
        availableDays: ['Tuesday', 'Thursday']
    },
    {
        id: 3,
        name: 'Milk Loaf',
        price: 22000,
        image: '/bread-loaf.jpg',
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    {
        id: 4,
        name: 'Match Loaf',
        price: 22000,
        image: '/bread-loaf.jpg',
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
];
