import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                "service_1i22b1i",
                "template_1kl1dkm",
                data,
                "6ONBrmZiSKIUUd9_K"
            );
            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded-xl p-6 space-y-4"
                >
                    {/* Name Field */}
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                },
                            })}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            placeholder="Your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block font-medium mb-1">Message</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            rows={5}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            placeholder="Your message"
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}



{/* <section
          id="contact"
          className="py-20 px-4 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="mb-6">We're here to help you grow. Send us a message and we'll get back to you shortly.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Send Message
            </Button>
          </form>
        </section> */}