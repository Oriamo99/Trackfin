import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function AcquirerTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations de l'Acquéreur</CardTitle>
        <CardDescription>Renseignez les détails concernant l'acquéreur.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le formulaire de l'acquéreur sera ici.</p>
      </CardContent>
    </Card>
  );
}