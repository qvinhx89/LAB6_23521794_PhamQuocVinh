'use client';

import { useState } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return (
    <div className={`theme-${mode}`}>
      <p>Current mode: {mode}</p>
      <button onClick={toggle}>Toggle Mode</button>
    </div>
  );
}
