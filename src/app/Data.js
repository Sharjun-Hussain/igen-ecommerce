export const laptopDeals = [
  {
    id: "6",
    name: "MacBook Air M2 (8GB | 256GB)",
    image: "/static/cat1.jpg",
    currentPrice: 89999,
    originalPrice: 119900,
    discount: 25,
    savings: 29901,
  },
  {
    id: "7",
    name: "Dell XPS 13 (16GB | 512GB)",
    image: "/static/cat1.jpg",
    currentPrice: 79999,
    originalPrice: 109999,
    discount: 27,
    savings: 30000,
  },
  {
    id: "8",
    name: "HP Pavilion Gaming (8GB | 512GB)",
    image: "/static/cat1.jpg",
    currentPrice: 54999,
    originalPrice: 74999,
    discount: 27,
    savings: 20000,
  },
  {
    id: "9",
    name: "Lenovo ThinkPad E14 (8GB | 256GB)",
    image: "/static/cat1.jpg",
    currentPrice: 42999,
    originalPrice: 59999,
    discount: 28,
    savings: 17000,
  },
  {
    id: "10",
    name: "ASUS ROG Strix G15 (16GB | 1TB)",
    image: "/static/cat1.jpg",
    currentPrice: 89999,
    originalPrice: 124999,
    discount: 28,
    savings: 35000,
  },
];

export const headphoneDeals = [
  {
    id: "11",
    name: "Sony WH-1000XM4 Wireless",
    image: "/sony-wh-1000xm4.png",
    currentPrice: 19999,
    originalPrice: 29990,
    discount: 33,
    savings: 9991,
  },
  {
    id: "12",
    name: "Apple AirPods Pro (2nd Gen)",
    image: "/images/products/airpods-pro.png",
    currentPrice: 21999,
    originalPrice: 24900,
    discount: 12,
    savings: 2901,
  },
  {
    id: "13",
    name: "Bose QuietComfort 45",
    image: "/bose-quietcomfort-45-headphones.png",
    currentPrice: 22999,
    originalPrice: 32900,
    discount: 30,
    savings: 9901,
  },
  {
    id: "14",
    name: "JBL Tune 760NC Wireless",
    image: "/jbl-tune-760nc-wireless-headphones.png",
    currentPrice: 4999,
    originalPrice: 7999,
    discount: 38,
    savings: 3000,
  },
  {
    id: "15",
    name: "Sennheiser HD 450BT",
    image: "/sennheiser-hd-450bt-bluetooth-headphones.png",
    currentPrice: 8999,
    originalPrice: 14990,
    discount: 40,
    savings: 5991,
  },
];

export const categories = [
  "Mobiles",
  "Mobile Accessories",
  "Gadgets",
  "Offers & Deals",
];

export const products = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    originalPrice: 1299.99,
    image:
      "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-iphone-15-pro-max-box.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mobiles",
    brand: "Apple",
    rating: 4.9,
    reviewCount: 2847,
    description: "The ultimate iPhone with titanium design and A17 Pro chip.",
    features: ["Titanium Design", "A17 Pro Chip", "48MP Camera", "USB-C"],
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ["iphone", "apple", "premium", "5g"],
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    price: 1299.99,
    image:
      "https://images.pexels.com/photos/21448648/pexels-photo-21448648/free-photo-of-samsung-galaxy-s24-ultra.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mobiles",
    brand: "Samsung",
    rating: 4.8,
    reviewCount: 1923,
    description: "Galaxy AI is here. Welcome to the era of mobile AI.",
    features: ["Galaxy AI", "Titanium Frame", "200MP Camera", "S Pen"],
    inStock: true,
    isFeatured: true,
    tags: ["samsung", "android", "ai", "5g"],
  },
  {
    id: "3",
    name: "MagSafe Charger",
    price: 39.99,
    originalPrice: 49.99,
    image:
      "https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mobile Accessories",
    brand: "Apple",
    rating: 4.5,
    reviewCount: 567,
    description: "The MagSafe Charger makes wireless charging a snap.",
    features: [
      "Fast Wireless Charging",
      "Magnetic Alignment",
      "USB-C",
      "Compact",
    ],
    inStock: true,
    tags: ["charger", "wireless", "magsafe"],
  },
  {
    id: "4",
    name: "Sony WH-1000XM5",
    price: 349.99,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Gadgets",
    brand: "Sony",
    rating: 4.9,
    reviewCount: 432,
    description: "Industry-leading noise canceling headphones.",
    features: [
      "Noise Cancellation",
      "30-hour Battery",
      "Crystal Clear Calls",
      "Multipoint Connection",
    ],
    inStock: true,
    isNew: true,
    tags: ["audio", "headphones", "sony"],
  },
];

