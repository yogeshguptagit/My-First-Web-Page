'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { randomQuote } from '@/data/quotes';
import Link from 'next/link';

const HomePage = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(randomQuote());
  const [lanternFlicker, setLanternFlicker] = useState(true);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setLanternFlicker(prev => !prev);
    }, 2000 + Math.random() * 1000);

    return () => clearInterval(flickerInterval);
  }, []);

  const handleRevealQuote = () => {
    if (showQuote) {
      setCurrentQuote(randomQuote());
    }
    setShowQuote(!showQuote);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dark background with subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-surface/20 via-background to-background" />
      
      {/* Floating particles/dust effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-text-muted/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Lantern Icon */}
        <motion.div
          className="mb-12 flex justify-center"
          animate={{ 
            scale: lanternFlicker ? 1 : 0.95,
            opacity: lanternFlicker ? 1 : 0.7
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <motion.div
              className="w-16 h-20 border-2 border-accent-gold rounded-lg relative"
              animate={{ 
                boxShadow: lanternFlicker 
                  ? "0 0 30px rgba(212, 175, 55, 0.6), inset 0 0 15px rgba(212, 175, 55, 0.3)"
                  : "0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(212, 175, 55, 0.2)"
              }}
            >
              {/* Lantern flame */}
              <motion.div
                className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-accent-gold/60 rounded-full"
                animate={{
                  scaleY: lanternFlicker ? [1, 1.2, 1] : [1, 0.8, 1],
                  opacity: lanternFlicker ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 0.5 }}
              />
              {/* Lantern handle */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-3 border-t-2 border-l-2 border-r-2 border-accent-gold rounded-t-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-shadow"
        >
          Diogenes
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-2xl md:text-3xl font-serif italic text-accent-gold mb-8 glow-text"
        >
          The Dog Philosopher
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          In broad daylight, he searched for an honest man. In darkness, we search for truth. 
          Enter the mind of ancient Greece&apos;s most radical philosopher.
        </motion.p>

        {/* Interactive Quote Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mb-12"
        >
          <motion.button
            onClick={handleRevealQuote}
            className="btn-primary relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {showQuote ? 'Another Truth' : 'Seek Wisdom'}
            </span>
            <motion.div
              className="absolute inset-0 bg-accent-blood/20"
              initial={false}
              animate={{ scale: showQuote ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <AnimatePresence mode="wait">
            {showQuote && (
              <motion.div
                key={currentQuote.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-surface-elevated/80 border border-border rounded-lg backdrop-blur-sm"
              >
                <blockquote className="text-lg md:text-xl font-mono italic text-center mb-4">
                  &ldquo;{currentQuote.text}&rdquo;
                </blockquote>
                {currentQuote.context && (
                  <p className="text-sm text-text-muted text-center">
                    {currentQuote.context}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="space-y-4"
        >
          <p className="text-accent-gold font-mono uppercase tracking-wider text-sm">
            Begin the Journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-secondary">
              Meet the Man
            </Link>
            <Link href="/philosophy" className="btn-primary">
              Understand the Philosophy
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-text-muted text-xs font-mono uppercase tracking-wider"
        >
          Scroll to Explore
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-0.5 h-8 bg-text-muted mx-auto mt-2"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
