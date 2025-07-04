'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { diogenesAnecdotes, type Anecdote } from '@/data/quotes';

interface AnecdoteCardProps {
  anecdote: Anecdote;
  index: number;
}

const AnecdoteCard = ({ anecdote, index }: AnecdoteCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors = {
    confrontation: 'accent-blood',
    teaching: 'accent-gold',
    mockery: '#8b5cf6',
    demonstration: '#059669'
  };

  const categoryColor = categoryColors[anecdote.category] || 'accent-gold';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="bg-surface-elevated/80 border border-border rounded-lg overflow-hidden backdrop-blur-sm hover:bg-surface-elevated transition-all duration-500 hover:border-accent-blood/30 hover:shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border`}
                  style={{ 
                    color: `var(--${categoryColor})`,
                    borderColor: `var(--${categoryColor})`
                  }}>
              {anecdote.category}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-text-muted"
            >
              ↓
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-accent-gold transition-colors">
            {anecdote.title}
          </h3>
          
          {!isExpanded && (
            <p className="text-text-muted line-clamp-2">
              {anecdote.story.substring(0, 120)}...
            </p>
          )}
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="p-6 space-y-6">
            {/* Story */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-accent-gold mb-3">
                The Story
              </h4>
              <p className="text-text-muted leading-relaxed text-lg">
                {anecdote.story}
              </p>
            </div>

            {/* Lesson */}
            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-mono uppercase tracking-wider text-accent-blood mb-3">
                The Lesson
              </h4>
              <blockquote className="text-foreground italic text-lg leading-relaxed border-l-3 border-accent-blood pl-4">
                {anecdote.lesson}
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ParallaxQuote = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blood/10 via-transparent to-accent-gold/10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed"
        >
          &ldquo;Of what use is a philosopher who doesn&apos;t hurt anybody&apos;s feelings?&rdquo;
        </motion.blockquote>
        <cite className="block mt-6 text-accent-gold text-lg font-mono uppercase tracking-wider">
          — Diogenes of Sinope
        </cite>
      </div>
    </motion.section>
  );
};

const DefiancePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center justify-center relative px-6"
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
        
        <div className="text-center max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8"
          >
            Acts of Defiance
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-6"
          >
            <p className="text-xl text-text-muted leading-relaxed">
              When words weren&apos;t enough, Diogenes became a living demonstration.
            </p>
            <p className="text-lg text-text-muted">
              These stories aren&apos;t just anecdotes—they&apos;re philosophical arguments made flesh.
            </p>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent-gold font-mono text-sm uppercase tracking-wider"
            >
              Witness the Stories
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-surface-elevated/80 border border-border rounded-lg p-8"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Philosophy in Action
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Diogenes didn&apos;t just teach philosophy—he embodied it. Every shocking act, every 
              public confrontation, every moment of apparent madness was a carefully crafted 
              lesson designed to shatter illusions and awaken truth.
            </p>
            <p className="text-lg text-accent-gold italic">
              In a world of philosophical theory, he chose to live the answers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anecdotes Grid */}
      <section className="py-20 px-6 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-serif font-bold text-center text-foreground mb-16"
          >
            The Stories That Shook the World
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {diogenesAnecdotes.map((anecdote, index) => (
              <AnecdoteCard key={index} anecdote={anecdote} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxQuote />

      {/* Modern Relevance */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-serif font-bold text-center text-foreground mb-16"
          >
            Why These Stories Still Matter
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-surface-elevated/80 border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-serif font-bold text-accent-gold mb-4">
                Against Authority
              </h3>
              <p className="text-text-muted leading-relaxed">
                In an age of unquestioned authorities—social media influencers, corporate culture, 
                political tribalism—Diogenes reminds us that power deserves skepticism, not automatic respect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-surface-elevated/80 border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-serif font-bold text-accent-gold mb-4">
                Against Materialism
              </h3>
              <p className="text-text-muted leading-relaxed">
                Every possession discarded, every comfort rejected was proof that happiness doesn&apos;t 
                come from acquisition. In our consumer culture, this message hits harder than ever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-surface-elevated/80 border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-serif font-bold text-accent-gold mb-4">
                Against Convention
              </h3>
              <p className="text-text-muted leading-relaxed">
                His public performances challenged social norms not for shock value, but to reveal 
                how many of our &quot;rules&quot; are arbitrary constructions that limit human freedom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-surface-elevated/80 border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-serif font-bold text-accent-gold mb-4">
                For Authenticity
              </h3>
              <p className="text-text-muted leading-relaxed">
                In a world of curated online personas and social performance, Diogenes&apos; radical 
                honesty and refusal to perform for others offers a path to genuine selfhood.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-surface-elevated/80 border border-border rounded-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              What Will You Defy?
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Diogenes&apos; defiance wasn&apos;t random rebellion—it was strategic dismantling of anything 
              that prevented authentic human flourishing. Every act of defiance was also an act of liberation.
            </p>
            <p className="text-lg text-accent-gold italic">
              The question isn&apos;t whether you&apos;ll be defiant. It&apos;s whether your defiance will serve wisdom or ego.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="/quotes" className="btn-primary">
              Hear His Words
            </a>
            <a href="/reflection" className="btn-secondary">
              Question Everything
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DefiancePage;