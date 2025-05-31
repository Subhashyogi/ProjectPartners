import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonials } from "../data/testimonials";




export default function TestimonialsCarousel() {
    return (
        <section id="testimonials" className="py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    What Our Clients Say
                </motion.h2>

                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="max-w-xl"
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                className="bg-white shadow-md rounded-xl p-8"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                {t.video ? (
                                    <video
                                        src={t.video}
                                        controls 
                                        autoPlay
                                        className="w-full rounded-lg mb-4"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-16 h-16 rounded-full mx-auto mb-4"
                                        />
                                        <p className="italic text-lg mb-4">"{t.quote}"</p>
                                        <p className="font-semibold">
                                            {t.name} <span className="text-sm text-gray-500">— {t.role}</span>
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

{/* <section
          id="testimonials"
          className="py-20 px-4 bg-gray-50 text-center max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="italic mb-4">“Project Partners helped us scale our ad spend while increasing ROI. Amazing results!”</p>
                <p className="font-semibold">— Sarah L., E-commerce Owner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="italic mb-4">“Their consulting service gave us clarity and a roadmap to grow. Highly recommend.”</p>
                <p className="font-semibold">— Raj P., Startup Founder</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="italic mb-4">“Professional, responsive, and effective. Our brand visibility improved dramatically.”</p>
                <p className="font-semibold">— Linda M., Brand Manager</p>
              </CardContent>
            </Card>
          </div>
        </section> */}