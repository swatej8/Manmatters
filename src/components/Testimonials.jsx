import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star, Award, Users, ThumbsUp } from 'lucide-react';

function Counter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: counterRef,
    offset: ['0 1', '1 1'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.5 && count === 0) {
        let start = 0;
        const increment = end / (duration * 60);
        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(interval);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, end, duration, count]);

  return <span ref={counterRef}>{count}</span>;
}

export function Testimonials() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const testimonials = [
    {
      name: 'Ashish Kumar',
      city: 'Mumbai',
      rating: 5,
      text: 'Man Matters has transformed my hair and skin health with tailored products and expert advice. Highly recommend!',
      image: 'https://i.pinimg.com/1200x/d3/18/09/d31809f8aef071600c44f4d15b3a6fd7.jpg',
      before: 'https://i.pinimg.com/1200x/e1/a6/65/e1a665a729d846de73a3b26cf0f92c97.jpg',
    },
    {
      name: 'Shubham Rastogi',
      city: 'Delhi',
      rating: 5,
      text: 'The Shilajit Gummies gave me a great energy boost and stamina gains within weeks. Amazing results!',
      image: 'https://i.pinimg.com/736x/12/d4/14/12d4141533884aa35c6ade513dbea2e8.jpg',
      before: 'https://i.pinimg.com/736x/66/8b/2b/668b2bbe5cb0b373493b4562782062e7.jpg',
      after: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%2386EFAC width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2240%22 fill=%22%2315803D%22%3EAfter%3C/text%3E%3C/svg%3E',
    },
    {
      name: 'Kartik Mathur',
      city: 'Bangalore',
      rating: 5,
      text: 'Uneven beard was a problem until I started using Beardmax. Visible results in months! Very satisfied.',
      image: 'https://i.pinimg.com/1200x/3d/e4/fe/3de4feb2868d170c390f1c5a8dc295b7.jpg',
      before: 'https://i.pinimg.com/736x/58/c5/d0/58c5d0a85b5a7c4367eae3ebfcd719e5.jpg',
      after: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%2386EFAC width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2240%22 fill=%22%2315803D%22%3EAfter%3C/text%3E%3C/svg%3E',
    },
    {
      name: 'Rahul Patel',
      city: 'Hyderabad',
      rating: 4,
      text: 'Professional service, quality products, and fast delivery. Man Matters truly cares about customer satisfaction.',
      image: 'https://i.pinimg.com/736x/ec/d4/b6/ecd4b6c1d29da4bf48a16a9815e708a4.jpg',
      before: 'https://i.pinimg.com/1200x/5e/ea/30/5eea30e73e64678884e8ebde0d9c2ec5.jpg',
      after: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%2386EFAC width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2240%22 fill=%22%2315803D%22%3EAfter%3C/text%3E%3C/svg%3E',
    },
  ];

  const stats = [
    { icon: Users, label: 'Happy Customers', value: 1000000, suffix: '+' },
    { icon: Star, label: 'Five Star Reviews', value: 500000, suffix: '+' },
    { icon: Award, label: 'Products Sold', value: 5000000, suffix: '+' },
    { icon: ThumbsUp, label: 'Satisfaction Rate', value: 98, suffix: '%' },
  ];

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
    <section ref={sectionRef} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-50 rounded-full opacity-50"
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Trusted by Men Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join millions of men who've transformed their lives with our products
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100 hover:border-blue-300 transition-colors duration-300 hover:shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center mb-3"
                >
                  <Icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                  <Counter end={stat.value} duration={2} />
                  {stat.suffix}
                </p>
                <p className="text-sm text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            What Our Customers Say
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-blue-500 text-blue-500" strokeWidth={1.5} />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 italic line-clamp-4 font-normal">
                  "{testimonial.text}"
                </p>

                {/* Before / After images */}
                <div className="mt-2 grid grid-cols-2 gap-3 text-center">
                  <div className="text-center justify-center d-flex flex-col">
                    <p className="text-xs text-gray-500 mb-2">BEFORE |  AFTER</p>
                    <img src={testimonial.before} alt="before" loading="lazy" decoding="async" className="w-full h-24 object-cover rounded-lg border" />
                  </div>
                  
                  {/* <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">After</p>
                    <img src={testimonial.after} alt="after" loading="lazy" decoding="async" className="w-full h-24 object-cover rounded-lg border" />
                  </div> */}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Start Your Journey Today
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of men who've experienced life-changing results with our scientifically-formulated products
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold rounded-full px-10 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Explore Products Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
