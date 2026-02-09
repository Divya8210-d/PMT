import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10 font-montserrat">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-wide">
                            PINNACLE <span className="text-orange-500">MINING</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Smart Technology for Safer & Smarter Mining Operations. We enable efficient, compliant, and future-ready operations.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="https://www.linkedin.com/company/pmt-bharat/?viewAsMember=true" icon={<Linkedin size={20} />} />
                            <SocialLink href="https://www.instagram.com/pmt_bharat/" icon={<Instagram size={20} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-orange-500">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><FooterLink href="/">Home</FooterLink></li>
                            <li><FooterLink href="/about">About Us</FooterLink></li>
                            <li><FooterLink href="/oems">Services</FooterLink></li>
                            <li><FooterLink href="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>



                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-orange-500">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex gap-3 items-start">
                                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>Dhanbad, Jharkhand, India</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                                <span className="text-gray-300 hover:text-white transition-colors">+91 6200224594</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                                <span className="text-gray-300 hover:text-white transition-colors">pinnacledepth@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Pinnacle Mining Technologies Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="hover:text-orange-500 transition-colors duration-200 block"
        >
            {children}
        </Link>
    );
}
