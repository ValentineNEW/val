import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import {
  LandingPage,
  ApplicationForm,
  TransitionPage,
  QuestionPage,
  CelebrationReveal,
  GiftBoxAnimation,
} from './components';

type Phase = 'landing' | 'form' | 'transition' | 'question' | 'celebration' | 'giftbox';

export default function App() {
  const [phase, setPhase] = useState<Phase>('landing');

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        {phase === 'landing' && (
          <LandingPage key="landing" onNext={() => setPhase('form')} />
        )}
        {phase === 'form' && (
          <ApplicationForm key="form" onNext={() => setPhase('transition')} />
        )}
        {phase === 'transition' && (
          <TransitionPage key="transition" onNext={() => setPhase('question')} />
        )}
        {phase === 'question' && (
          <QuestionPage key="question" onNext={() => setPhase('celebration')} />
        )}
        {phase === 'celebration' && (
          <CelebrationReveal key="celebration" onNext={() => setPhase('giftbox')} />
        )}
        {phase === 'giftbox' && (
          <GiftBoxAnimation key="giftbox" />
        )}
      </AnimatePresence>
    </div>
  );
}
