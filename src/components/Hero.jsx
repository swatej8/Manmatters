import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ThreeBackground } from './ThreeBackground';
import { ArrowRight, Star, CheckCircle, Users, Award, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  
  const slideImages = [
    "https://i.mscwlns.co/media/misc/others/ADS-Desktop-App-Banner%20%281%29_g4ku0x.jpg?tr=w-1080,c-at_max",
    "https://i.mscwlns.co/media/misc/others/Desktop%20Mg%20Lotion_3mqsmn.jpg?tr=w-1080,c-at_max",
    "https://i.mscwlns.co/media/misc/others/1%20%285%29_tdjafv.jpg?tr=w-1080,c-at_max",
    "https://i.mscwlns.co/media/misc/widget_pages/home/Superblend%20%283%29_4u6ozq.jpg?tr=w-1080,c-at_max",
  ];

  const reviews = [
    {
      name: 'Arjun Singh',
      city: 'Mumbai',
      rating: 5,
      text: 'Exceptional quality and results. Man Matters truly delivers what they promise. Highly recommended!',
      product: 'Hair Growth Serum',
    },
    {
      name: 'Rahul Patel',
      city: 'Bangalore',
      rating: 5,
      text: 'Been using for 3 months. Visible results in hair growth and thickness. Worth every rupee!',
      product: 'HG 30+ Serum',
    },
    {
      name: 'Vikram Kumar',
      city: 'Delhi',
      rating: 5,
      text: 'Professional customer service and fast shipping. Products work as advertised. Trusted brand!',
      product: 'Superblend',
    },
    {
      name: 'Nikhil Sharma',
      city: 'Hyderabad',
      rating: 5,
      text: 'Finally found products that actually work. Man Matters is my go-to brand for men\'s wellness.',
      product: 'Shilajit Premium',
    },
  ];

  // Auto-advance slideshow and reviews
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000); // Change slide every 5 seconds

    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 8000); // Change review every 8 seconds

    return () => {
      clearInterval(slideInterval);
      clearInterval(reviewInterval);
    };
  }, [slideImages.length, reviews.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white overflow-hidden pt-20"
    >
      {/* Hero Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-40 z-0"
      >
        <div
          className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-600"
          alt="Hero Background"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-blue-600/70 to-blue-700/80" />
      </motion.div>

      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <ThreeBackground />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-3 mb-6 border border-white/40 hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            </motion.div>
            <span className="text-sm font-semibold">✓ Trusted by 10L+ Men Worldwide</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
          >
            Science-Backed Men's <span className="text-white/90">Wellness</span> & Nutrition
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-normal opacity-90 mb-8 drop-shadow-md"
          >
            Helping men live healthier and stronger by combining expert science and natural ingredients. Clinically proven results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold rounded-full px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full px-8 py-4 border-2 border-white/50 hover:bg-white/30 transition-all duration-300 text-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                <p className="text-3xl font-bold">10L+</p>
              </div>
              <p className="text-sm opacity-75 font-normal">Happy Customers</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-5 h-5 text-white/80 fill-white/80" strokeWidth={1.5} />
                <p className="text-3xl font-bold">500K+</p>
              </div>
              <p className="text-sm opacity-75 font-normal">5-Star Reviews</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                <p className="text-3xl font-bold">98%</p>
              </div>
              <p className="text-sm opacity-75 font-normal">Satisfaction</p>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-sm font-semibold">
              <CheckCircle className="w-4 h-4 text-green-300" strokeWidth={2} />
              Lab Tested & Certified
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-sm font-semibold">
              <Award className="w-4 h-4 text-blue-200" strokeWidth={2} />
              5+ Years in Market
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-sm font-semibold">
              <Shield className="w-4 h-4 text-cyan-300" strokeWidth={2} />
              Science Backed
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Large Animated Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 hidden lg:flex justify-center items-center flex-col gap-8 w-full"
        >
          {/* Large Slideshow Container */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Rotating border glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-blue-400 rounded-3xl z-10 pointer-events-none"
            />
            
            {/* Slideshow Images */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={slideImages[currentSlide]}
                alt={`Product ${currentSlide + 1}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
            </AnimatePresence>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-transparent rounded-3xl" />

            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slideImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-2xl max-w-sm hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <p className="text-white/90 text-sm mb-4 italic">
              "{reviews[currentReview].text}"
            </p>
            <div className="mb-3">
              <p className="text-white/70 text-xs font-normal">{reviews[currentReview].product}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{reviews[currentReview].name}</p>
                <p className="text-white/60 text-xs">{reviews[currentReview].city}</p>
              </div>
            </div>

            {/* Review Navigation */}
            <div className="flex gap-2 mt-4 justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </motion.button>
              <div className="flex gap-1">
                {reviews.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentReview ? 'bg-white w-6' : 'bg-white/40 w-1.5 hover:bg-white/60'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold opacity-75">Scroll to explore</span>
          <motion.svg
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-6 opacity-75"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
}
