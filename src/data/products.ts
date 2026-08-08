export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  sizes: string[]
  colors: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'LIV2ROB Classic T-Shirt',
    price: 2999,
    image: 'https://via.placeholder.com/400x500?text=LIV2ROB+Tee',
    description: 'Premium cotton classic t-shirt with embroidered LIV2ROB logo',
    category: 'shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gold', 'Red'],
  },
  {
    id: '2',
    name: 'Street Hoodie',
    price: 4999,
    image: 'https://via.placeholder.com/400x500?text=Street+Hoodie',
    description: 'Heavyweight hoodie with kangaroo pocket and drawstring',
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Red'],
  },
  {
    id: '3',
    name: 'Track Pants',
    price: 3499,
    image: 'https://via.placeholder.com/400x500?text=Track+Pants',
    description: 'Comfortable track pants with side stripe design',
    category: 'bottoms',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '4',
    name: 'Baseball Cap',
    price: 1999,
    image: 'https://via.placeholder.com/400x500?text=Baseball+Cap',
    description: 'Adjustable baseball cap with embroidered logo',
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Gold', 'Red'],
  },
  {
    id: '5',
    name: 'Oversized Polo',
    price: 3299,
    image: 'https://via.placeholder.com/400x500?text=Oversized+Polo',
    description: 'Vintage oversized polo with LIV2ROB branding',
    category: 'shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gold'],
  },
  {
    id: '6',
    name: 'Cargo Jacket',
    price: 5999,
    image: 'https://via.placeholder.com/400x500?text=Cargo+Jacket',
    description: 'Heavy-duty cargo jacket with multiple pockets',
    category: 'outerwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Olive'],
  },
]
