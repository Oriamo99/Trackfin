
"use client"; 

import { useState } from "react"; 

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { MoralPersonFields } from "./MoralPersonFields";

export function VendorTab() {
  const [vendorData, setVendorData] = useState({
    type: '',
    firstname: '',
    lastname: '',
    companyName: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setVendorData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleTypeChange = (value: string) => {
    setVendorData(prevData => ({ ...prevData, type: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations du Vendeur</CardTitle>
        <CardDescription>
          Renseignez les détails concernant le vendeur.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">

        <div className="space-y-2">
          <Label>Type de personne</Label>
          <div className="grid grid-cols-2 gap-4">
            {/* Option Personne Physique */}
            <div>
              <input 
                type="radio" 
                id="physique" 
                name="vendorType"
                value="physique"
                className="sr-only peer"
                checked={vendorData.type === 'physique'}
                onChange={() => handleTypeChange('physique')}
              />
              <Label 
                htmlFor="physique"
                className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 p-4 cursor-pointer transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-lg hover:bg-gray-50"
              >
                <span className="text-3xl">👤</span>
                <span className="font-medium">Personne physique</span>
              </Label>
            </div>
            {/* Option Personne Morale */}
            <div>
              <input 
                type="radio" 
                id="morale" 
                name="vendorType"
                value="morale"
                className="sr-only peer"
                checked={vendorData.type === 'morale'}
                onChange={() => handleTypeChange('morale')}
              />
              <Label 
                htmlFor="morale"
                className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 p-4 cursor-pointer transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-lg hover:bg-gray-50"
              >
                <span className="text-3xl">🏢</span>
                <span className="font-medium">Personne morale</span>
              </Label>
            </div>
          </div>
        </div>

        {/ flex-col empile les lignes du formulaire */}
        <div className="flex flex-col gap-4">

          {/* Ligne pour Prénom et Nom */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstname">Prénom</Label>
              <Input 
                id="firstname"
                placeholder="Jean" 
                value={vendorData.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Nom</Label>
              <Input 
                id="lastname" 
                placeholder="Dupont" 
                value={vendorData.lastname}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Ligne conditionnelle pour la Raison Sociale */}
          {vendorData.type === 'morale' && (
            // Note : MoralPersonFields est déjà conçu pour prendre toute la largeur
            <MoralPersonFields 
              companyName={vendorData.companyName}
              onChange={handleInputChange}
            />
          )}

          {/* Ligne pour l'Adresse (pleine largeur) */}
          <div className="grid gap-2">
            <Label htmlFor="address">Adresse</Label>
            <Input 
              id="address"
              placeholder="10 rue de la Paix" 
              value={vendorData.address}
              onChange={handleInputChange}
            />
          </div>

          {/* Ligne pour Code Postal et Ville */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="zipCode">Code Postal</Label>
              <Input 
                id="zipCode"
                placeholder="75001" 
                value={vendorData.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">Ville</Label>
              <Input 
                id="city"
                placeholder="Paris" 
                value={vendorData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Ligne pour le Pays */}
          <div className="grid gap-2">
            <Label htmlFor="country">Pays</Label>
            <Input 
              id="country"
              placeholder="France" 
              value={vendorData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-6 rounded-md border bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">Données en mémoire (État) :</p>
          <pre className="text-sm text-gray-600">
            {JSON.stringify(vendorData, null, 2)}
          </pre>
        </div>

      </CardContent>
    </Card>
  );
}
