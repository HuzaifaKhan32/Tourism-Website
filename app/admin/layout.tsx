import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-slate-900 text-white p-4">Admin Portal</div>
      <div className="flex-grow p-6">
        {children}
      </div>
    </div>
  );
}
