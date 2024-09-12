'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface CoatingOption {
  label: string;
  image: string;
  content: React.ReactNode;
}

interface Props {
  applyCoatingOptions: CoatingOption[];
}

export default function InteractiveSection({ applyCoatingOptions }: Props) {
  const [selectedCoating, setSelectedCoating] = useState(applyCoatingOptions[0].label);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Desktop version (interactive) */}
      <div className="hidden lg:block">
        <div className="flex justify-center gap-2 mb-8">
          {applyCoatingOptions.map((option) => (
            <motion.button
              key={option.label}
              onClick={() => setSelectedCoating(option.label)}
              className={`px-4 py-4 rounded text-xs uppercase font-semibold tracking-wider relative overflow-hidden transition-colors duration-300 ease-in-out ${
                selectedCoating === option.label
                  ? 'bg-primary text-white'
                  : 'bg-light-bg text-primary hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.label}
              {selectedCoating === option.label && isClient && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent-1"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="p-3 bg-white shadow-xl">
              <div className="relative h-[350px] shadow-lg">
                <Image
                  src={applyCoatingOptions.find(o => o.label === selectedCoating)?.image || ''}
                  alt={selectedCoating}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 text-sm">
            {applyCoatingOptions.find(o => o.label === selectedCoating)?.content}
          </div>
        </div>
      </div>

      {/* Mobile version (static columns) */}
      <div className="lg:hidden space-y-12">
        {applyCoatingOptions.map((option) => (
          <div key={option.label} className="space-y-4">
            <h3 className="text-base font-semibold">{option.label}</h3>
            <div className="p-3 bg-white shadow-xl">
              <div className="relative h-[250px] shadow-lg">
                <Image
                  src={option.image}
                  alt={option.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-sm">
              {option.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}