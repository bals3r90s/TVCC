import Navbar from "@/components/ui/navbar.tsx";
import React, { useState } from "react";

export default function Home() {
    const [selectedAutomarke, setSelectedAutomarke] = useState([]);
    const [selectedLagerbedingungen, setSelectedLagerbedingungen] = useState([]);
    const [selectedStadt, setSelectedStadt] = useState([]);

    const [dropdowns, setDropdowns] = useState({
        automarke: false,
        lagerbedingungen: false,
        stadt: false,
    });

    const automarkenOptions = ["Audi", "BMW", "Mercedes", "Volkswagen"];
    const lagerbedingungenOptions = ["24h Zugang", "Klimatisiert", "Videoüberwachung", "Glasbox"];
    const stadtOptions = ["Gießen", "Frankfurt", "Berlin", "Hamburg"];

    const toggleDropdown = (field) => {
        setDropdowns((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const toggleSelection = (option, selectedList, setSelectedList) => {
        if (selectedList.includes(option)) {
            setSelectedList(selectedList.filter((item) => item !== option));
        } else {
            setSelectedList([...selectedList, option]);
        }
    };

    const closeAllDropdowns = () => {
        setDropdowns({
            automarke: false,
            lagerbedingungen: false,
            stadt: false,
        });
    };

    return (
        <div className="flex flex-col w-full h-screen">
            <Navbar />

            {/* Main Content */}
            <main
                className="flex flex-col items-center justify-center flex-grow w-full px-8 py-12 bg-gray-100"
                onClick={closeAllDropdowns} // Schließt alle Dropdowns, wenn außerhalb geklickt wird
            >
                {/* Begrüßung */}
                <h2 className="text-3xl font-semibold mb-4 text-center">
                    Willkommen bei der{" "}
                    <a href="#" className="text-blue-600 underline hover:text-blue-700">
                        Vintage Car Community!
                    </a>
                </h2>
                <h3 className="text-lg font-medium mb-8 text-center">
                    Finde noch heute den{" "}
                    <a href="#" className="text-blue-600 underline hover:text-blue-700">
                        perfekten Lagerplatz
                    </a>{" "}
                    für dein Fahrzeug
                </h3>

                {/* Suchleiste */}
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg w-full max-w-4xl">
                    <div className="flex items-center space-x-4">
                        {/* Automarke Dropdown */}
                        <div className="flex flex-col w-1/3 relative">
                            <label className="text-sm font-medium mb-1">Deine Automarke</label>
                            <button
                                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 text-left"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown("automarke");
                                }}
                            >
                                {selectedAutomarke.length > 0
                                    ? selectedAutomarke.join(", ")
                                    : "Bitte wählen"}
                            </button>
                            {dropdowns.automarke && (
                                <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-2 z-10 max-h-48 overflow-y-auto">
                                    {automarkenOptions.map((marke) => (
                                        <div
                                            key={marke}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedAutomarke.includes(marke)}
                                                onChange={() =>
                                                    toggleSelection(marke, selectedAutomarke, setSelectedAutomarke)
                                                }
                                                className="mr-2"
                                            />
                                            <label>{marke}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Lagerbedingungen Dropdown */}
                        <div className="flex flex-col w-1/3 relative">
                            <label className="text-sm font-medium mb-1">Lagerbedingungen</label>
                            <button
                                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 text-left"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown("lagerbedingungen");
                                }}
                            >
                                {selectedLagerbedingungen.length > 0
                                    ? selectedLagerbedingungen.join(", ")
                                    : "Bitte wählen"}
                            </button>
                            {dropdowns.lagerbedingungen && (
                                <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-2 z-10 max-h-48 overflow-y-auto">
                                    {lagerbedingungenOptions.map((bedingung) => (
                                        <div
                                            key={bedingung}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedLagerbedingungen.includes(bedingung)}
                                                onChange={() =>
                                                    toggleSelection(
                                                        bedingung,
                                                        selectedLagerbedingungen,
                                                        setSelectedLagerbedingungen
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            <label>{bedingung}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Stadt Dropdown */}
                        <div className="flex flex-col w-1/3 relative">
                            <label className="text-sm font-medium mb-1">Stadt</label>
                            <button
                                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 text-left"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown("stadt");
                                }}
                            >
                                {selectedStadt.length > 0
                                    ? selectedStadt.join(", ")
                                    : "Bitte wählen"}
                            </button>
                            {dropdowns.stadt && (
                                <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-2 z-10 max-h-48 overflow-y-auto">
                                    {stadtOptions.map((stadt) => (
                                        <div
                                            key={stadt}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedStadt.includes(stadt)}
                                                onChange={() =>
                                                    toggleSelection(stadt, selectedStadt, setSelectedStadt)
                                                }
                                                className="mr-2"
                                            />
                                            <label>{stadt}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Suchen Button */}
                    <div className="flex justify-end mt-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                            <span className="text-lg">🔍</span>
                        </button>
                    </div>
                </div>

                {/* Fahrzeug Bild */}
                <div className="mt-12">
                    <img
                        src="/home-car.png"
                        alt="Vintage Car"
                        className="max-w-full h-auto"
                    />
                </div>
            </main>
        </div>
    );
}
