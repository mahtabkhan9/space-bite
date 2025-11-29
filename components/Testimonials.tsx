"use client";

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Ahmad Khan",
        role: "Food Critic",
        content: "The most amazing burger I've had in this solar system. The flavors are truly out of this world!",
        rating: 5
    },
    {
        name: "Sarah Zaman",
        role: "Regular Customer",
        content: "Fast delivery and the packaging keeps everything perfectly hot. Highly recommended!",
        rating: 5
    },
    {
        name: "Jamshed Khalid",
        role: "Space Explorer",
        content: "A must-visit spot. The atmosphere is great and the staff is super friendly.",
        rating: 4
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See what our travelers are saying about their SpaceBite experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
