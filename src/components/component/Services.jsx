import React from 'react';
import { Card, CardContent } from '../ui/Card';
import AOS from "aos";
import "aos/dist/aos.css";
import { LucideBarChart3, LucideMegaphone, LucideTarget, LucideUserCheck } from 'lucide-react';

const Services = () => {
    return (
        <section
                  id="services"
                  className="py-20 px-4 max-w-6xl mx-auto text-center opacity-0"
                  data-aos="fade-up"
                >
                  <h2 className="text-3xl font-bold mb-12" data-aos="zoom-in">Our Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <Card data-aos="fade-up" data-aos-delay="100">
                      <CardContent className="flex flex-col items-center p-6">
                        <LucideMegaphone size={40} className="text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Social Media Ads</h3>
                        <p>Targeted ads on Facebook, Instagram, and TikTok.</p>
                      </CardContent>
                    </Card>
                    <Card data-aos="fade-up" data-aos-delay="200">
                      <CardContent className="flex flex-col items-center p-6">
                        <LucideBarChart3 size={40} className="text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                        <p>Track performance and optimize every campaign.</p>
                      </CardContent>
                    </Card>
                    <Card data-aos="fade-up" data-aos-delay="300">
                      <CardContent className="flex flex-col items-center p-6">
                        <LucideTarget size={40} className="text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
                        <p>Convert clicks into loyal customers through funnels.</p>
                      </CardContent>
                    </Card>
                    <Card data-aos="fade-up" data-aos-delay="400">
                      <CardContent className="flex flex-col items-center p-6">
                        <LucideUserCheck size={40} className="text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                        <p>Strategy sessions tailored to your business goals.</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
    );
}

export default Services;
