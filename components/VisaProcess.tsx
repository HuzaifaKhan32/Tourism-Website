
import React from 'react';
import { motion } from 'framer-motion';
import { VISA_STEPS } from '../constants';

const VisaProcess: React.FC = () => {
  return (
    <section id="visa-process" className="relative w-full py-24 lg:py-32 z-20 bg-pattern overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue dark:text-sky-400 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 uppercase"
          >
            Visa Approval Process
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-brand-blue mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed"
          >
            A seamless journey from consultation to your destination. We simplify the complexities of global travel documentation.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Central Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 border-l-4 border-dashed border-brand-blue/30 h-[calc(100%-32px)] z-0"></div>
          
          {/* Steps Wrapper */}
          <div className="relative z-10 flex flex-col gap-16 lg:gap-32">
            {VISA_STEPS.map((step, index) => {
              const isEven = index % 2 === 1;
              
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col lg:flex-row items-center justify-between w-full group"
                >
                  {/* Step Card (Alternating) */}
                  <div className={`w-full lg:w-[calc(50%-80px)] ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                    <div className={`bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl border-t-8 border-brand-blue hover:shadow-2xl transition-all duration-500 ease-out relative overflow-hidden`}>
                      {/* Icon Badge */}
                      <div className={`absolute -top-6 ${isEven ? 'right-8' : 'left-8'} lg:${isEven ? 'left-auto right-8' : 'right-auto left-8'} w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm backdrop-blur-sm border border-brand-blue/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white`}>
                        <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-4 uppercase tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle Indicator */}
                  <div className="order-1 lg:order-2 relative flex items-center justify-center z-10 mb-8 lg:mb-0">
                    <motion.div 
                      whileInView={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-blue to-secondary-blue flex items-center justify-center shadow-2xl ring-[12px] ring-white dark:ring-background-dark"
                    >
                      <span className="text-white text-3xl font-black">{step.id}</span>
                    </motion.div>
                  </div>

                  {/* Empty Spacer (Desktop) */}
                  <div className={`hidden lg:block lg:w-[calc(50%-80px)] ${isEven ? 'lg:order-1' : 'lg:order-3'}`}></div>
                </motion.div>
              );
            })}
          </div>

          {/* End decorators */}
          <div className="hidden lg:block absolute left-1/2 -top-4 w-4 h-4 bg-brand-blue rounded-full -translate-x-1/2 shadow-lg"></div>
          <div className="hidden lg:block absolute left-1/2 -bottom-4 w-4 h-4 bg-brand-blue rounded-full -translate-x-1/2 shadow-lg"></div>
        </div>
      </div>

      <style>{`
        .bg-pattern {
            background-color: #f6f7f8;
            background-image:  radial-gradient(#2b5e7d1a 1.5px, transparent 1.5px), radial-gradient(#2b5e7d1a 1.5px, #f6f7f8 1.5px);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
        }
        .dark .bg-pattern {
            background-color: #141a1e;
            background-image:  radial-gradient(#ffffff0d 1.5px, transparent 1.5px), radial-gradient(#ffffff0d 1.5px, #141a1e 1.5px);
        }
      `}</style>
    </section>
  );
};

export default VisaProcess;
