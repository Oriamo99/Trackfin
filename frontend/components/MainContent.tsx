// Fichier: frontend/components/MainContent.tsx

// On déclare ce composant comme un "Client Component" car il est interactif.
"use client";

// On importe les composants Tabs de Shadcn UI que nous venons d'installer
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// On importe le contenu de chaque onglet que nous venons de créer
import { VendorTab } from "./tabs/VendorTab";
import { AcquirerTab } from "./tabs/AcquirerTab";
import { FundsOriginTab } from "./tabs/FundsOriginTab";
import { SummaryTab } from "./tabs/SummaryTab";

export function MainContent() {
  return (
    <Tabs defaultValue="vendeur" className="w-full">
      {/* Ceci est la liste des boutons qui permettent de changer d'onglet */}
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="vendeur">Vendeur</TabsTrigger>
        <TabsTrigger value="acquereur">Acquéreur</TabsTrigger>
        <TabsTrigger value="fonds">Provenance des fonds</TabsTrigger>
        <TabsTrigger value="resume">Résumé</TabsTrigger>
      </TabsList>

      {/* Ici, on définit le contenu qui s'affiche pour chaque onglet */}
      <TabsContent value="vendeur">
        <VendorTab />
      </TabsContent>
      <TabsContent value="acquereur">
        <AcquirerTab />
      </TabsContent>
      <TabsContent value="fonds">
        <FundsOriginTab />
      </TabsContent>
      <TabsContent value="resume">
        <SummaryTab />
      </TabsContent>
    </Tabs>
  );
}