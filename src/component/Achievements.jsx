import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCounter from './AnimatedCounter';
import { LucideAward, LucideCheckCircle, LucideUsers } from 'lucide-react';
const Achievements = () => {
    return (
        <section id="stats" className="py-20 px-4 max-w-6xl mx-auto text-center" data-aos="zoom-in">
                  <h2 className="text-3xl font-bold mb-12" data-aos="zoom-out">Our Achievements</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <AnimatedCounter target={1500} duration={3000} Icon={LucideUsers} data-aos="zoom-in" data-aos-delay="100" />
                      <p className="mt-2 text-lg font-medium">Happy Clients</p>
                    </div>
                    <div>
                        <AnimatedCounter target={320} duration={2500} Icon={LucideCheckCircle} data-aos="zoom-in" data-aos-delay="200" />
                      <p className="mt-2 text-lg font-medium">Projects Completed</p>
                    </div>
                    <div>
                        <AnimatedCounter target={50} duration={2000} Icon={LucideAward} data-aos="zoom-in" data-aos-delay="300" />
                      <p className="mt-2 text-lg font-medium">Awards Won</p>
                    </div>
                  </div>
                </section>
    );
}

export default Achievements;
