import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-liv-gray py-8">
        <h1 className="text-4xl font-bold text-liv-gold text-center uppercase">Our Collection</h1>
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
