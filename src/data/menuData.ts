import { MenuItem, GalleryImage } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Chicken Kottu',
    description: 'Spicy chopped roti with chicken, veggies & our secret spice blend',
    price: 18.00,
    category: 'foods',
    image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['spicy', 'halal'],
    featured: true
  },
  {
    id: 2,
    name: 'Cheese Burger',
    description: 'Grilled beef patty, melted cheese, house sauce on a toasted bun',
    price: 15.00,
    category: 'foods',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['halal']
  },
  {
    id: 3,
    name: 'Veg Rice & Curry',
    description: 'Seasonal vegetables in aromatic curry with fragrant basmati rice',
    price: 12.00,
    category: 'foods',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg'],
    featured: true
  },
  {
    id: 4,
    name: 'Fried Chicken Wrap',
    description: 'Crispy fried chicken, fresh salad, garlic mayo in soft tortilla',
    price: 14.00,
    category: 'foods',
    image: 'https://images.pexels.com/photos/2977927/pexels-photo-2977927.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['spicy', 'halal']
  },
  {
    id: 5,
    name: 'Lamb Biryani',
    description: 'Tender lamb with saffron rice, raita & crispy onions',
    price: 22.00,
    category: 'foods',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['spicy', 'halal', 'new'],
    featured: true
  },
  {
    id: 6,
    name: 'Fish & Chips',
    description: 'Beer-battered fish fillets with crispy chips & tartare sauce',
    price: 16.50,
    category: 'foods',
    image: 'https://images.pexels.com/photos/8105169/pexels-photo-8105169.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['halal']
  },
  {
    id: 7,
    name: 'Mango Juice',
    description: 'Fresh mango blended to perfection',
    price: 7.00,
    category: 'juices',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 8,
    name: 'Watermelon Juice',
    description: 'Chilled watermelon juice, refreshing & hydrating',
    price: 6.50,
    category: 'juices',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 9,
    name: 'Lime Soda',
    description: 'Classic lime soda with fresh mint',
    price: 6.00,
    category: 'juices',
    image: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 10,
    name: 'Avocado Shake',
    description: 'Creamy avocado shake with honey & ice',
    price: 9.00,
    category: 'juices',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg', 'new']
  },
  {
    id: 11,
    name: 'Watalappan',
    description: 'Sri Lankan coconut custard pudding with jaggery',
    price: 8.00,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg'],
    featured: true
  },
  {
    id: 12,
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream',
    price: 8.50,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 13,
    name: 'Fruit Salad',
    description: 'Fresh seasonal fruits with honey drizzle',
    price: 7.50,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 14,
    name: 'Ice Cream Scoop',
    description: 'Choice of vanilla, chocolate or berry',
    price: 5.00,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 15,
    name: 'Iced Coffee',
    description: 'Strong espresso over ice with milk',
    price: 8.50,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 16,
    name: 'Milk Tea',
    description: 'Classic milk tea with Ceylon tea leaves',
    price: 4.50,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 17,
    name: 'Hot Chocolate',
    description: 'Rich chocolate with whipped cream',
    price: 7.50,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  },
  {
    id: 18,
    name: 'Mineral Water',
    description: 'Still or sparkling',
    price: 3.00,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800',
    badges: ['veg']
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior dining area'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh ingredients'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Chef preparing food'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Restaurant ambiance'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Special dish presentation'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Food close-up'
  }
];
