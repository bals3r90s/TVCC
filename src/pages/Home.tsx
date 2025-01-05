import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-100">
            {/* Header */}
            <header className="flex items-center justify-between bg-blue-600 text-white px-8 py-4 w-full">
                <div className="flex items-center">
                    <img
                        src="/TVCC_Logo.png"
                        alt="Vintage Car Community Logo"
                        className="h-12 mr-4"
                    />
                    <h1 className="text-xl font-bold">Vintage Car Community</h1>
                </div>
                <nav className="flex space-x-6">
                    <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Home
                    </a>
                    <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Ersatzteile
                    </a>
                    <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Mein Lagerplatz
                    </a>
                    <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Nachrichten
                    </a>
                    <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Konto
                    </a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-grow w-full px-8 py-12">
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
                <div className="bg-gray-200 rounded-lg p-8 shadow-lg w-full max-w-4xl">
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-col w-1/3">
                            <label className="text-sm font-medium mb-1">Deine Automarke</label>
                            <input
                                type="text"
                                value="Audi"
                                readOnly
                                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 cursor-not-allowed"
                            />
                        </div>
                        <div className="flex flex-col w-1/3">
                            <label className="text-sm font-medium mb-1">Lagerbedingungen</label>
                            <input
                                type="text"
                                value="24h Zugang"
                                readOnly
                                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 cursor-not-allowed"
                            />
                        </div>
                        <div className="flex flex-col w-1/3">
                            <label className="text-sm font-medium mb-1">Stadt</label>
                            <input
                                type="text"
                                value="35390 Gießen"
                                readOnly
                                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 cursor-not-allowed"
                            />
                        </div>
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
                        className="max-w-full h-auto "
                    />
                </div>
            </main>
        </div>
    );
}
