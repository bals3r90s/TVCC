import React from "react";
import Navbar from "@/components/ui/navbar"; // Pfad zur Navbar-Komponente anpassen

export default function LagerOverview() {
    const lagerplaetze = [
        {
            id: 1,
            name: "Georges Lagerplatz",
            standort: "Gießen",
            lagerbedingungen: ["Klimatisiert", "24h Service", "Glasbox"],
            freiePlaetze: {
                standard: 18,
                premium: 12,
                luxusDeluxe: 5,
            },
            image: "/lagerplatz-image.jpg",
        },
        {
            id: 2,
            name: "Sophies Lagerplatz",
            standort: "Frankfurt",
            lagerbedingungen: ["Videoüberwachung", "24h Zugang", "Heizung"],
            freiePlaetze: {
                standard: 10,
                premium: 8,
                luxusDeluxe: 2,
            },
            image: "/lagerplatz-image.jpg",
        },
        {
            id: 3,
            name: "Max' Lagerplatz",
            standort: "Berlin",
            lagerbedingungen: ["Wachdienst", "Schlüsselservice", "Klimaanlage"],
            freiePlaetze: {
                standard: 20,
                premium: 15,
                luxusDeluxe: 10,
            },
            image: "/lagerplatz-image.jpg",
        },
    ];

    return (
        <div className="flex flex-col w-full  min-h-screen bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex flex-col items-center w-full px-8 py-12">
                {/* Titel */}
                <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">
                    Die Lagerplätze der Vintage Car Community!
                </h2>

                {/* Lagerplatz-Karten */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {lagerplaetze.map((lagerplatz) => (
                        <div
                            key={lagerplatz.id}
                            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={lagerplatz.image}
                                alt={lagerplatz.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-blue-600">
                                    {lagerplatz.name}
                                </h3>
                                <p className="text-sm text-gray-700 mt-2">
                                    Standort: {lagerplatz.standort}
                                </p>
                                <p className="text-sm text-gray-700 mt-2">Lagerbedingungen:</p>
                                <ul className="text-sm text-gray-700 ml-4 list-disc">
                                    {lagerplatz.lagerbedingungen.map((bedingung, index) => (
                                        <li key={index}>{bedingung}</li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-700 mt-4">Freie Lagerplätze:</p>
                                <ul className="text-sm text-gray-700 ml-4">
                                    <li>Standard: {lagerplatz.freiePlaetze.standard}</li>
                                    <li>Premium: {lagerplatz.freiePlaetze.premium}</li>
                                    <li>Luxus-Deluxe: {lagerplatz.freiePlaetze.luxusDeluxe}</li>
                                </ul>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 flex items-center justify-center hover:bg-blue-700">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
