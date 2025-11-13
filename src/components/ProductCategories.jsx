import { motion } from 'framer-motion';
import { ChevronRight, Scissors, Zap, Wand2, Droplets, Shield, Wind } from 'lucide-react';

export function ProductCategories() {
  const categories = [
    {
      id: 1,
      title: 'Hair',
      Icon: Scissors,
      problems: ['Hair Thinning', 'Hair Growth', 'Flakes'],
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030%2B%20Serum_blfhj2.png?tr=w-1080,c-at_max',
      bgColor: 'from-blue-100 to-green-50',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      id: 2,
      title: 'Health & Fitness',
      Icon: Zap,
      problems: ['Creatine', 'Shilajit', 'Superblend'],
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025053/Super%20blend%20%20unflavoured%20Shots_b914nr.png?tr=w-1080,c-at_max',
      bgColor: 'from-blue-100 to-blue-50',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      id: 3,
      title: 'Beard',
      Icon: Shield,
      problems: ['Uneven Beard', 'Beard Growth', 'Healthy Beard'],
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024374/BGK_kpcriu.jpg?tr=w-1080,c-at_max',
      bgColor: 'from-blue-100 to-blue-50',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      id: 4,
      title: 'Performance',
      Icon: Wand2,
      problems: ['Performance', 'Vitality', 'Stamina'],
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1626/Endure%20long%20last%20spray%20_e4n97h.png?tr=w-1080,c-at_max',
      bgColor: 'from-blue-100 to-blue-50',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      id: 5,
      title: 'Skin',
      Icon: Droplets,
      problems: ['Pigmentation', 'Anti-Aging', 'Clarity'],
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1182231/Saly%20open%20%281%29-compressed_3tvxc2.jpg?tr=w-1080,c-at_max',
      bgColor: 'from-blue-100 to-blue-50',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      id: 6,
      title: 'Hygiene',
      Icon: Wind,
      problems: ['Odour Protection', 'Full Body Hygiene', 'Freshness'],
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166769/Charcoal%20bodywash_d8uyaq.jpg?tr=w-1080,c-at_max',
      bgColor: 'from-blue-100 to-blue-50',
      gradient: 'from-blue-600 to-blue-700',
    },
  ];

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
    <section id='hygiene' className="scroll-mt-10 py-10 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Explore Our <span className="text-blue-700">Categories</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Science-backed products for your health and wellness
          </p>
        </motion.div>

        {/* Categories Grid - Single Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4"
  style={{gap: '1.25rem'}} // 1.25rem = 20px, matches Tailwind gap-5
  >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
            >
              {/* Flip Card */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side - Image */}
                  <div className="flip-card-front">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Back Side - Information */}
                  <div className="flip-card-back flex flex-col justify-center items-center p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className="mb-4"
                    >
                      <category.Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-white/90 line-clamp-3">
                      {category.problems.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium rounded-full px-8 py-2 text-sm md:px-10 md:py-3 md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
