import React from "react";

export default function Navbar() {
    return (
        <header className="w-full bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src="/TVCC_Logo.png" alt="Vintage Car Community Logo" className="h-10" />
                    <h1 className="text-xl font-bold">Vintage Car Community</h1>
                </div>
                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <a href="/" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Home
                    </a>
                    <a href="/Ersatzteile"
                       className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Ersatzteile
                    </a>
                    <a href="/mein-lagerplatz"
                       className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Mein Lagerplatz
                    </a>
                    <a href="/nachrichten" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Nachrichten
                    </a>
                    <a href="/konto" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:shadow-md">
                        Konto
                    </a>

                </nav>
            </div>
        </header>
    );
}
