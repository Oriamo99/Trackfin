import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function SummaryTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Résumé de l'analyse du dossier</CardTitle>
        <CardDescription>Renseignez les détails concernant le résumé de l'analyse.</CardDescription>
      </CardHeader>
    </Card>
  );
}