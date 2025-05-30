import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
const faqs = [
    {
        question: "What services does Project Partners offer?",
        answer: "We offer web development, UI/UX design, social media marketing, PPC advertising, and branding. SEO is not included currently.",
    },
    {
        question: "How do I get started with your services?",
        answer: "You can fill out our contact form, and our team will reach out within 24 hours to schedule a consultation.",
    },
    {
        question: "Can I customize a service package?",
        answer: "Absolutely! All our service packages are flexible and can be tailored to fit your business goals.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section data-aos="fade-in" id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4" >
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden" data-aos="fade-right" data-aos-delay={`${index + 1}00`}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium focus:outline-none hover:bg-gray-50"
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-purple-600" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`px-6 pb-4 text-gray-700 transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
