
import React from 'react';
import { motion } from 'framer-motion';

interface TeamGalleryProps {
  onBack: () => void;
}

const TeamGallery: React.FC<TeamGalleryProps> = ({ onBack }) => {
  const partners = [
    {
      name: "Usama Khan",
      title: "Senior Partner & Global Strategist",
      status: "Dubai Golden Visa Holder",
      bio: "A pioneer in cross-border luxury travel, Usama has secured over 5,000 elite visas and is a resident expert on Middle Eastern luxury markets. As a prestigious Golden Visa holder himself, he navigates the path to residency with firsthand authority.",
      image: "https://i.ibb.co/MwMJcG5/usama.jpg", 
      objectPos: "object-top", // Critical: prevents cutting the head
      content: [
        { type: 'video', title: 'Dubai Luxury Insights', thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Top 5 Hidden Gems in Turkey', thumbnail: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Visa Success Secrets', thumbnail: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Golden Visa Benefits', thumbnail: 'https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Exclusive Burj Khalifa Access', thumbnail: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Yacht Life in Dubai', thumbnail: 'https://images.unsplash.com/photo-1567676147547-efbc3a7a726f?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Desert Safari Tips', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Business in Emirates', thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Luxury Real Estate', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Networking in DXB', thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      name: "Faizan",
      title: "Managing Partner & Operations Lead",
      status: "Operational Excellence Leader",
      bio: "Faizan oversees our global logistics, ensuring that every UNF journey is executed with surgical precision and white-glove service. His mastery of global supply chains makes impossible travel timelines possible.",
      image: "https://i.ibb.co/v4K7H9D/faizan.jpg", 
      objectPos: "object-[center_25%]",
      content: [
        { type: 'video', title: 'Seamless Travel Logistics', thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Why Process Matters', thumbnail: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'The Future of Tourism', thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Efficiency in Travel', thumbnail: 'https://images.unsplash.com/photo-1464014058113-ed6fe2ba3bf2?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Quality Assurance System', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Global Office Network', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Handling Complex Visa Paths', thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Team Performance Review', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400' },
        { type: 'video', title: 'Technology in Operations', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
        { type: 'post', title: 'Client Satisfaction Index', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest mb-12 hover:text-brand-blue transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Return to Portal
        </button>

        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">Expert Insights</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl border-l-4 border-brand-blue pl-6">
            Meet the architectural minds behind your global mobility. A curation of masterclasses, site visits, and operational updates from our Partners.
          </p>
        </div>

        <div className="space-y-40">
          {partners.map((partner, pIdx) => (
            <div key={partner.name} className="flex flex-col gap-12">
              {/* Partner Profile Header */}
              <div className={`flex flex-col ${pIdx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 pb-16 border-b border-slate-200 dark:border-white/5`}>
                <div className="w-full lg:w-1/3">
                  <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group border-8 border-white dark:border-slate-800 transition-all">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className={`w-full h-full object-cover ${partner.objectPos} transition-transform duration-1000 group-hover:scale-105 contrast-[1.02] brightness-[1.02]`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 space-y-8">
                  <div className="space-y-4">
                    <span className="text-brand-blue dark:text-light-blue font-black text-[10px] uppercase tracking-[0.5em]">{partner.status}</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{partner.name}</h2>
                    <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">{partner.title}</p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">{partner.bio}</p>
                  
                  <div className="flex gap-4 pt-4">
                    <button className="h-12 px-8 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">View Full Bio</button>
                    <button className="size-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-colors">
                      <span className="material-symbols-outlined">public</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Partner Grid - 10 items */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {partner.content.map((item, iIdx) => (
                  <motion.div 
                    key={iIdx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.05 }}
                    className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all border border-transparent hover:border-brand-blue/30"
                  >
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                    
                    <div className="absolute top-4 left-4 size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <span className="material-symbols-outlined text-[18px] text-white">
                        {item.type === 'video' ? 'play_arrow' : 'article'}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-white font-black text-[10px] uppercase tracking-tighter line-clamp-2 leading-tight">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGallery;
