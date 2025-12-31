// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const TeamGallery: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
      router.push('/');
  };

    const partners = [
      {
        name: "Usama Khan",
        title: "Partner & Global Strategist",
        status: "Dubai Golden Visa Holder",
        bio: "A pioneer in cross-border luxury travel, Usama has secured over 5,000 elite visas and is a resident expert on Middle Eastern luxury markets. As a prestigious Golden Visa holder himself, he navigates the path to residency with firsthand authority.",
        image: "/partner1.jpeg",
        objectPos: "object-top", // Critical: prevents cutting the head
        socials: {
          facebook: "https://www.facebook.com/share/STojFzz1myNQZXo2/?mibextid=LQQJ4d"
        },
        content: [
          { type: 'video', title: 'Dubai Luxury Insights', youtubeId: 'uSrDLdwPoaM' },
          { type: 'video', title: 'Golden Visa Benefits', youtubeId: 'wbA5oCayNqg' },
          { type: 'video', title: 'Yacht Life in Dubai', youtubeId: '65dP60msBEc' },
          { type: 'video', title: 'Business in Emirates', youtubeId: 'WX47GaAsMpk' },
          { type: 'video', title: 'Seamless Travel Logistics', youtubeId: '8SkCyP_Kcmg' },
          { type: 'video', title: 'The Future of Tourism', youtubeId: '8SqOZ4zMlf0' },
          { type: 'video', title: 'Efficiency in Travel', youtubeId: 'fG65V-yT2sU' },
          { type: 'video', title: 'Global Office Network', youtubeId: 'jgqolZHh9ck' }
        ]
      },
      {
        name: "Faizan",
        title: "Managing Partner & Operations Lead",
        status: "Operational Excellence Leader",
        bio: "Faizan oversees our global logistics, ensuring that every UNF journey is executed with surgical precision and white-glove service. His mastery of global supply chains makes impossible travel timelines possible.",
        image: "/partner2.jpeg",
        objectPos: "object-[center_25%]",
        socials: {
          instagram: "https://www.instagram.com/consultant.faizan/",
          tiktok: "https://www.tiktok.com/@consultant.faizan"
        },
        content: [
          { type: 'video', title: 'Operational Excellence', youtubeId: 'EkAG2uS0V5k' },
          { type: 'video', title: 'Global Logistics Update', youtubeId: 'NNXon2Ek5GQ' },
          { type: 'video', title: 'White-Glove Service', youtubeId: 'i5AW4Ue-xWI' },
          { type: 'video', title: 'Supply Chain Mastery', youtubeId: 'cS-jOuHqNgM' },
          { type: 'video', title: 'Travel Precision', youtubeId: 'iUsP4_tILCk' },
          { type: 'video', title: 'UNF Journey Execution', youtubeId: 'XZMSFAY-0fU' },
          { type: 'video', title: 'Mastering Timelines', youtubeId: 'WBzdMEIgsEw' },
          { type: 'video', title: 'Global Operations', youtubeId: 'u-Sf4auj_wY' },
          { type: 'video', title: 'Surgical Precision', youtubeId: '-GdOuFdXswU' }
        ]
      }
    ];
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <button 
          onClick={handleBack}
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
                    <Image 
                      src={partner.image} 
                      alt={partner.name} 
                      fill
                      className={`object-cover ${partner.objectPos} transition-transform duration-1000 group-hover:scale-105 contrast-[1.02] brightness-[1.02]`} 
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
                    {partner.socials?.facebook && (
                        <a href={partner.socials.facebook} target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-colors">
                            <FaFacebookF />
                        </a>
                    )}
                    {partner.socials?.instagram && (
                        <a href={partner.socials.instagram} target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-colors">
                            <FaInstagram />
                        </a>
                    )}
                    {partner.socials?.tiktok && (
                        <a href={partner.socials.tiktok} target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-colors">
                            <FaTiktok />
                        </a>
                    )}
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
                    className="group relative aspect-[9/16] bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all border border-transparent hover:border-brand-blue/30"
                  >
                    {item.type === 'video' ? (
                        <div className="relative aspect-[9/16] w-full h-full">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${item.youtubeId}?modestbranding=1&rel=0&iv_load_policy=3`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    ) : (
                        <Image src={item.thumbnail} alt={item.title} fill className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors pointer-events-none"></div>

                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform pointer-events-none">
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