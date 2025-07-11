import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Harsh Sharma
      </motion.h1>
      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-xl md:text-2xl font-medium mb-6 text-blue-600 dark:text-blue-400">
        Engineer | AI/ML Developer | Freelancer
      </motion.h2>
      {/* Optionally add animated background or typing effect here */}
    </div>
  );
} 
