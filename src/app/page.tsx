import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <h1>LIV2ROB</h1>
        <p>Premium Hip Hop Inspired Streetwear</p>
        <Link href="/products">
          <button className="btn">Shop Now</button>
        </Link>
      </section>

      {/* Features */}
      <section className="bg-liv-gray py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-liv-gold text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-300">100% authentic materials and craftsmanship</p>
          </div>
          <div className="text-center">
            <h3 className="text-liv-gold text-xl font-bold mb-2">Fast Shipping</h3>
            <p className="text-gray-300">Free shipping on orders over $50</p>
          </div>
          <div className="text-center">
            <h3 className="text-liv-gold text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-300">Stripe & PayPal payments accepted</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-liv-black py-12 text-center">
        <h2 className="text-3xl font-bold text-liv-gold mb-4">New Drops Coming Soon</h2>
        <p className="text-gray-300 mb-6">Subscribe to our newsletter for exclusive releases</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black mr-2 mb-2"
        />
        <button className="btn">Subscribe</button>
      </section>
    </div>
  )
}
