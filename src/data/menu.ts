export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  spicy?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'FOR YOU', icon: 'Star' },
  { id: 'chicken', name: 'CHICKEN', icon: 'Drumstick' },
  { id: 'burgers', name: 'BURGERS', icon: 'Ham' },
  { id: 'deals', name: 'DEALS', icon: 'Tag' },
  { id: 'sides', name: 'SIDES', icon: 'Pizza' },
  { id: 'drinks', name: 'DRINKS', icon: 'CupSoda' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Zinger Box Meal',
    description: '1 Zinger Burger, 1 pc Hot & Spicy Chicken, 1 regular fries, 1 regular potato & gravy and 1 regular drink.',
    price: 15.95,
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800',
    category: 'deals',
    badge: 'BEST SELLER'
  },
  {
    id: '2',
    name: 'Classic Chicken Burger',
    description: 'Juicy chicken fillet, crisp lettuce, and creamy mayo in a toasted bun.',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    category: 'burgers',
  },
  {
    id: '3',
    name: 'Hot & Spicy Chicken',
    description: 'Our signature fried chicken with a spicy kick.',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
    category: 'chicken',
    spicy: true
  },
  {
    id: '4',
    name: 'Bacon & Cheese Burger',
    description: 'Premium beef patty, crispy bacon, melted cheese, and pickles.',
    price: 10.95,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
    category: 'burgers',
    badge: 'NEW'
  },
  {
    id: '5',
    name: 'Large Fries',
    description: 'Golden, crispy, and perfectly salted.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1573080496219-bb08b94f8770?auto=format&fit=crop&q=80&w=800',
    category: 'sides'
  },
  {
    id: '6',
    name: 'Iced Lemon Tea',
    description: 'Refreshing tea with a zesty lemon twist.',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1544145945-f903a277977a?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: '7',
    name: 'Family Feast',
    description: '10 pcs Hot & Spicy Chicken, 2 large fries, 1 large potato & gravy, 1 large coleslaw and 1.5L drink.',
    price: 34.95,
    image: 'https://images.unsplash.com/photo-1626644400174-86dc96d65593?auto=format&fit=crop&q=80&w=800',
    category: 'deals',
    badge: 'FAMILY VALUE'
  },
  {
    id: '8',
    name: 'Spicy Zinger Stacker',
    description: 'Two Zinger fillets, two slices of cheese, spicy sauce and lettuce.',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&q=80&w=800',
    category: 'burgers',
    spicy: true
  },
  {
    id: '9',
    name: 'Popcorn Chicken',
    description: 'Bite-sized pieces of 100% chicken breast, marinated in our secret recipe.',
    price: 5.95,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    category: 'chicken'
  }
];
