import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <Card className=" flex flex-col items-center justify-center ">
        <CardHeader>
          <CardTitle>
            <span>Type:</span>
            <span>Canion</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Date et Heure d'entrée :19/10/2025 19h00</p>
          <p>date et Heure actuelle : 20/10/2025 7h30 </p>
          <p>Nombre jour : 1</p>
          <p>Total payer : 1500fc</p>
        </CardContent>
        <CardFooter>
          <Button>Payé & Sortie</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
