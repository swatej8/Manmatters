import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export function BlogSection() {
  const articles = [
    {
      id: 1,
      title: 'The Science Behind Hair Regrowth',
      excerpt: 'Discover how our clinically proven formula stimulates hair follicles and promotes healthy growth.',
      author: 'Dr. Arjun Singh',
      date: 'Nov 8, 2025',
      category: 'Hair Care',
      image: 'https://i.pinimg.com/736x/eb/9b/be/eb9bbe69a3609ccc1495c583094cc624.jpg',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Nutrition for Peak Performance',
      excerpt: 'Learn how proper nutrition combined with our supplements can boost your athletic performance.',
      author: 'Coach Vikram',
      date: 'Nov 6, 2025',
      category: 'Performance',
      image: 'https://i.pinimg.com/736x/62/34/ed/6234edf1445d5dfc5516e5fb9cc1d3df.jpg',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Skincare Routine for Men',
      excerpt: 'A complete guide to establishing a skincare routine that keeps your skin healthy and youthful.',
      author: 'Dermatologist Dr. Priya',
      date: 'Nov 4, 2025',
      category: 'Skin Care',
      image: 'https://i.pinimg.com/1200x/9f/e0/6f/9fe06fa0d3738069875251f9bb49ede5.jpg',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Natural Ingredients for Beard Growth',
      excerpt: 'Explore the power of natural oils and herbs in our beard growth formula.',
      author: 'Herbalist Suresh',
      date: 'Nov 2, 2025',
      category: 'Beard Care',
      image: 'https://i.pinimg.com/1200x/c9/a8/2a/c9a82adc6bb21c172b6754adb2499e92.jpg',
      readTime: '7 min read',
    },
  ];

  const categoryColors = {
    'Hair Care': 'from-blue-700 to-blue-600',
    'Performance': 'from-blue-700 to-blue-600',
    'Skin Care': 'from-blue-700 to-blue-600',
    'Beard Care': 'from-blue-700 to-blue-600',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4 border border-blue-300">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span className="text-blue-700 font-medium text-sm">Health Tips & Insights</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent mb-4">
            Latest Articles & Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Expert advice and scientific insights to help you on your wellness journey
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${categoryColors[article.category]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${categoryColors[article.category]} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 font-normal">
                  {article.excerpt}
                </p>

                {/* Metadata */}
                <div className="border-t border-gray-200 pt-4 space-y-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <span className="text-blue-600 font-semibold">{article.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 w-full flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-cyan-500 transition-colors group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
