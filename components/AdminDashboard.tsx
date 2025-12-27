// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePartner, setActivePartner] = useState<'Usama' | 'Faizan'>('Usama');

  const [videos, setVideos] = useState([
    { id: 1, partner: 'Usama', title: 'Luxury Visa Strategy', type: 'Video', status: 'Published' },
    { id: 2, partner: 'Usama', title: 'Middle East Real Estate', type: 'Post', status: 'Published' },
    { id: 3, partner: 'Faizan', title: 'Supply Chain Logistics', type: 'Video', status: 'Published' },
    { id: 4, partner: 'Faizan', title: 'Dubai Office Tour', type: 'Video', status: 'Review' },
  ]);

  const handleBack = () => {
      router.push('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl text-center">
          <span className="material-symbols-outlined text-brand-blue text-5xl mb-6">lock_person</span>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Partner Portal</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Authorised Personnel Only</p>
          <div className="space-y-4">
            <input type="password" placeholder="Partner Access Key" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 text-center font-bold" />
            <button onClick={() => setIsLoggedIn(true)} className="w-full h-14 bg-brand-blue text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-900/20">Unlock Access</button>
            <button onClick={handleBack} className="text-[10px] font-black uppercase text-slate-300 tracking-widest pt-4">Return to Public Site</button>
          </div>
        </motion.div>
      </div>
    );
  }

  const handleDelete = (id: number) => {
    setVideos(videos.filter(v => v.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.4em]">Content Management System</span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-2">Partner Dashboard</h1>
          </div>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-2xl">
            <button onClick={() => setActivePartner('Usama')} className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activePartner === 'Usama' ? 'bg-white text-brand-blue shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Usama Khan</button>
            <button onClick={() => setActivePartner('Faizan')} className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activePartner === 'Faizan' ? 'bg-white text-brand-blue shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Faizan</button>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Manage Content ({activePartner})</h3>
            <button className="h-10 px-6 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">+ New Entry</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <th className="px-8 py-4">Title</th>
                  <th className="px-8 py-4">Type</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {videos.filter(v => v.partner === activePartner).map((video) => (
                  <tr key={video.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 text-xs font-black uppercase tracking-tight">{video.title}</td>
                    <td className="px-8 py-5">
                      <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md uppercase tracking-widest text-slate-500">{video.type}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${video.status === 'Published' ? 'text-green-500' : 'text-orange-400'}`}>{video.status}</span>
                    </td>
                    <td className="px-8 py-5 text-right space-x-2">
                      <button className="text-slate-300 hover:text-brand-blue transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button onClick={() => handleDelete(video.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button onClick={handleBack} className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors">Logout Dashboard</button>
        </div>
      </div>
    </div>
  );
};


export default AdminDashboard;
