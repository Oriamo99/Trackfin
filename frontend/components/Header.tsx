// Fichier: frontend/components/Header.tsx

// On s'assure que la fonction est bien nommée "Header" et qu'elle est bien exportée.
export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h2 className="text-xl font-semibold">Évaluation des risques</h2>
      </div>
      <div>
        {/* On mettra un vrai bouton plus tard */}
        <p>Boutons d'action</p>
      </div>
    </header>
  );
}