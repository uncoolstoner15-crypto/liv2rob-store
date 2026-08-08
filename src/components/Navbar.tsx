'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-liv-gray border-b-2 border-liv-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-liv-gold uppercase tracking-wider">
          LIV2ROB
        </Link>
        
        <div className="flex gap-8 items-center">
          <Link href="/products" className="text-white hover:text-liv-gold transition uppercase font-semibold">
            Shop
          </Link>
          <Link href="/" className="text-white hover:text-liv-gold transition uppercase font-semibold">
            About
          </Link>
          <Link href="/cart" className="relative text-white hover:text-liv-gold transition">
            <span className="uppercase font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-liv-red text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
