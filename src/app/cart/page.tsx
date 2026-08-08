'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const total = getTotal()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-liv-gold mb-4">Your Cart is Empty</h1>
          <Link href="/products">
            <button className="btn">Continue Shopping</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-liv-gold mb-8">Shopping Cart</h1>

        <div className="bg-liv-gray p-6 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-liv-gold">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover border-2 border-liv-gold" />
              
              <div className="flex-1">
                <h3 className="text-liv-gold font-bold">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.size} | {item.color}</p>
                <p className="text-liv-red font-bold">${(item.price / 100).toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 px-2 py-1 bg-liv-black border border-liv-gold text-white"
                />
              </div>

              <div className="text-right">
                <p className="text-liv-gold font-bold mb-2">${((item.price * item.quantity) / 100).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-liv-red hover:text-liv-gold transition text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-liv-gray p-6 mb-6 text-right">
          <p className="text-2xl font-bold text-liv-gold">Total: ${(total / 100).toFixed(2)}</p>
        </div>

        <div className="flex gap-4">
          <Link href="/products" className="flex-1">
            <button className="btn w-full">Continue Shopping</button>
          </Link>
          <Link href="/checkout" className="flex-1">
            <button className="bg-liv-red text-white w-full py-3 font-bold uppercase hover:bg-liv-gold hover:text-black transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
