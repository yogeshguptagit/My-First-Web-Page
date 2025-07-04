'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cynicismPrinciples } from '@/data/quotes';

interface PrincipleCardProps {
  principle: typeof cynicismPrinciples[0];
  index: number;
}

const PrincipleCard = ({ principle, index }: PrincipleCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-surface-elevated/80 border border-border rounded-lg p-8 backdrop-blur-sm hover:bg-surface-elevated transition-all duration-500 hover:border-accent-blood/30"
    >
      <h3 className="text-2xl font-serif font-bold text-accent-gold mb-4">
        {principle.title}
      </h3>
      <p className="text-text-muted mb-6 leading-relaxed text-lg">
        {principle.description}
      </p>
      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-mono uppercase tracking-wider text-accent-blood mb-2">
          Modern Relevance
        </h4>
        <p className="text-foreground italic">
          {principle.modern_relevance}
        </p>
      </div>
    </motion.div>
  );
};

const ModernComparisonSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const comparisons = [
    {
      modern: "Endless consumption to fill emotional voids",
      cynic: "Contentment with the bare minimum",
      insight: "True wealth is wanting little, not having much"
    },
    {
      modern: "Social media performance and validation seeking",
      cynic: "Authentic living regardless of others' opinions",
      insight: "Freedom begins when you stop performing for others"
    },
    {
      modern: "Comfort zones and risk aversion",
      cynic: "Deliberate hardship as spiritual training",
      insight: "Comfort is the enemy of growth and wisdom"
    },
    {
      modern: "Tribal thinking and nationalism",
      cynic: "Cosmopolitan worldview",
      insight: "Wisdom recognizes no borders or artificial divisions"
    }
  ];

  return (
    <motion.section ref={ref} className="py-20 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-accent-blood/5 to-transparent"
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-serif font-bold text-center text-foreground mb-16"
        >
          Ancient Wisdom, Modern Crisis
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="bg-surface/50 border border-border rounded-lg p-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-accent-blood mb-3">
                  Modern Problem
                </h4>
                <p className="text-text-muted text-lg">
                  {comparison.modern}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-12 h-0.5 bg-accent-gold"></div>
              </div>

              <div className="bg-surface-elevated/80 border border-accent-gold/30 rounded-lg p-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-accent-gold mb-3">
                  Cynic Response
                </h4>
                <p className="text-foreground text-lg">
                  {comparison.cynic}
                </p>
              </div>

              <blockquote className="text-center italic text-accent-gold font-serif">
                "{comparison.insight}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const PhilosophyPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6"
      >
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8"
          >
            The Cynical Lens
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-6"
          >
            <p className="text-xl text-text-muted leading-relaxed">
              Cynicism wasn't pessimism—it was radical optimism about human potential.
            </p>
            <p className="text-lg text-text-muted">
              Strip away the illusions. Challenge every assumption. Live according to nature, not society.
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 p-8 bg-surface-elevated/50 border-l-4 border-accent-blood rounded-r-lg"
          >
            <p className="text-lg font-mono italic text-foreground mb-4">
              &ldquo;The foundation of every state is the education of its youth.&rdquo;
            </p>
            <cite className="text-accent-gold text-sm font-mono uppercase tracking-wider">
              — Diogenes
            </cite>
          </motion.blockquote>
        </div>
      </motion.section>

      {/* What is Cynicism Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-serif font-bold text-foreground mb-12"
          >
            What Cynicism Really Meant
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-surface-elevated/80 border border-border rounded-lg p-8 mb-12"
          >
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              The word "cynic" comes from the Greek "kynikos," meaning "dog-like." Diogenes earned this 
              nickname by living without shame, loyalty without condition, and honesty without filter—like 
              a dog. It wasn't an insult; it was recognition of his authentic nature.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Modern cynicism—pessimistic distrust—is the opposite of what Diogenes taught. True Cynicism 
              was about cutting through societal lies to reach authentic human virtue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-serif font-bold text-center text-foreground mb-16"
          >
            The Six Pillars of Cynicism
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cynicismPrinciples.map((principle, index) => (
              <PrincipleCard key={index} principle={principle} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Comparison */}
      <ModernComparisonSection />

      {/* Call to Reflection */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-serif font-bold text-foreground mb-8"
          >
            The Challenge Remains
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-surface-elevated/80 border border-border rounded-lg p-8 mb-12"
          >
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Diogenes' philosophy wasn't theoretical—it was lived. Every day, he demonstrated that 
              happiness comes not from having more, but from needing less. Not from being admired, 
              but from being authentic. Not from comfort, but from virtue.
            </p>
            <p className="text-lg text-accent-gold italic">
              In a world drowning in artificial desires, his message cuts deeper than ever: 
              What if everything you think you need is actually what's keeping you trapped?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="/defiance" className="btn-primary">
              See His Defiance
            </a>
            <a href="/quotes" className="btn-secondary">
              Hear His Voice
            </a>
            <a href="/reflection" className="btn-secondary">
              Question Yourself
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;