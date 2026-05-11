import { motion } from "motion/react";
import { ArrowRight, Star, BookOpen, Users, HeartHandshake, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero & Content Grid (Geometric Balance Layout) */}
      <section className="flex flex-col md:flex-row border-b border-border min-h-[90vh]">
        {/* Left Column: Storytelling & Hero */}
        <div className="w-full md:w-3/5 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border relative z-10 z-10 bg-background/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase w-fit rounded border border-emerald-500/20">
              The Future of the Global Ummah
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight italic text-emerald-50">
              Empowering <span className="font-black not-italic text-white">Next-Gen</span> <br />Muslim <span className="font-black not-italic text-emerald-500 underline underline-offset-8">Leaders.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-12">
              Discovering, nurturing, and elevating Islamic talents globally through technology, media, and moral excellence. Join the movement to reshape the future of the Ummah.
            </p>
            <div className="flex flex-wrap gap-8 md:space-x-12">
              <div>
                <div className="text-3xl font-bold text-white">50,000+</div>
                <div className="text-xs uppercase tracking-widest text-emerald-500 font-bold mt-1">Youths Empowered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$2.4M+</div>
                <div className="text-xs uppercase tracking-widest text-emerald-500 font-bold mt-1">Scholarships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-xs uppercase tracking-widest text-emerald-500 font-bold mt-1">Countries Active</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Features */}
        <div className="w-full md:w-2/5 flex flex-col bg-gradient-to-br from-[#0D1210] to-[#050706] relative z-10">
          {/* Top Box: The Ummah Star Program */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 border-b border-border group">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white">The Ummah Star</h3>
              <span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold rounded uppercase border border-emerald-500/20">Registration Open</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
              "A premium global talent competition spanning Qur'an recitation, Nasheed, innovation, and spoken word."
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                <div className="w-12 h-12 bg-amber-500/20 rounded flex items-center justify-center text-amber-500 font-bold italic">AI</div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase text-white/80">Tech & STEM</div>
                  <div className="text-[10px] text-gray-500 mt-1">Equipping the next generation</div>
                </div>
                <div className="text-sm font-bold text-gray-500 group-hover/item:text-amber-500 transition-colors">→</div>
              </div>
              <Link to="/the-ummah-star" className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer group/item">
                <div className="w-12 h-12 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-500 font-bold">QR</div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase text-white/80">Join The Competition</div>
                  <div className="text-[10px] text-gray-500 mt-1">Global Auditions Open</div>
                </div>
                <div className="text-sm font-bold text-gray-500 group-hover/item:text-emerald-500 transition-colors">→</div>
              </Link>
            </div>
          </div>

          {/* Bottom Box: Donation/Sponsorship */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-emerald-950/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg className="w-5 h-5 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
              Invest in Transformation
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link to="/donate" className="p-4 text-center text-xs bg-white/5 border border-white/20 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 text-white transition-all font-bold tracking-widest uppercase">ONE-TIME</Link>
              <Link to="/donate" className="p-4 text-center text-xs bg-emerald-600 border border-emerald-500 rounded-lg hover:bg-emerald-500 text-white transition-all font-bold tracking-widest uppercase shadow-lg shadow-emerald-900/40">RECURRING</Link>
            </div>
            <div className="relative w-full h-1.5 bg-white/10 rounded-full mb-3">
              <div className="absolute left-0 top-0 h-full w-[72%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] rounded-full"></div>
            </div>
            <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-gray-500">
              <span>Goal: $500,000</span>
              <span className="text-emerald-500">72% Funded</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-b border-border bg-[#0A0D0C]/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1601614940562-b13c32cfbf8f?q=80&w=2574&auto=format&fit=crop" 
                  alt="Students learning" 
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
                />
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight italic">
                Igniting the spark of <span className="font-black not-italic text-emerald-500">excellence</span> in the Muslim Ummah.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Based in Lagos, Nigeria, the Islamic Talent Quest Foundation (ITQF) operates on a global scale. We fuse Islamic values with digital technology, media, and creative arts to discover and nurture extraordinary talents.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                From Qur'an competitions and STEM education to leadership academies, our initiatives are meticulously designed to foster holistic development—shaping individuals who are not just skilled, but morally grounded and deeply connected to their faith.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Islamic Talent Discovery', 'STEM & Coding Education', 'Humanitarian Outreach', 'Leadership Development'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                      <Star className="w-3 h-3" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wide text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/about" className="inline-flex items-center gap-3 font-bold text-sm tracking-widest uppercase text-emerald-500 hover:text-white transition-colors group">
                Discover Our Story 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-card border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">
              Our Initiatives
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 italic">
              Transformative <span className="font-black not-italic">Programs</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our core pillars of empowerment, designed to elevate the Muslim youth across every spectrum of human endeavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Ummah Star",
                desc: "A premium global talent competition spanning Qur'an recitation, Nasheed, innovation.",
                img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop",
                link: "/the-ummah-star"
              },
              {
                title: "Tech & STEM Education",
                desc: "Equipping young Muslims with coding, AI, and digital literacy skills to lead the tech revolution.",
                img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2669&auto=format&fit=crop",
                link: "/programs"
              },
              {
                title: "Humanitarian Outreach",
                desc: "Providing vital support, orphan care, and community development to those who need it most.",
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
                link: "/programs"
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group cursor-pointer bg-[#0A0D0C] border border-border rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors"
              >
                <div className="relative overflow-hidden aspect-[4/3] border-b border-border">
                  <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{program.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{program.desc}</p>
                  <Link to={program.link} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-500 hover:text-white transition-colors">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#0A0D0C] relative overflow-hidden z-10 border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 filter blur-[80px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6 italic text-white">Ready to make a <span className="font-black not-italic">global impact?</span></h2>
          <p className="text-lg text-gray-400 mb-12 font-light max-w-2xl mx-auto">
            Whether you want to sponsor a talent, volunteer your time, or participate in our programs, your involvement changes lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40">
              Donate Today
            </Link>
            <Link to="/volunteer" className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
