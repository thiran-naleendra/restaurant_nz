export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'foods' | 'juices' | 'desserts' | 'drinks';
  image: string;
  badges: ('veg' | 'spicy' | 'new' | 'halal')[];
  featured?: boolean;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}
