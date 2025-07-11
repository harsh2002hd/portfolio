import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-4">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Name and Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Harsh Sharma
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-blue-600 dark:text-blue-400">
            Engineer | AI/ML Developer | Freelancer
          </h2>
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Right Column - Brief Introduction */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Welcome to My Portfolio</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            I'm a passionate developer with expertise in AI/ML, web development, and hardware prototyping. With 4+ years of experience as a Subject Matter Expert and freelancer, I specialize in creating innovative solutions that blend cutting-edge technology with practical applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Graduate in Electronics & Communication Engineering at MBM University, Jodhpur, I combine academic knowledge with hands-on experience to deliver high-quality solutions for complex technical challenges.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Get in Touch</a>
            <a href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Projects</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
