import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductCategories } from './components/ProductCategories'
import { BestSellers } from './components/BestSellers'
import { HairProducts } from './components/HairProducts'
import { Products } from './components/Products'
import { Transformations } from './components/Transformations'
import { Features } from './components/Features'
import { BlogSection } from './components/BlogSection'
import { Newsletter } from './components/Newsletter'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <ProductCategories />
      <BestSellers />
      <HairProducts />
      <Products />
      <Transformations />
      <Features />
      <BlogSection />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
