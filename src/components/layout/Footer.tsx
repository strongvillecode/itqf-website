import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0D0C] text-white pt-16 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-none tracking-tighter uppercase text-white">
                  Islamic Talent
                </span>
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-emerald-500 mt-1">
                  Quest Foundation
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Muslim youth through talent discovery, digital innovation, educational support, and moral transformation across Africa and globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">Our Programs</Link></li>
              <li><Link to="/the-ummah-star" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">The Ummah Star</Link></li>
              <li><Link to="/volunteer" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">Volunteer</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">Make a Donation</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-white">Core Focus</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Islamic Talent Discovery</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Youth Empowerment</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Qur'an & Nasheed Competitions</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Coding & Tech Education</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Scholarship Programs</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Humanitarian Outreach</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Headquarters<br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-gray-400 text-sm">
                  +234 (0) 800 000 0000
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="mailto:info@itqf.org" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">
                  info@itqf.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partner Ribbon from Design */}
      <div className="bg-black border-t border-white/10 hidden md:flex items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-8">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Global Partners</span>
          <div className="flex space-x-12 opacity-30">
            <div className="font-black text-lg italic text-white flex items-center">ISLAMIC RELIEF</div>
            <div className="font-black text-lg text-white flex items-center">UNICEF<span className="text-[10px] align-top ml-1">®</span></div>
            <div className="font-black text-lg underline text-white flex items-center">QATAR FOUNDATION</div>
            <div className="font-black text-lg italic tracking-tighter text-white flex items-center">MUSLIM HANDS</div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-[#0A0D0C] py-6 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-medium tracking-wide uppercase">
            © {new Date().getFullYear()} ITQF. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-wide text-gray-500">
            <Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
