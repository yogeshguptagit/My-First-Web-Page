'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { diogenesQuotes, randomQuote, type Quote } from '@/data/quotes';

const QuotesPage = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isRevealing, setIsRevealing] = useState(false);
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([]);

  const categories = ['all', 'wisdom', 'defiance', 'virtue', 'materialism', 'society'];

  useEffect(() => {
    // Set initial quote
    const initialQuote = randomQuote();
    setCurrentQuote(initialQuote);
    setQuoteHistory([initialQuote]);
  }, []);

  const getFilteredQuotes = () => {
    if (selectedCategory === 'all') {
      return diogenesQuotes;
    }
    return diogenesQuotes.filter(quote => quote.category === selectedCategory);
  };

  const revealNewQuote = () => {
    setIsRevealing(true);
    
    setTimeout(() => {
      const filteredQuotes = getFilteredQuotes();
      const availableQuotes = filteredQuotes.filter(
        quote => !quoteHistory.slice(-3).includes(quote)
      );
      
      const newQuote = availableQuotes.length > 0 
        ? availableQuotes[Math.floor(Math.random() * availableQuotes.length)]
        : filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
      
      setCurrentQuote(newQuote);
      setQuoteHistory(prev => [...prev.slice(-4), newQuote]);
      setIsRevealing(false);
    }, 500);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsRevealing(true);
    
    setTimeout(() => {
      const filteredQuotes = category === 'all' 
        ? diogenesQuotes 
        : diogenesQuotes.filter(quote => quote.category === category);
      
      const newQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
      setCurrentQuote(newQuote);
      setQuoteHistory([newQuote]);
      setIsRevealing(false);
    }, 500);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      wisdom: 'text-accent-gold',
      defiance: 'text-accent-blood',
      virtue: 'text-green-400',
      materialism: 'text-orange-400',
      society: 'text-purple-400'
    };
    return colors[category as keyof typeof colors] || 'text-accent-gold';
  };

  const getCategoryDescription = (category: string) => {
    const descriptions = {
      all: 'All the wisdom of the Dog Philosopher',
      wisdom: 'Universal truths and insights',
      defiance: 'Challenges to authority and convention',
      virtue: 'The path to authentic living',
      materialism: 'On possessions and true wealth',
      society: 'Critiques of human nature and civilization'
    };
    return descriptions[category as keyof typeof descriptions] || '';
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
            Diogenes Speaks
          </h1>
          <div className="w-24 h-1 bg-accent-blood mx-auto mb-6"></div>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Words from the barrel. Wisdom from the gutter. Truth without decoration.
          </p>
        </motion.div>

        {/* Oracle Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-12"
        >
          <div className="bg-surface-elevated/50 border border-border rounded-lg p-6 mb-8">
            <p className="text-lg text-text-muted leading-relaxed italic">
              &ldquo;Like an oracle of authenticity, let his words pierce through the noise of modern life. 
              Each quote is a philosophical arrow, aimed at the heart of human pretense.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-12"
        >
          <h3 className="text-lg font-serif font-bold text-foreground mb-6 text-center">
            Choose Your Path
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 text-sm font-mono uppercase tracking-wider border rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent-blood text-foreground border-accent-blood'
                    : 'bg-transparent text-text-muted border-border hover:border-accent-gold hover:text-accent-gold'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <motion.p
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-text-muted text-sm mt-4 italic"
          >
            {getCategoryDescription(selectedCategory)}
          </motion.p>
        </motion.div>

        {/* Quote Display */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            {!isRevealing && currentQuote && (
              <motion.div
                key={currentQuote.text}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                {/* Quote Card */}
                <div className="bg-surface-elevated/80 border border-border rounded-lg p-8 backdrop-blur-sm relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blood via-accent-gold to-accent-blood"></div>
                  
                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${getCategoryColor(currentQuote.category)} border-current`}>
                      {currentQuote.category}
                    </span>
                  </motion.div>

                  {/* Quote text */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-serif leading-relaxed text-foreground mb-6"
                  >
                    &ldquo;{currentQuote.text}&rdquo;
                  </motion.blockquote>

                                     {/* Context */}
                   {currentQuote.context && (
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.6 }}
                       className="border-t border-border pt-4"
                     >
                       <p className="text-text-muted italic">
                         {currentQuote.context}
                       </p>
                     </motion.div>
                   )}

                  {/* Attribution */}
                  <motion.cite
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="block text-right text-accent-gold font-mono uppercase tracking-wider text-sm mt-6"
                  >
                    — Diogenes of Sinope
                  </motion.cite>
                </div>
              </motion.div>
            )}

            {isRevealing && (
              <motion.div
                key="revealing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-64"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-accent-gold border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-accent-gold font-mono uppercase tracking-wider">
                    The oracle speaks...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reveal Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mb-16"
        >
          <motion.button
            onClick={revealNewQuote}
            disabled={isRevealing}
            className="btn-primary text-lg px-8 py-4 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {isRevealing ? 'Consulting the Oracle...' : 'Reveal Another Truth'}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-blood to-accent-gold opacity-0 group-hover:opacity-20"
              animate={{ x: isRevealing ? ['-100%', '100%'] : '0%' }}
              transition={{ duration: isRevealing ? 1.5 : 0.3, repeat: isRevealing ? Infinity : 0 }}
            />
          </motion.button>
        </motion.div>

        {/* Quote Collection Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-surface/50 border border-border rounded-lg p-6 text-center"
        >
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">
            The Oracle's Collection
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.slice(1).map((category) => {
              const count = diogenesQuotes.filter(q => q.category === category).length;
              return (
                <div key={category} className="text-center">
                  <div className={`text-2xl font-bold ${getCategoryColor(category)}`}>
                    {count}
                  </div>
                  <div className="text-text-muted text-sm uppercase tracking-wider">
                    {category}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-text-muted text-sm mt-6 italic">
            {diogenesQuotes.length} authentic quotes from the Dog Philosopher, 
            each a window into radical wisdom.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-16 space-x-6"
        >
          <a href="/philosophy" className="btn-secondary">
            Understand the Context
          </a>
          <a href="/reflection" className="btn-primary">
            Apply the Wisdom
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotesPage;