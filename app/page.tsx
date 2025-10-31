import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="flex flex-col items-center mb-6 space-y-5">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          Tableau de Bord
        </h1>
        <div className="w-full flex flex-col space-y-4 ">
          <Button
            asChild
            className="bg-blue-600 text-2xl hover:bg-blue-700 text-white font-semibold py-6 px-4 rounded"
          >
            <Link href="/entree">Entrée Véhicule</Link>
          </Button>

          <Input className="" placeholder="Entre matricule" />
        </div>
        <Card className="w-full">
          <CardContent className="flex text-2xl items-center justify-center text-gray-600 gap-2">
            <p>Occupation actuelle </p>
            <span>210/300</span>
          </CardContent>
        </Card>
        <div className="w-full flex flex-col space-y-5">
          <h2 className="text-2xl text-gray-500 font-normal">
            Compteur véhicule
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
            <Card>
              <CardContent className="flex text-2xl items-center justify-center text-gray-600 gap-2">
                <p>Autos:</p>
                <span>50</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex text-2xl items-center justify-center text-gray-600 gap-2">
                <p>Motos:</p>
                <span>10</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex text-2xl items-center justify-center text-gray-600 gap-2">
                <p>Bus:</p>
                <span>20</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex text-2xl items-center justify-center text-gray-600 gap-2">
                <p>Canion:</p>
                <span>15</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
