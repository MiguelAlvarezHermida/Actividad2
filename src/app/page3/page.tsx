'use client';
import { useState } from "react";
import Rectangle from "../Components/Rectangle";

export default function Page3(){

    const [colors, setColor] = useState("gray");

    const handleSubmitGreen = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("green");
    };
    const handleSubmitBlue = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("blue");
    };const handleSubmitRed = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("red");
    };const handleSubmitPurple = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("purple");
    };
    
    return(
<div className="flex flex-col min-h-screen items-center justify-center gap-4"><Rectangle color = {colors} />

<main className="grid grid-cols-2 gap-0">
    <form onSubmit={handleSubmitGreen}>
                <button
                    type="submit"
                    className="w-20 h-20 bg-green-500"
                >
                    Cambiar color a verde
                </button>
            </form>
    <form onSubmit={handleSubmitBlue}>
                <button
                    type="submit"
                    className="w-20 h-20 bg-blue-500"
                >
                    Cambiar color a azul
                </button>
            </form>
    <form onSubmit={handleSubmitRed}>
                <button
                    type="submit"
                    className="w-20 h-20 bg-red-500"
                >
                    Cambiar color a rojo
                </button>
            </form>
    <form onSubmit={handleSubmitPurple}>
                <button
                    type="submit"
                   className="w-20 h-20 bg-purple-500"
                >
                    Cambiar color a morado
                </button>
            </form>



</main>
</div>
    );
}