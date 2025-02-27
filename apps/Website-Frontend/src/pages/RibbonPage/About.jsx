import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/NavBar/Footer';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center text-white relative py-20">
                <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-600 mb-6">About Us</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Welcome to <strong>PitchDeck</strong>, the intelligent matchmaking platform designed to bridge the gap between startups and investors. We simplify the fundraising journey by connecting emerging startups with the right investors based on industry focus, funding stage, and business model.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Finding the perfect investor or startup can be challenging. That’s why <strong>PitchDeck</strong> leverages data-driven recommendations, real-time analytics, and AI-powered compatibility scores to streamline the process. Whether you're a startup looking for funding or an investor seeking high-potential opportunities, our platform ensures seamless and meaningful connections.
                    </p>
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Our vision is to revolutionize startup funding by making investment opportunities more accessible, transparent, and efficient. We aim to create a thriving ecosystem where innovation meets capital, enabling startups to scale faster and investors to discover promising ventures with confidence.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
