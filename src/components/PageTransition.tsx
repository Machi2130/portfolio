import type React from 'react'
import { motion } from 'framer-motion'

type PageTransitionProps = {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      className="mx-auto flex min-h-screen w-full flex-col px-5 py-10 sm:px-8 md:px-12 lg:px-16 2xl:px-24 md:py-16"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

