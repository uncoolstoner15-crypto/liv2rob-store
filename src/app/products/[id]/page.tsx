'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  if (!product) {
    return <div className="text-center py-12">Product not found</div>
  }

  const handleAddToCart = () => {
    if (!size || !color) {
      alert('Please select size and color')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size,
      color,
      image: product.image,
    })

    router.push('/cart')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full border-2 border-liv-gold"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-liv-gold mb-2">{product.name}</h1>
          <p className="text-2xl text-liv-red font-bold mb-4">${(product.price / 100).toFixed(2)}</p>
          <p className="text-gray-300 mb-6">{product.description}</p>

          {/* Size */}
          <div className="mb-6">
            <label className="block text-liv-gold font-bold mb-2">Size</label>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border-2 font-bold transition ${
                    size === s
                      ? 'bg-liv-gold text-liv-black'
                      : 'border-liv-gold text-liv-gold hover:bg-liv-gray'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-6">
            <label className="block text-liv-gold font-bold mb-2">Color</label>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-4 py-2 border-2 font-bold transition ${
                    color === c
                      ? 'bg-liv-gold text-liv-black'
                      : 'border-liv-gold text-liv-gold hover:bg-liv-gray'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-liv-gold font-bold mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 px-3 py-2 bg-liv-gray border-2 border-liv-gold text-white"
            />
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn w-full py-3 text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
