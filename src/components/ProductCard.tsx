'use client'

import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-2">{product.description.substring(0, 50)}...</p>
        <p className="product-price">${(product.price / 100).toFixed(2)}</p>
        <button className="btn w-full">View Details</button>
      </Link>
    </div>
  )
}
