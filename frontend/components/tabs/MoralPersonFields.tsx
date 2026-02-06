import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type MoralPersonFieldsProps = {
  companyName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// On utilise "export function" pour pouvoir call la function dans MainContent.tsx
export function MoralPersonFields({ companyName, onChange }: MoralPersonFieldsProps) {
  return (
    <div className="col-span-3 grid gap-2">
      <Label htmlFor="companyName">Raison Sociale</Label>
      <Input
        id="companyName"
        placeholder="Algorythmes SAS"
        value={companyName}
        onChange={onChange}
      />
    </div>
  );
}
