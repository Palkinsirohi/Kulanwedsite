import React from "react";

const EngagementSection = () => {
    return (
        <div 
            className="w-full min-h-screen bg-[#0E1F1C] text-white py-20 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row gap-12 items-start justify-between"
            style={{ backgroundColor: '#0E1F1C' }}
        >
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Activate display ads that <br />
                    stimulate engagement – <br />
                    <span className="text-[#FFD700]">not just impressions.</span>
                </h2>
                <p className="text-lg mb-8">
                    By leveraging our unique ad creatives with smart data use, IQengage delivers personalized, interactive, and chat-worthy experiences across various display formats, converting engagement into action.
                </p>
                <p className="text-lg mb-8">
                    We've spent over two decades building and refining our first-party audiences, giving us unparalleled insights and precision targeting that go far beyond generic third-party data.
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Next Level <span className="text-[#FFD700]">Attention.</span>
                </h3>
                <p className="text-lg">
                    In a world of passive scrolling and fleeting impressions, true brand engagement requires more than just capturing attention—it demands interaction. Our interactive ad solutions transform passive views into active attention through immersive, two-way conversations that put buyers in control of their ad experience.
                </p>
            </div>
            <div className="flex-grow">
                <img src="/images/displayphone.webp" alt="Mobile Engagement" className="w-full h-full max-h-[600px] object-contain" />
            </div>
        </div>
    );
};

export default EngagementSection;
