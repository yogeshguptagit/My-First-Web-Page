'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { philosophicalQuestions, randomQuestion } from '@/data/quotes';

interface ReflectionState {
  currentQuestionIndex: number;
  responses: string[];
  isComplete: boolean;
  showResults: boolean;
}

const ReflectionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(philosophicalQuestions[0]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [currentResponse, setCurrentResponse] = useState('');
  const [isReflecting, setIsReflecting] = useState(false);
  const [showFinalChallenge, setShowFinalChallenge] = useState(false);

  const handleNextQuestion = () => {
    if (currentResponse.trim()) {
      setResponses([...responses, currentResponse]);
      setCurrentResponse('');
      
      if (questionIndex < philosophicalQuestions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setCurrentQuestion(philosophicalQuestions[questionIndex + 1]);
      } else {
        setShowFinalChallenge(true);
      }
    }
  };

  const handleRandomQuestion = () => {
    setIsReflecting(true);
    setTimeout(() => {
      setCurrentQuestion(randomQuestion());
      setIsReflecting(false);
    }, 800);
  };

  const ChallengeCard = ({ title, description, challenge }: { title: string; description: string; challenge: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-surface-elevated/80 border border-border rounded-lg p-6 hover:bg-surface-elevated transition-all duration-300 hover:border-accent-blood/30"
      >
        <h3 className="text-xl font-serif font-bold text-accent-gold mb-3">
          {title}
        </h3>
        <p className="text-text-muted mb-4 leading-relaxed">
          {description}
        </p>
        <blockquote className="text-foreground italic border-l-3 border-accent-blood pl-4">
          {challenge}
        </blockquote>
      </motion.div>
    );
  };

  const dailyChallenges = [
    {
      title: "The Possession Audit",
      description: "Look around your living space right now.",
      challenge: "List everything you own but haven't used in the past month. Ask yourself: Do these things own you, or do you own them?"
    },
    {
      title: "The Approval Fast",
      description: "For one day, make decisions without seeking validation.",
      challenge: "Notice how often you check for likes, ask for opinions, or modify your behavior for others' approval. What would you do if no one was watching?"
    },
    {
      title: "The Comfort Challenge",
      description: "Deliberately choose minor discomfort.",
      challenge: "Take a cold shower, walk instead of drive, sit on the floor instead of a chair. Notice what happens when comfort isn't your goal."
    },
    {
      title: "The Truth Experiment",
      description: "Practice radical honesty for one conversation.",
      challenge: "Say what you actually think instead of what you think others want to hear. How does authenticity feel?"
    },
    {
      title: "The Status Symbol Strike",
      description: "Go somewhere dressed in your most basic clothes.",
      challenge: "Notice how differently you feel and how others treat you. What does this reveal about the power of appearances?"
    },
    {
      title: "The Social Convention Question",
      description: "Identify one rule you follow without thinking.",
      challenge: "Ask yourself: Is this serving my authentic self, or am I just conforming? What would happen if you stopped?"
    }
  ];

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
            Would You Dare?
          </h1>
          <div className="w-24 h-1 bg-accent-blood mx-auto mb-6"></div>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            The final test isn&apos;t what you know—it&apos;s what you&apos;re willing to change.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-16"
        >
          <div className="bg-surface-elevated/80 border border-border rounded-lg p-8 text-center">
            <blockquote className="text-2xl font-serif italic text-foreground mb-6 leading-relaxed">
              &ldquo;The only way to grapple with an unfree world is to become so absolutely free 
              that your very existence is an act of rebellion.&rdquo;
            </blockquote>
            <cite className="text-accent-gold font-mono uppercase tracking-wider">
              — Diogenes of Sinope
            </cite>
            <p className="text-text-muted mt-6 leading-relaxed">
              You&apos;ve learned about Diogenes. You&apos;ve heard his words. You&apos;ve seen his defiance. 
              Now comes the hardest part: looking in the mirror and asking what you&apos;re willing to change.
            </p>
          </div>
        </motion.div>

        {/* Interactive Question Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
            The Mirror of Self-Examination
          </h2>

          <div className="bg-surface/50 border border-border rounded-lg p-8">
            <AnimatePresence mode="wait">
              {!isReflecting ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif text-accent-gold mb-6 leading-relaxed">
                    {currentQuestion}
                  </h3>
                  
                  <textarea
                    value={currentResponse}
                    onChange={(e) => setCurrentResponse(e.target.value)}
                    placeholder="Your honest reflection..."
                    className="w-full h-32 bg-surface-elevated border border-border rounded-lg p-4 text-foreground placeholder-text-muted resize-none focus:outline-none focus:border-accent-gold transition-colors"
                  />
                  
                  <div className="flex justify-between mt-6">
                    <motion.button
                      onClick={handleRandomQuestion}
                      className="btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Different Question
                    </motion.button>
                    
                    <motion.button
                      onClick={handleNextQuestion}
                      disabled={!currentResponse.trim()}
                      className={`${currentResponse.trim() ? 'btn-primary' : 'btn-primary opacity-50 cursor-not-allowed'}`}
                      whileHover={currentResponse.trim() ? { scale: 1.05 } : {}}
                      whileTap={currentResponse.trim() ? { scale: 0.95 } : {}}
                    >
                      {questionIndex < philosophicalQuestions.length - 1 ? 'Next Question' : 'Complete Reflection'}
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="reflecting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-accent-gold border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-accent-gold font-mono uppercase tracking-wider">
                    Searching the depths...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Daily Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-6">
            Daily Acts of Liberation
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Philosophy without action is mere entertainment. Choose one challenge and begin today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyChallenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </motion.section>

        {/* The Final Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-accent-blood/10 to-accent-gold/10 border border-accent-blood/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              The Ultimate Question
            </h2>
            <blockquote className="text-xl font-serif italic text-foreground mb-6 leading-relaxed">
              If you had to choose between being comfortable and being free, 
              between being liked and being authentic, between having more and needing less—
              which would you choose?
            </blockquote>
            <p className="text-accent-gold text-lg mb-6">
              And more importantly: Are you living that choice right now?
            </p>
            <div className="border-t border-accent-blood/30 pt-6">
              <p className="text-text-muted italic">
                Diogenes didn&apos;t ask these questions to torture you. He asked them to liberate you.
                The cage door is open. The question is whether you&apos;ll walk through it.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Closing Thoughts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            The Journey Continues
          </h2>
          <div className="bg-surface-elevated/80 border border-border rounded-lg p-8 mb-12">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              This isn&apos;t the end—it&apos;s the beginning. Diogenes spent his entire life proving that 
              radical freedom is possible. Not easy, but possible. Every day, you have the choice 
              to live a little more authentically, need a little less, and fear a little less.
            </p>
            <p className="text-accent-gold italic text-lg">
              The dog philosopher is dead, but his bark echoes through time. 
              Will you add your voice to his call for authentic living?
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="/" className="btn-secondary">
              Return to the Beginning
            </a>
            <a href="/quotes" className="btn-primary">
              Carry His Words
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ReflectionPage;