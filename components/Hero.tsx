"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                >
                    Taste the <span className="text-primary">Universe</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                    Intergalactic flavors delivered at light speed. Experience the future of dining today.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                        Order Now <ArrowRight className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
                        View Menu
                    </button>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"
                ></motion.div>
            </div>
        </section>
    );
}
