import React from 'react';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="min-h-screen pt-32 px-6 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Package Details: {id}</h1>
      <p className="text-slate-600 dark:text-slate-300 text-lg">Detailed itinerary and booking options.</p>
    </div>
  );
}
