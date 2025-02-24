'use client';
import { useState } from "react";

export default function Page2() {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(""); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter + 1);
        setError(""); 
    };

    const handleSubmitNeg = (e: React.FormEvent) => {
        e.preventDefault();
        if (counter > 0) {
            setCounter(counter - 1);
            setError(""); 
        } else {
            setError("El contador no puede bajar de cero"); 
        }
    };

    return (
        <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>

            
            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                    Incrementar número
                </button>
            </form>

            <form onSubmit={handleSubmitNeg}>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition-colors"
                >
                    Disminuir número
                </button>
            </form>
        </main>
    );
}
