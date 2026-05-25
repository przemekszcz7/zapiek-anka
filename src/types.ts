export interface MenuItem {
  id: string;
  name: string;
  ingredients?: string;
  priceSmall?: number;
  priceLarge?: number;
  priceSingle?: number;
  takeawaySmall?: number;
  takeawayLarge?: number;
  takeawaySingle?: number;
  isCustomizable?: boolean;
}

export interface AddonItem {
  id: string;
  name: string;
  priceSmall: number;
  priceLarge?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date?: string;
}

export interface FoodImage {
  src: string;
  title: string;
  description?: string;
}

export interface CartItem {
  id: string; // unique cart line ID
  menuItemId: string;
  name: string;
  size: 'small' | 'large' | 'single';
  price: number;
  quantity: number;
  selectedSoses: string[];
  selectedAddons: { addonId: string; name: string; price: number }[];
  takeaway: boolean;
  takeawayPrice: number;
}
