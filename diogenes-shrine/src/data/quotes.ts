export interface Quote {
  text: string;
  context?: string;
  category: 'wisdom' | 'defiance' | 'virtue' | 'materialism' | 'society';
}

export interface Anecdote {
  title: string;
  story: string;
  lesson: string;
  category: 'confrontation' | 'teaching' | 'mockery' | 'demonstration';
}

export const diogenesQuotes: Quote[] = [
  {
    text: "I am looking for an honest man.",
    context: "Said while walking through Athens with a lantern in broad daylight",
    category: 'society'
  },
  {
    text: "The foundation of every state is the education of its youth.",
    category: 'wisdom'
  },
  {
    text: "Dogs and philosophers do the greatest good and get the fewest rewards.",
    category: 'virtue'
  },
  {
    text: "I have nothing to ask but that you would remove to the other side, that you may not, by intercepting the sunshine, take from me what you cannot give.",
    context: "To Alexander the Great when asked what he could do for him",
    category: 'defiance'
  },
  {
    text: "The mob is the mother of tyrants.",
    category: 'society'
  },
  {
    text: "It is the privilege of the gods to want nothing, and of godlike men to want little.",
    category: 'materialism'
  },
  {
    text: "When I see medical men, lawyers, and philosophers, I think human beings are the most intelligent of all animals. When I see priests, prophets, and interpreters of dreams, I think they are the most foolish.",
    category: 'society'
  },
  {
    text: "The great thieves lead away the little thief.",
    category: 'society'
  },
  {
    text: "I am a citizen of the world.",
    context: "When asked where he came from",
    category: 'wisdom'
  },
  {
    text: "The art of being a slave is to rule one's master.",
    category: 'wisdom'
  },
  {
    text: "Man is the most intelligent of the animals - and the most silly.",
    category: 'wisdom'
  },
  {
    text: "I threw my cup away when I saw a child drinking from his hands at the trough.",
    category: 'materialism'
  },
  {
    text: "Why not whip the teacher when the pupil misbehaves?",
    category: 'wisdom'
  },
  {
    text: "The only way to grapple with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    category: 'defiance'
  },
  {
    text: "He has the most who is most content with the least.",
    category: 'materialism'
  },
  {
    text: "It is not the man who has too little, but the man who craves more, who is poor.",
    category: 'materialism'
  },
  {
    text: "Of what use is a philosopher who doesn't hurt anybody's feelings?",
    category: 'defiance'
  },
  {
    text: "Those who have virtue have all things; those who lack virtue lack all things.",
    category: 'virtue'
  },
  {
    text: "I pissed on the man who called me a dog. Why was he so surprised?",
    category: 'defiance'
  },
  {
    text: "What I like to drink most is wine that belongs to others.",
    category: 'materialism'
  }
];

