import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiGlobe, FiLock } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with cutting-edge technology that delivers results in milliseconds.',
      color: 'text-yellow-500'
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.',
      color: 'text-green-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Scale Effortlessly',
      description: 'Grow your business without limits. Our platform scales with your success.',
      color: 'text-blue-500'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration tools and shared workspaces.',
      color: 'text-purple-500'
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Connect with customers worldwide through our global infrastructure.',
      color: 'text-indigo-500'
    },
    {
      icon: FiLock,
      title: 'Privacy First',
      description: 'Your data is yours. We prioritize privacy and give you full control.',
      color: 'text-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Everything you need to build, grow, and scale your business. 
            Our comprehensive suite of tools empowers you to achieve more.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-secondary-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-secondary-100"
            >
              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 ${feature.color}`}>
                <SafeIcon icon={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;