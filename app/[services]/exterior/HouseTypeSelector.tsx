'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface HouseType {
  label: string
  image: string
  content: React.ReactNode
}

interface Props {
  houseTypes: HouseType[]
}

export default function HouseTypeSelector({ houseTypes }: Props) {
  const [selectedHouseType, setSelectedHouseType] = useState(houseTypes[0].label)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Desktop version (interactive) */}
      <div className="hidden lg:block">
        <div className="flex justify-center gap-2 mb-8">
          {houseTypes.map((type) => (
            <motion.button
              key={type.label}
              onClick={() => setSelectedHouseType(type.label)}
              className={`px-4 py-3 rounded text-xs uppercase font-semibold tracking-wider relative overflow-hidden transition-colors duration-300 ease-in-out ${
                selectedHouseType === type.label
                  ? 'bg-primary text-white'
                  : 'bg-light-bg text-primary hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.label}
              {selectedHouseType === type.label && isClient && (
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
                  src={houseTypes.find(o => o.label === selectedHouseType)?.image || ''}
                  alt={selectedHouseType}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 text-sm">
            {houseTypes.find(o => o.label === selectedHouseType)?.content}
          </div>
        </div>
      </div>

      {/* Mobile version (static columns) */}
      <div className="lg:hidden space-y-12">
        {houseTypes.map((type) => (
          <div key={type.label} className="space-y-4">
            <h3 className="text-base font-semibold">{type.label}</h3>
            <div className="p-3 bg-white shadow-xl">
              <div className="relative h-[250px] shadow-lg">
                <Image
                  src={type.image}
                  alt={type.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-sm">
              {type.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}