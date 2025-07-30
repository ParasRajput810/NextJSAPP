'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  'DevOps Engineering',
  'AI & Machine Learning',
  'Cloud Architecture',
  'Backend Development',
  'Kubernetes',
  'Docker',
  'AWS/Azure/GCP',
  'Python',
  'Node.js',
  'Terraform'
];

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 300);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(skillInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
                Paras Rajput
              </h1>
              <p className="text-xl text-muted-foreground">
                Loading Portfolio...
              </p>
            </motion.div>

            <div className="mb-8">
              <motion.div
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-medium text-primary"
              >
                {skills[currentSkill]}
              </motion.div>
            </div>

            <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="mt-8 w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}