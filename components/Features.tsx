"use client";

import { Zap, Leaf, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Rocket Fast Delivery",
        description: "We deliver your food at warp speed, ensuring it arrives hot and fresh every time."
    },
    {
        icon: <Leaf className="h-8 w-8 text-primary" />,
        title: "Cosmic Ingredients",
        description: "Sourced from the finest farms across the galaxy, our ingredients are 100% organic."
    },
    {
        icon: <Star className="h-8 w-8 text-primary" />,
        title: "Stellar Service",
        description: "Our crew is dedicated to providing you with an out-of-this-world dining experience."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SpaceBite?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're not just a restaurant; we're a culinary journey through the stars.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
