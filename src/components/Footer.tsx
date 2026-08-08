export default function Footer() {
  return (
    <footer className="bg-liv-gray border-t-2 border-liv-gold py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-liv-gold font-bold mb-4">LIV2ROB</h3>
            <p className="text-gray-300 text-sm">Premium hip hop inspired streetwear</p>
          </div>
          <div>
            <h3 className="text-liv-gold font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="/products" className="hover:text-liv-gold">Shop</a></li>
              <li><a href="/" className="hover:text-liv-gold">About</a></li>
              <li><a href="/" className="hover:text-liv-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-liv-gold font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#" className="hover:text-liv-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-liv-gold">Twitter</a></li>
              <li><a href="#" className="hover:text-liv-gold">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm border-t border-liv-gold pt-4">
          <p>&copy; 2024 LIV2ROB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
