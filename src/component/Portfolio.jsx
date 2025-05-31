import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Portfolio.css"; // Optional for custom styles
import AOS from "aos";
import "aos/dist/aos.css";

import { portfolioItems } from "../data/portfolioItems";

// Swiper modules
import { FreeMode, Pagination } from "swiper/modules";
import { Dialog } from "@headlessui/react";

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const openModal = (item) => {
        setActiveItem(item);
        setIsOpen(true);
    };

    return (
        <section id="portfolio" className="py-20 max-w-6xl mx-auto px-4" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>

            <Swiper
                modules={[FreeMode, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                freeMode={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="portfolio-swiper"
            >
                {portfolioItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="keen-slider__slide bg-white rounded-xl shadow p-4 flex flex-col h-[380px]"  // fixed height
                            data-aos="fade-right" data-aos-delay="100"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="mt-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 flex-grow overflow-hidden">
                                    {item.description}
                                </p>
                                <button
                                    onClick={() => openModal(item)}
                                    className="text-purple-600 font-medium hover:underline mt-auto"
                                >
                                    View Case Study
                                </button>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-lg">
                        <Dialog.Title className="text-xl font-semibold mb-2">
                            {activeItem?.title}
                        </Dialog.Title>
                        <img
                            src={activeItem?.image}
                            alt={activeItem?.title}
                            className="mb-4 rounded-md w-full h-40 object-cover"
                        />
                        <p className="text-gray-700">{activeItem?.details}</p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 inline-block text-sm text-purple-600 hover:underline"
                        >
                            Close
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </section>
    );
};

export default Portfolio;
