import React from "react";

const DisplayHero = () => {
    return (
        <div 
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-start px-8 md:px-16 lg:px-32"
            style={{ backgroundImage: "url('/images/herodis.jpg')" }}
        >
            <div className="text-left text-white max-w-4xl">
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    Eliminate wasted ad spend <br />
                    with <span className="text-[#0E1F1C]">high performing</span> <br />
                    display advertising.
                </h1>
               <button className="bg-[#0E1F1C] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                    GET IN TOUCH
                </button>
            </div>
        </div>
    )
};

export default DisplayHero;
