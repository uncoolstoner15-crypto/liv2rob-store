'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import axios from 'axios'

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const total = getTotal()

  const handleStripeCheckout = async () => {
    if (!email) {
      alert('Please enter your email')
      return
    }

    setLoading(true)
    try {
      const response = await axios.post('/api/stripe', {
        items,
        email,
        total,
      })

      // Redirect to Stripe checkout
      window.location.href = response.data.url
    } catch (error) {
      alert('Payment failed. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handlePayPalCheckout = async () => {
    if (!email) {
      alert('Please enter your email')
      return
    }

    setLoading(true)
    try {
      const response = await axios.post('/api/paypal', {
        items,
        email,
        total,
      })

      // Redirect to PayPal
      window.location.href = response.data.redirectUrl
    } catch (error) {
      alert('Payment failed. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-liv-gold mb-8">Checkout</h1>

        {/* Order Summary */}
        <div className="bg-liv-gray p-6 mb-8 border-2 border-liv-gold">
          <h2 className="text-xl font-bold text-liv-gold mb-4">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 text-gray-300">
              <span>{item.name} x{item.quantity}</span>
              <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-liv-gold mt-4 pt-4 flex justify-between text-liv-gold font-bold text-lg">
            <span>Total:</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-8">
          <label className="block text-liv-gold font-bold mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-liv-gray border-2 border-liv-gold text-white"
          />
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <button
            onClick={handleStripeCheckout}
            disabled={loading}
            className="w-full bg-liv-gold text-liv-black py-3 font-bold uppercase hover:bg-white transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay with Stripe'}
          </button>
          
          <button
            onClick={handlePayPalCheckout}
            disabled={loading}
            className="w-full bg-liv-red text-white py-3 font-bold uppercase hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay with PayPal'}
          </button>
        </div>
      </div>
    </div>
  )
}
