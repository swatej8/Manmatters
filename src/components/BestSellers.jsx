import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, Star, CheckCircle } from 'lucide-react';

export function BestSellers() {
  const [activeCategory, setActiveCategory] = useState('Hair');

  const categories = ['Nutrition', 'Hair', 'Beard', 'Performance', 'Hygiene', 'Skin'];

  const bestSellersData = {
    Hair: [
      {
        id: 1,
        title: 'Stage 1 Hair Regrowth Solution',
        stage: 'Stage 1',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030%2B%20Serum_blfhj2.png?tr=w-1080,c-at_max',
        price: '₹899',
        originalPrice: '₹1,330',
        rating: 4.0,
      },
      {
        id: 2,
        title: 'Stage 2 Hair Regrowth Solution',
        stage: 'Stage 2',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2861144/HG%2B%20Booster%20%2B%20Minoxifin-compressed_4mwzmr.jpg?tr=w-1080,c-at_max',
        price: '₹899',
        originalPrice: '₹1,216',
        rating: 4.0,
      },
      {
        id: 3,
        title: 'Stage 3 Hair Regrowth Solution',
        stage: 'Stage 3 & 4',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166915/HG%20%2B%20Booster%20%2B%20Growmax%20%2B%2050ml_fej4j3.png?tr=w-1080,c-at_max',
        price: '₹1199',
        originalPrice: '₹1,509',
        rating: 4.2,
      },
      {
        id: 4,
        title: 'Stage 4 Hair Regrowth Solution',
        stage: 'Stage 4',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025050/ADUS_3n9h9m.png?tr=w-1080,c-at_max',
        price: '₹1409',
        originalPrice: '₹1,706',
        rating: 4.0,
      },
    ],
    Nutrition: [
      {
        id: 5,
        title: 'Superblend Unflavoured Shots',
        stage: 'Premium Blend',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025053/Super%20blend%20%20unflavoured%20Shots_b914nr.png?tr=w-1080,c-at_max',
        price: '₹1,299',
        originalPrice: '₹1,899',
        rating: 4.8,
      },
      {
        id: 6,
        title: 'Shilajit Premium',
        stage: 'Energy Boost',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024397/Shilajit_5duoxo.jpg?tr=w-1080,c-at_max',
        price: '₹799',
        originalPrice: '₹1,199',
        rating: 4.9,
      },
      {
        id: 7,
        title: 'Creatine Flavoured',
        stage: 'Muscle Builder',
        image: 'https://i.mscwlns.co/media/misc/others/Creatine-Flavoured-Thumbnail_jkf2my.jpg?tr=w-1080,c-at_max',
        price: '₹1,099',
        originalPrice: '₹1,599',
        rating: 4.8,
      },
      {
        id: 8,
        title: 'Magnesium Gummies',
        stage: 'Recovery Support',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024494/Magnesium%20Gummies_br8d83.jpg?tr=w-1080,c-at_max',
        price: '₹699',
        originalPrice: '₹999',
        rating: 4.6,
      },
    ],
    Beard: [
      {
        id: 9,
        title: 'Beard Growth Kit',
        stage: 'Thickness & Growth',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024374/BGK_kpcriu.jpg?tr=w-1080,c-at_max',
        price: '₹699',
        originalPrice: '₹999',
        rating: 4.7,
      },
      {
        id: 10,
        title: 'Beard Minoxidil 30',
        stage: 'Advanced Formula',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/11954287/BM30%20%281%29_givz7k.jpg?tr=w-1080,c-at_max',
        price: '₹849',
        originalPrice: '₹1,299',
        rating: 4.6,
      },
      {
        id: 11,
        title: 'Beard Growth Oil',
        stage: 'Natural Care',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024376/BG%20%281%29_2jfm0u.jpg?tr=w-1080,c-at_max',
        price: '₹599',
        originalPrice: '₹899',
        rating: 4.5,
      },
      {
        id: 12,
        title: 'Beard & Hair Combo',
        stage: 'Complete Solution',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22%3E%3Crect fill=%22%23E8B4B8%22 width=%22500%22 height=%22500%22/%3E%3C/svg%3E',
        price: '₹999',
        originalPrice: '₹1,599',
        rating: 4.8,
      },
    ],
    Performance: [
      {
        id: 13,
        title: 'Endure Long Lasting Spray',
        stage: 'Performance Boost',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1626/Endure%20long%20last%20spray%20_e4n97h.png?tr=w-1080,c-at_max',
        price: '₹1,799',
        originalPrice: '₹2,499',
        rating: 4.7,
      },
      {
        id: 14,
        title: 'Testero Capsules 60',
        stage: 'Stamina & Vitality',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/478815/tostero%20capsules%20-%2060_9wy00u.png?tr=w-1080,c-at_max',
        price: '₹899',
        originalPrice: '₹1,299',
        rating: 4.6,
      },
      {
        id: 15,
        title: 'Stamina Support',
        stage: 'Endurance',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22%3E%3Crect fill=%23FFB84D width=%22500%22 height=%22500%22/%3E%3C/svg%3E',
        price: '₹749',
        originalPrice: '₹1,099',
        rating: 4.5,
      },
      {
        id: 16,
        title: 'Performance Bundle',
        stage: 'Complete Package',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22%3E%3Crect fill=%239B7EBD width=%22500%22 height=%22500%22/%3E%3C/svg%3E',
        price: '₹1,299',
        originalPrice: '₹1,899',
        rating: 4.9,
      },
    ],
    Hygiene: [
      {
        id: 17,
        title: 'Charcoal Body Wash',
        stage: 'Complete Care',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166769/Charcoal%20bodywash_d8uyaq.jpg?tr=w-1080,c-at_max',
        price: '₹1,199',
        originalPrice: '₹1,799',
        rating: 4.6,
      },
      {
        id: 18,
        title: 'Odour Protection Spray',
        stage: 'Freshness',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166999/Artboard%207%20%282%29_64q5fj.png?tr=w-1080,c-at_max',
        price: '₹499',
        originalPrice: '₹799',
        rating: 4.5,
      },
      {
        id: 19,
        title: 'Intimate Wash',
        stage: 'Care & Comfort',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/388715/SWASH_hnun57.jpg?tr=w-1080,c-at_max',
        price: '₹399',
        originalPrice: '₹699',
        rating: 4.7,
      },
      {
        id: 20,
        title: 'Premium Hygiene Bundle',
        stage: 'All-in-One',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22%3E%3Crect fill=%2398D8C8width=%22500%22 height=%22500%22/%3E%3C/svg%3E',
        price: '₹1,499',
        originalPrice: '₹2,299',
        rating: 4.8,
      },
    ],
    Skin: [
      {
        id: 21,
        title: 'Saly Face Serum',
        stage: 'Premium Anti-Aging',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1182231/Saly%20open%20%281%29-compressed_3tvxc2.jpg?tr=w-1080,c-at_max',
        price: '₹1,199',
        originalPrice: '₹1,799',
        rating: 4.8,
      },
      {
        id: 22,
        title: 'Rejuv Face Serum',
        stage: 'Daily Care',
        image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1254313/Rejuv%20face%20serum_lq9vu6.jpg?tr=w-1080,c-at_max',
        price: '₹699',
        originalPrice: '₹999',
        rating: 4.6,
      },
      {
        id: 23,
        title: 'Acne Control Gel',
        stage: 'Blemish Fighter',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22%3E%3Crect fill=%23FFD4A3width=%22500%22 height=%22500%22/%3E%3C/svg%3E',
        price: '₹549',
        originalPrice: '₹899',
        rating: 4.5,
      },
      {
        id: 24,
        title: 'Complete Skin Care Kit',
        stage: 'Full Regimen',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22%3E%3Crect fill=%23B4D4FFwidth=%22500%22 height=%22500%22/%3E%3C/svg%3E',
        price: '₹1,999',
        originalPrice: '₹2,999',
        rating: 4.9,
      },
    ],
  };

  const products = bestSellersData[activeCategory] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600">
            Browse our best sellers that matter to you
          </p>
        </motion.div>

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Image Container with Badges */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Discount Badge - Top Right */}
                <motion.div
                  initial={{ rotate: -12, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full font-semibold text-sm shadow-lg"
                >
                  {product.originalPrice && `${Math.round((1 - parseInt(product.price.replace('₹', '')) / parseInt(product.originalPrice.replace('₹', ''))) * 100)}% OFF`}
                </motion.div>
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.title}
                </h3>
                {/* Stage */}
                <div className="text-sm text-blue-700 font-bold mb-2">{product.stage}</div>
                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-bold">{product.rating}</span>
                </div>
                {/* Pricing Section */}
                <div className="mb-4">
                  <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
                  <span className="text-base text-gray-400 line-through ml-2">{product.originalPrice}</span>
                </div>
                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                  title="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  )
}
