import { Rocket, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Rocket className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl tracking-tight">SpaceBite</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Experience the taste of the galaxy. Fresh ingredients, cosmic flavors.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>123 Moon City, Mars, Solar System, Milky Way Galaxy, Universe 964A8</li>
                            <li>contact@spacebite.com</li>
                            <li>+91 9876543210</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} SpaceBite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
