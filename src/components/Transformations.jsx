import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Transformations() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const transformations = [
    {
      id: 1,
      name: 'Rahul Kumar',
      duration: '90 Days',
      before: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964150/Screenshot_2025-11-12_214450_w8pigf.png',
      after: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964136/Screenshot_2025-11-12_214522_gac0zk.png',
      result: 'Hair Regrowth & Thickness',
      story: 'Finally got visible results in just 3 months! My confidence is back.',
      category: 'Hair Growth',
      rating: 5,
    },
    {
      id: 2,
      name: 'Vikram Sharma',
      duration: '60 Days',
      before: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964294/Screenshot_2025-11-12_214742_kwbrnc.png',
      after: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964286/Screenshot_2025-11-12_214758_iny1yz.png',
      result: 'Enhanced Muscle & Performance',
      story: 'The Superblend helped me gain lean muscle mass and improve stamina.',
      category: 'Performance',
      rating: 5,
    },
    {
      id: 3,
      name: 'Arjun Singh',
      duration: '45 Days',
      before: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964390/Screenshot_2025-11-12_214924_lxwr9j.png',
      after: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964399/Screenshot_2025-11-12_214941_ay2n0a.png',
      result: 'Skin Clarity & Glow',
      story: 'My skin feels healthier and looks radiant. The transformation is real!',
      category: 'Skin Health',
      rating: 5,
    },
    {
      id: 4,
      name: 'Nikhil Patel',
      duration: '120 Days',
      before: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964510/Screenshot_2025-11-12_215135_cd1ufq.png',
      after: 'https://res.cloudinary.com/dxnvuttpr/image/upload/v1762964519/Screenshot_2025-11-12_215142_u8vijz.png',
      result: 'Complete Body Transformation',
      story: 'Best investment in my health. Visible changes throughout my body.',
      category: 'Overall Wellness',
      rating: 5,
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, transformations.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setAutoPlay(false);
  };

  const current = transformations[currentIndex];

  return (
    <section
    id='skin'
      ref={sectionRef}
      className="scroll-mt-10 py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"
      />  
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6 border border-blue-300"
          >
            <span className="text-2xl">✨</span>
            <span className="text-blue-700 font-semibold text-sm">Real Transformations</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent mb-6">
            See The Amazing Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-normal">
            Real men, real results. Thousands of satisfied customers have transformed their health and confidence with Man Matters.
          </p>
        </motion.div>



        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12 couser-card ml-40"
        >
          <div className="grid grid-rows-1 md:grid-row-2 gap-8 p-8 md:p-12 justify-center">
            {/* Before & After Images */}
            <div className="flex flex-row gap-6 ">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Before</p>
                <div className="relative w-100 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-gray-100 hover:shadow-xl transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`before-${currentIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={current.before}
                      alt={`${current.name} Before`}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Before
                  </div>
                </div>
              </motion.div>





            

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">After</p>
                <div className="relative w-100 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-green-100 hover:shadow-xl transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`after-${currentIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={current.after}
                      alt={`${current.name} After`}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
                    After
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Transformation Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
              {/* Customer Info */}
              <div>
                <div className="mb-6">
                  <motion.div
                    key={`details-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {current.name}
                      </h3>
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-semibold">
                        {current.duration}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Result */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 mb-6 border border-blue-100">
                      <p className="text-sm text-gray-600 font-semibold mb-2 uppercase tracking-wide">
                        Transformation Result
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {current.result}
                      </p>
                      <p className="text-sm text-blue-600 font-semibold mt-2">
                        Category: {current.category}
                      </p>
                    </div>

                    {/* Story */}
                    <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                      "{current.story}"
                    </p>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Transformation →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="flex-shrink-0 bg-white text-blue-700 border-2 border-blue-700 font-semibold rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex gap-3 flex-wrap justify-center">
            {transformations.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-700 w-12 h-4'
                    : 'bg-gray-300 w-4 h-4 hover:bg-gray-400'
                }`}
                aria-label={`Go to transformation ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="flex-shrink-0 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              whileHover={{ y: -8 }}
              onClick={() => goToSlide(index)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 border-2 border-gray-100">
                <img
                  src={transformation.after}
                  alt={transformation.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-1">
                {transformation.name}
              </h4>
              <p className="text-sm text-blue-600 font-semibold mb-2">
                {transformation.result}
              </p>
              <p className="text-xs text-gray-600">
                {transformation.duration} transformation
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
