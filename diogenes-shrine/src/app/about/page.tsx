'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  significance: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "c. 412 BCE",
    title: "Birth in Sinope",
    description: "Born in the Greek colony of Sinope on the Black Sea, to a banker named Hicesias.",
    significance: "From privilege to poverty - his journey began in comfort."
  },
  {
    year: "c. 390 BCE",
    title: "The Currency Scandal",
    description: "Caught defacing coins with his father. Some say he debased the currency, others that he altered the political message.",
    significance: "His first act of rebellion against social conventions and authority."
  },
  {
    year: "c. 389 BCE",
    title: "Exile to Athens",
    description: "Banished from Sinope, he arrived in Athens as a homeless exile with nothing but fierce independence.",
    significance: "Exile became liberation - freed from social expectations and material desires."
  },
  {
    year: "c. 385 BCE",
    title: "Meeting Antisthenes",
    description: "Became a student of Antisthenes, founder of Cynic philosophy, despite initial rejection.",
    significance: "Found his philosophical foundation in the pursuit of virtue and rejection of luxury."
  },
  {
    year: "c. 380 BCE",
    title: "Life in the Barrel",
    description: "Adopted an extreme lifestyle, living in a large ceramic jar (pithos) in the Athenian agora.",
    significance: "Demonstrated that happiness requires nothing external - not even a house."
  },
  {
    year: "c. 375 BCE",
    title: "The Lantern Search",
    description: "Wandered Athens in daylight with a lantern, claiming to search for 'an honest man.'",
    significance: "His most famous critique of human hypocrisy and corruption."
  },
  {
    year: "c. 360 BCE",
    title: "Captured by Pirates",
    description: "Sold into slavery but maintained his philosophical equanimity, even improving his master's family.",
    significance: "Proved that external circumstances cannot touch the free soul."
  },
  {
    year: "c. 356 BCE",
    title: "Encounter with Alexander",
    description: "When Alexander the Great offered him anything, Diogenes replied: 'Stand out of my sunlight.'",
    significance: "The ultimate demonstration that contentment needs nothing from even the most powerful."
  },
  {
    year: "c. 323 BCE",
    title: "Death in Corinth",
    description: "Died the same day as Alexander the Great, requesting to be thrown to wild animals rather than buried.",
    significance: "Even in death, he rejected social conventions and embraced natural simplicity."
  }
];

const TimelineItem = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}
    >
      <div className={`w-full max-w-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
        <div className="bg-surface-elevated/80 border border-border rounded-lg p-6 backdrop-blur-sm hover:bg-surface-elevated transition-colors duration-300">
          <div className="text-accent-gold font-mono text-sm uppercase tracking-wider mb-2">
            {event.year}
          </div>
          <h3 className="text-xl font-serif font-bold text-foreground mb-3">
            {event.title}
          </h3>
          <p className="text-text-muted mb-4 leading-relaxed">
            {event.description}
          </p>
          <div className="text-sm text-accent-blood italic border-l-2 border-accent-blood pl-3">
            {event.significance}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Who Was Diogenes?
          </h1>
          <div className="w-24 h-1 bg-accent-blood mx-auto mb-6"></div>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            From privileged banker&apos;s son to homeless philosopher—the extraordinary life of 
            ancient Greece&apos;s most radical thinker.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-20 p-8 bg-surface/50 border-l-4 border-accent-gold rounded-r-lg"
        >
          <p className="text-lg font-mono italic text-foreground mb-4">
            &ldquo;I was sent into exile by ignorant citizens, but I condemned them to remain at home.&rdquo;
          </p>
          <cite className="text-accent-gold text-sm font-mono uppercase tracking-wider">
            — Diogenes, on his banishment from Sinope
          </cite>
        </motion.blockquote>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
          
          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-blood rounded-full border-4 border-background z-10"
              />
              <TimelineItem event={event} index={index} />
            </div>
          ))}
        </div>

        {/* Legacy section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            The Lasting Legacy
          </h2>
          <div className="max-w-3xl mx-auto bg-surface-elevated/50 border border-border rounded-lg p-8">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Diogenes lived his philosophy with uncompromising integrity. He rejected wealth, status, 
              and comfort not as an intellectual exercise, but as a practical demonstration that 
              happiness comes from within. His radical lifestyle was itself his teaching method.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Two millennia later, his challenge remains as relevant as ever: What do we truly need 
              to be free? What conventions do we follow merely because they exist? In our age of 
              endless consumption and social media performance, Diogenes&apos; voice cuts through the noise 
              with startling clarity.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-16 space-x-6"
        >
          <a href="/philosophy" className="btn-primary">
            Explore His Philosophy
          </a>
          <a href="/defiance" className="btn-secondary">
            Acts of Defiance
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;