'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'The Dog Philosopher', id: 'home' },
    { href: '/about', label: 'Who Was Diogenes?', id: 'about' },
    { href: '/philosophy', label: 'The Cynical Lens', id: 'philosophy' },
    { href: '/defiance', label: 'Acts of Defiance', id: 'defiance' },
    { href: '/quotes', label: 'Diogenes Speaks', id: 'quotes' },
    { href: '/reflection', label: 'Would You Dare?', id: 'reflection' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-surface-elevated/80 backdrop-blur-sm border border-border rounded-full px-6 py-3">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
                pathname === item.href
                  ? 'text-accent-gold glow-text'
                  : 'text-text-muted hover:text-foreground'
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent-blood/20 rounded-full border border-accent-blood/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-surface-elevated border border-border rounded-lg"
      >
        <div className="w-6 h-6 flex flex-col justify-around">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-foreground origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-foreground origin-center"
          />
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-accent-gold glow-text'
                    : 'text-foreground hover:text-accent-gold'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-30 bg-black/50"
        />
      )}
    </>
  );
};

export default Navigation;