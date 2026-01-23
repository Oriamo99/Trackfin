// Fichier: frontend/app/page.tsx

// On importe les composants
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 md:p-6">
          <MainContent />
        </main>
      </div>
    </Layout>
  );
}