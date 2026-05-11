import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Donate() {
  return (
    <div className="w-full pt-32 pb-20 min-h-[70vh] bg-[#0A0D0C] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/10 rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
              <Heart className="w-8 h-8" />
            </div>
          </div>
          <div className="mb-4 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">
            Impact
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 italic">
            Support the <span className="font-black not-italic text-emerald-500">Vision</span>
          </h1>
          <p className="text-lg text-gray-400 font-light">
            Your generous donations fuel our global humanitarian outreach, scholarship programs, and talent discovery initiatives.
          </p>
        </div>
        
        <div className="mx-auto text-center max-w-2xl bg-[#0D1210] p-10 rounded-2xl border border-white/5 shadow-2xl">
          <p className="text-gray-400">Donation system to be integrated.</p>
        </div>
      </div>
    </div>
  );
}
