'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Paras Rajput</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              DevOps Engineer • AI Engineer • Cloud Architect • Backend Developer
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/ParasRajput810"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/paras-rajput-a4295823b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:paras.rajput@example.com"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Paras Rajput
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}