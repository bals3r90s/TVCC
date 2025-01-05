import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="flex h-screen">
            {/* Linke Seite mit Text und Formular */}
            <div className="flex flex-col justify-center px-16 w-1/2 bg-white">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">
                    Finde den perfekten Ort für dein Auto
                </h1>
                <p className="text-gray-700 mb-8">
                    Willkommen zurück! Bitte log dich in deinen Account ein.
                </p>
                <form className="space-y-6">
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="car_fan@tvcc.de"
                            className="w-full px-4 py-2 border rounded-md focus:outline-blue-500"
                        />
                    </div>
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 border rounded-md focus:outline-blue-500"
                        />
                    </div>
                    {/* Remember Me und Forgot Password */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                                Remember Me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                    {/* Login Button */}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md">
                        Login
                    </Button>
                </form>
                {/* Sign Up */}
                <p className="text-sm text-gray-600 mt-6">
                    Noch keinen Account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>

            {/* Rechte Seite mit Bild */}
            <div className="flex w-1/2 bg-gray-100 items-center justify-center">
                <img
                    src="public/loginpage-car.png"
                    alt="Vintage Car"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
}
