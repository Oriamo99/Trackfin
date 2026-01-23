// Fichier: frontend/components/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

// On utilise bien "export function", pas "export default"
export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-gray-100/40">
      {children}
    </div>
  );
}