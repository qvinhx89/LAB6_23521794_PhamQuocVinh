import Link from 'next/link';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li><Link href="/dashboard">Home</Link></li>
            <li><Link href="/image-demo">Image Demo</Link></li>
          </ul>
        </nav>
      </aside>
      <section className="content">{children}</section>
    </div>
  );
}
