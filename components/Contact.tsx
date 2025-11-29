"use client";

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Launch?</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Book a table or order online. We're ready to serve you the best food in the galaxy.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">1</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Choose your meal</h3>
                                    <p className="text-gray-600 text-sm">Browse our intergalactic menu</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">2</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Place your order</h3>
                                    <p className="text-gray-600 text-sm">Online or by phone</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">3</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Enjoy!</h3>
                                    <p className="text-gray-600 text-sm">Rocket fast delivery to your door</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
