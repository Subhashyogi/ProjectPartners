import React from 'react';
import { Button } from '../ui/Button';


const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full overflow-hidden py-20 px-4 md:px-8 text-center bg-gradient-to-br from-purple-600 to-blue-500 text-white opacity-0"
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Grow Your Brand with Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8">
                High-converting ads. Data-driven strategies. Real results.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
                Book a Free Consultation
            </Button>
        </section>
    );
}

export default Hero;