const MOCK_PRODUCTS = [
  {
    id: "1",
    currentPrice: 119999,
    originalPrice: 139900,
    discount: 15,
    name: "iPhone 14",
    description: "A total powerhouse.",
    price: 799.99,
    salePrice: 699.99,
    category: "Mobiles",
    imageUrl:
      "https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isInStock: true,
    tags: ["apple", "5g", "premium"],
  },
  {
    id: "2",
    currentPrice: 24999,
    originalPrice: 39900,
    discount: 35,
    name: "Redmi Note 13 Pro",
    description: "Super clear 200MP camera",
    price: 299.99,
    category: "Mobiles",
    imageUrl:
      "https://images.pexels.com/photos/19597856/pexels-photo-19597856/free-photo-of-redmi-note-13-pro-plus-5g.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviewCount: 89,
    isNew: false,
    isInStock: true,
    tags: ["xiaomi", "budget", "camera"],
  },
  {
    id: "3",
    currentPrice: 2999,
    originalPrice: 5900,
    discount: 50,
    name: "Fast Charging Adapter 20W",
    description: "Compact USB-C Power Adapter",
    price: 19.99,
    category: "Mobile Accessories",
    imageUrl:
      "https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviewCount: 203,
    isNew: false,
    isInStock: true,
    tags: ["charger", "fast-charging"],
  },
  {
    id: "4",
    currentPrice: 4999,
    originalPrice: 9900,
    discount: 50,
    name: "Smart Watch Series 8",
    description: "Your essential companion for a healthy life",
    price: 399.99,
    salePrice: 349.99,
    category: "Gadgets",
    imageUrl:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviewCount: 156,
    isNew: true,
    isInStock: false,
    tags: ["smartwatch", "fitness", "health"],
  },
  {
    id: "5",
    currentPrice: 1499,
    originalPrice: 2900,
    discount: 45,
    name: "Transparent Case for iPhone",
    description: "Crystal clear protection",
    price: 14.99,
    category: "Mobile Accessories",
    imageUrl:
      "https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviewCount: 78,
    isNew: false,
    isInStock: true,
    tags: ["case", "protection"],
  },
  {
    id: "6",
    currentPrice: 8999,
    originalPrice: 15900,
    discount: 40,
    name: "Wireless Earbuds Pro",
    description: "Active Noise Cancellation",
    price: 129.99,
    category: "Gadgets",
    imageUrl:
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    reviewCount: 92,
    isNew: false,
    isInStock: true,
    tags: ["audio", "wireless", "anc"],
  },
];

// Simulate API call with delay
export async function getProducts() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return MOCK_PRODUCTS;
}

export const CATEGORIES = [
  "Mobiles",
  "Mobile Accessories",
  "Gadgets",
  "Offers & Deals",
];

export const MOBILE_BRANDS = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Oppo",
  "Vivo",
  "OnePlus",
  "Google Pixel",
  "Realme",
  "Infinix",
  "Tecno",
  "Huawei",
  "Nokia",
  "Honor",
];

export const STORAGE_OPTIONS = ["64GB", "128GB", "256GB", "512GB", "1TB"];
export const RAM_OPTIONS = ["4GB", "6GB", "8GB", "12GB", "16GB"];
export const CONDITIONS = ["New", "Used", "Refurbished"];
export const NETWORKS = ["4G", "5G"];

export const PRICE_RANGES = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $700", min: 300, max: 700 },
  { label: "$700+", min: 700, max: Infinity },
];