export const diogenesAnecdotes: Anecdote[] = [
  {
    title: "The Lantern Search",
    story: "In broad daylight, Diogenes walked through the agora of Athens carrying a lantern. When curious onlookers asked what he was doing, he replied, 'I am looking for an honest man.' He never found one.",
    lesson: "A scathing critique of human nature and the rarity of genuine virtue in society.",
    category: 'demonstration'
  },
  {
    title: "Meeting Alexander the Great",
    story: "When Alexander the Great found Diogenes sunbathing and offered to grant him any wish, Diogenes replied, 'Stand out of my sunlight.' Alexander later said, 'If I were not Alexander, I would wish to be Diogenes.'",
    lesson: "True contentment requires nothing external - even the gifts of the most powerful man in the world.",
    category: 'confrontation'
  },
  {
    title: "The Defaced Coins",
    story: "Diogenes was exiled from Sinope for defacing the currency. When questioned about this later, he said, 'I was sent into exile by ignorant citizens, but I condemned them to remain at home.'",
    lesson: "Sometimes the punisher suffers more than the punished. Exile can be liberation.",
    category: 'confrontation'
  },
  {
    title: "Mocking Plato's Definitions",
    story: "When Plato defined man as a 'featherless biped,' Diogenes plucked a chicken and declared, 'Behold! Plato's man!' Plato was forced to add 'with broad flat nails' to his definition.",
    lesson: "Academic philosophy can become absurd when divorced from practical wisdom.",
    category: 'mockery'
  },
  {
    title: "The Discarded Cup",
    story: "Diogenes threw away his cup when he saw a child drinking water from cupped hands, realizing he still possessed more than he needed.",
    lesson: "True minimalism means constantly questioning what is truly necessary.",
    category: 'teaching'
  },
  {
    title: "Public Mockery",
    story: "When people mocked Diogenes for living like a dog, he replied, 'Yes, and you who feed me are beneath me, for dogs do not feed their enemies, but you do.'",
    lesson: "The supposedly civilized often behave worse than the 'uncivilized' they mock.",
    category: 'confrontation'
  },
  {
    title: "The Marketplace Teaching",
    story: "Diogenes would often perform crude acts in public to shock people into examining their own hypocrisies about what was 'natural' and what was merely social convention.",
    lesson: "Sometimes shocking behavior is necessary to awaken people from social conditioning.",
    category: 'teaching'
  },
  {
    title: "Death Preparation",
    story: "When asked how he wanted to be buried, Diogenes said, 'Throw me over the wall so the wild animals can feast.' When told this was undignified, he replied, 'Then bury me with a stick so I can beat them off!' 'But you'll be dead - you won't be able to feel anything!' 'Then why should it matter if wild animals eat me?'",
    lesson: "Death is natural and the body's fate after death is irrelevant to the soul that has departed.",
    category: 'teaching'
  }
];

export const cynicismPrinciples = [
  {
    title: "Autarkeia (Self-Sufficiency)",
    description: "True freedom comes from needing nothing external for happiness. The wise person is complete in themselves.",
    modern_relevance: "In our consumerist age, this challenges the notion that happiness comes from acquiring things."
  },
  {
    title: "Askesis (Training/Discipline)",
    description: "Constant practice in virtue through deliberate hardship builds spiritual strength.",
    modern_relevance: "Like modern minimalism or mindfulness practices, but more radical and confrontational."
  },
  {
    title: "Parrhesia (Fearless Speech)",
    description: "Speaking truth boldly, regardless of social consequences or personal comfort.",
    modern_relevance: "In an age of political correctness and social media conformity, this principle remains revolutionary."
  },
  {
    title: "Return to Nature",
    description: "Stripping away artificial social conventions to discover what is truly natural to human beings.",
    modern_relevance: "Challenges our assumptions about what we consider 'normal' in modern society."
  },
  {
    title: "Cosmopolitanism",
    description: "Being a 'citizen of the world' rather than bound by local customs and prejudices.",
    modern_relevance: "Relevant to globalization and the need to think beyond nationalism."
  },
  {
    title: "Virtue as the Only Good",
    description: "External things like wealth, reputation, or comfort are neither good nor bad - only virtue matters.",
    modern_relevance: "Directly challenges materialism and status-seeking that dominates modern culture."
  }
];

export const philosophicalQuestions = [
  "What would you do if you discovered that everything you think you need for happiness is actually holding you back?",
  "If you could only own seven items for the rest of your life, what would they be?",
  "What social conventions do you follow simply because 'that's how things are done'?",
  "Would you rather be rich and miserable or poor and content? Why do you hesitate to answer?",
  "What would it feel like to care nothing for what others think of you?",
  "If you had to choose between being respected and being free, which would you choose?",
  "What are you afraid to say out loud? Why?",
  "How much of your life is performance for others rather than authentic living?",
  "What would you do differently if you knew you would die in one year?",
  "Do you own your possessions, or do your possessions own you?",
  "What makes you angry? Is it because someone has challenged your illusions?",
  "If money, status, and approval all disappeared tomorrow, who would you be?"
];

export const randomQuote = (): Quote => {
  return diogenesQuotes[Math.floor(Math.random() * diogenesQuotes.length)];
};

export const randomAnecdote = (): Anecdote => {
  return diogenesAnecdotes[Math.floor(Math.random() * diogenesAnecdotes.length)];
};

export const randomQuestion = (): string => {
  return philosophicalQuestions[Math.floor(Math.random() * philosophicalQuestions.length)];
};