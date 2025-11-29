"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const menuItems = [
    {
        id: 1,
        name: "Nebula Burger",
        description: "Juicy beef patty with cosmic cheese, stardust onions, and our secret galaxy sauce.",
        price: "$14.99",
        image: "/images/burger.png",
        category: "Main Course"
    },
    {
        id: 2,
        name: "Supernova Pizza",
        description: "Exploding with flavor! Pepperoni, jalapeños, and extra cheese on a thin crust.",
        price: "$18.99",
        image: "/images/pizza.png",
        category: "Main Course"
    },
    {
        id: 3,
        name: "Galactic Garden Salad",
        description: "Fresh greens from the hydroponic gardens of Mars, topped with asteroid croutons.",
        price: "$12.99",
        image: "/images/salad.png",
        category: "Appetizer"
    }
];

export default function Menu() {
    return (
        <section id="menu" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interstellar Menu</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our selection of dishes prepared with ingredients from across the universe.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                                    {item.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{item.category}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{item.description}</p>
                                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                    <ShoppingBag className="h-5 w-5" />
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="text-primary font-semibold hover:text-orange-600 transition-colors flex items-center justify-center gap-2 mx-auto">
                        View Full Menu
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
