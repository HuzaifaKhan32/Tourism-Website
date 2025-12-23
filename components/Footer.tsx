
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 }
  };

  return (
    <footer id="footer" className="relative w-full bg-[#1B4965] text-white border-t-[4px] border-[#2B5F7F] z-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16"
        >
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <h2 className="text-white tracking-light text-[28px] font-black leading-tight pb-4 uppercase">
              Usama Consultant
            </h2>
            <p className="text-gray-200 text-base font-medium leading-relaxed max-w-sm">
              Your trusted partner for premium visa assistance and luxury tour packages. Explore the world with confidence and experience travel like never before.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-white text-[22px] font-black leading-tight tracking-[-0.015em] pb-6 uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'Destinations', href: '#popular-packages' },
                { name: 'Tour Packages', href: '#popular-packages' },
                { name: 'Services', href: '#services' },
                { name: 'Visa Process', href: '#visa-process' },
                { name: 'About Us', href: '#footer' },
                { name: 'Contact', href: '#booking' }
              ].map((link) => (
                <a 
                  key={link.name} 
                  className="text-gray-300 hover:text-[#6B9DBD] text-base font-bold transition-all duration-200 w-fit hover:translate-x-1" 
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Get In Touch */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-white text-[22px] font-black leading-tight tracking-[-0.015em] pb-6 uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-[#6B9DBD] shrink-0 group-hover:scale-110 transition-transform">location_on</span>
                <span className="text-gray-300 text-base leading-snug font-medium">
                  123 Luxury Avenue, Business Bay,<br/>Dubai, UAE
                </span>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-[#6B9DBD] shrink-0 group-hover:scale-110 transition-transform">call</span>
                <a className="text-gray-300 hover:text-[#6B9DBD] transition-all duration-200 text-base font-bold" href="tel:+971501234567">
                  +971 50 123 4567
                </a>
              </li>
              {/* WhatsApp */}
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-[#6B9DBD] shrink-0 group-hover:scale-110 transition-transform">chat</span>
                <a className="text-gray-300 hover:text-[#6B9DBD] transition-all duration-200 text-base font-bold" href="https://wa.me/971501234567">
                  +971 50 123 4567 (WhatsApp)
                </a>
              </li>
              {/* Email */}
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-[#6B9DBD] shrink-0 group-hover:scale-110 transition-transform">mail</span>
                <a className="text-gray-300 hover:text-[#6B9DBD] transition-all duration-200 text-base font-bold" href="mailto:info@usamaconsultant.com">
                  info@usamaconsultant.com
                </a>
              </li>
              {/* Office Hours */}
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-[#6B9DBD] shrink-0 group-hover:scale-110 transition-transform">schedule</span>
                <span className="text-gray-300 text-base leading-snug font-medium">
                  Mon - Sat: 9:00 AM - 6:00 PM<br/>
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media Row */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          {[
            { name: 'Facebook', d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
            { name: 'Instagram', d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.821-.049.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.049-3.821-.045-.975-.207-1.504-.344-1.857a3.21 3.21 0 00-.748-1.15 3.21 3.21 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" }
          ].map((social) => (
            <a 
              key={social.name}
              aria-label={social.name} 
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-[#2B5F7F] hover:border-[#2B5F7F] hover:text-white transition-all duration-300 hover:scale-115 active:scale-95" 
              href="#"
            >
              <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={social.d}></path>
              </svg>
            </a>
          ))}
          {/* X / Twitter */}
          <a aria-label="X Twitter" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-[#2B5F7F] hover:border-[#2B5F7F] hover:text-white transition-all duration-300 hover:scale-115 active:scale-95" href="#">
            <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[#2B5F7F]/30 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            © 2024 Usama Consultant. All Rights Reserved. <span className="hidden sm:inline">|</span> <br className="sm:hidden"/>
            Designed with <span className="text-red-500">❤️</span> for travelers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
