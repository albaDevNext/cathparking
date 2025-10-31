import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="flex flex-col items-center mb-6 space-y-10">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          Formulaire Entree
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
          <Button>Auto</Button>
          <Button>Moto</Button>
          <Button>Bus</Button>
          <Button>Canion</Button>
        </div>
        <div className="w-full flex gap-2">
          <Input placeholder="ticket" />
          <Button>Générer Ticket</Button>
        </div>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 w-full text-2xl text-white font-semibold py-6 px-4  "
        >
          <Link href="/sortie">Valider l'Entrée</Link>
        </Button>
      </div>
    </div>
  );
}
