import { motion } from "motion/react";
import { Star, Trophy, Video, Users, CheckCircle, Upload, ShieldCheck, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function UmmahStar() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col md:flex-row border-b border-border bg-[#0A0D0C]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border relative z-10 bg-background/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase rounded border border-emerald-500/20 mb-6">
              <Star className="w-4 h-4" />
              <span>Official Talent Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-none mb-6 italic">
              The Ummah <span className="font-black not-italic text-emerald-500 underline underline-offset-8">Star</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              A premium, global competition discovering exceptional Muslim talents in Qur'an, Nasheed, Spoken Word, and Tech Innovation. Step onto the stage. Show the world your light.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 text-sm font-bold bg-emerald-600 rounded-full text-white hover:bg-emerald-500 transition-colors uppercase tracking-widest shadow-lg shadow-emerald-900/40">
                Start Application
              </button>
              <button className="px-8 py-4 text-sm font-bold border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors uppercase tracking-widest">
                Evaluator Login
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Image/Graphics */}
        <div className="w-full md:w-1/2 relative overflow-hidden bg-[#0D1210]">
           <img 
            src="https://images.unsplash.com/photo-1594951230491-d8ec77651a54?q=80&w=2670&auto=format&fit=crop" 
            alt="The Ummah Star Stage" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 transform hover:scale-100 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] md:bg-gradient-to-l md:from-transparent via-[#0A0D0C]/50 to-[#0A0D0C]" />
          
          <div className="absolute bottom-12 right-12 text-right hidden md:block">
            <div className="text-5xl font-black text-transparent stroke-text opacity-20" style={{ WebkitTextStroke: '2px text-emerald-500' }}>2025</div>
            <div className="text-emerald-500 text-xs font-bold tracking-[0.3em] uppercase mt-2">Global Cohort</div>
          </div>
        </div>
      </section>

      {/* Overview/Categories */}
      <section className="py-24 bg-[#0A0D0C] border-b border-border relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 filter blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">
              Disciplines
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 italic">
              Competition <span className="font-black not-italic">Categories</span>
            </h2>
            <p className="text-lg text-gray-400">Represent your craft. We evaluate passion, skill, and adherence to Islamic values across these disciplines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Qur'an Recitation", icon: BookOpen, desc: "Showcase mastery, Tajweed, and emotional delivery." },
              { title: "Nasheed & Spoken", icon: Video, desc: "Inspire through vocal excellence and powerful poetry." },
              { title: "Tech Innovation", icon: Star, desc: "Present digital solutions addressing Ummah challenges." },
              { title: "Islamic Arts", icon: Trophy, desc: "Calligraphy, digital art, and wholesome drama." },
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0D1210] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:bg-[#111815] transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-[#0D1210] transition-all shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{cat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="mb-4 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">
                Process
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 italic">
                The Journey to <span className="font-black not-italic text-emerald-500">Stardom</span>
              </h2>
              <p className="text-lg text-gray-400 mb-12">Our process is fully digitized, transparent, and rigorous, designed to ensure fairness and global accessibility.</p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Online Registration & Video Upload", desc: "Create your profile and securely upload your audition video to our cloud portal.", icon: Upload },
                  { step: "02", title: "AI & Expert Evaluation", desc: "Submissions undergo initial AI screening and deep expert review using our Evaluator Dashboard.", icon: ShieldCheck },
                  { step: "03", title: "Public Voting Phase", desc: "Shortlisted candidates are opened to public engagement and verified community voting.", icon: Users },
                  { step: "04", title: "Live Grand Finale", desc: "The top talents compete on a global live-streamed stage for the ultimate prize.", icon: Activity }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {idx !== 3 && <div className="w-px h-full bg-white/10 my-4"></div>}
                    </div>
                    <div className="pb-8 pt-2">
                       <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                         <span className="text-emerald-500 text-xs font-black">{item.step}.</span> {item.title}
                       </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative h-[500px] md:h-[700px] w-full mt-10 lg:mt-0">
               <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 transform translate-x-4 translate-y-4"></div>
               <img 
                 src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2574&auto=format&fit=crop" 
                 alt="Audience and stage" 
                 className="relative rounded-3xl shadow-2xl w-full object-cover h-full border border-white/10"
               />
               
               {/* Floating stat card */}
               <div className="absolute bottom-8 -left-8 md:-left-12 bg-[#0A0D0C] p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 max-w-[280px] animate-bounce" style={{ animationDuration: '4s' }}>
                 <div className="flex items-center gap-4 mb-3">
                   <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                     <CheckCircle className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold text-white uppercase tracking-wide text-sm">Live Dashboard</h4>
                 </div>
                 <p className="text-xs text-gray-400 leading-relaxed">Track your application status and evaluator scores in real-time on the portal.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Dummy icon for BookOpen
function BookOpen(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
}
