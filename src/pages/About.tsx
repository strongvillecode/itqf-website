import { motion } from "motion/react";

export default function About() {
  return (
    <div className="w-full pt-32 pb-20 min-h-[70vh] bg-[#0A0D0C] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/10 rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-4 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 italic">
            About <span className="font-black not-italic text-emerald-500">ITQF</span>
          </h1>
          <p className="text-lg text-gray-400 font-light">
            A vision built on excellence, faith, and the unbounded potential of the Muslim youth.
          </p>
        </motion.div>
        
        <div className="mx-auto text-center max-w-2xl bg-[#0D1210] p-10 rounded-2xl border border-white/5 shadow-2xl">
          <p className="text-gray-400">This page is currently under development. Please explore our Home and The Ummah Star pages for the complete experience.</p>
        </div>
      </div>
    </div>
  );
}
