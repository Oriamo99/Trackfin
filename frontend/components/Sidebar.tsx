// Fichier: frontend/components/Sidebar.tsx

export function Sidebar() {
  return (
    <aside className="w-64 flex-col border-r bg-white sm:flex">
      {/* Pour l'instant, on met juste un titre. On ajoutera le logo et les boutons plus tard. */}
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-lg font-semibold">Trackfin</h1>
      </div>
      <nav className="p-6">
        <p>Navigation</p>
      </nav>
    </aside>
  );
}