import { Link } from '@inertiajs/react';
import Hero from './components/Hero';
import Business from './components/Business';
import Stats from './components/Stats';
import Process from './components/Process';
import KeyFeatures from './components/KeyFeatures';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

export default function WelcomeIndex({ canLogin }) {
    return (
        <div className="overflow-x-hidden">
            {/* Navigation */}
            <nav className="bg-gradient-to-br from-[#667eea] to-[#764ba2] sticky top-0 z-30 py-3">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <a className="flex items-center gap-2 text-white font-bold text-lg" href="/">
                        <div className="w-10 h-10 bg-white/30 rounded-full shrink-0"></div>
                        <span>A-an</span>
                    </a>
                    <div className="hidden md:flex items-center gap-6">
                        <a className="text-white/90 hover:text-white text-sm" href="#features">Features</a>
                        <a className="text-white/90 hover:text-white text-sm" href="#pricing">Pricing</a>
                        <a className="text-white/90 hover:text-white text-sm" href="#about">About</a>
                        <a className="text-white/90 hover:text-white text-sm" href="#resources">Resources</a>
                        <a className="text-white/90 hover:text-white text-sm" href="#solutions">Solutions</a>
                    </div>
                    {canLogin && (
                        <Link href="login" className="border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-purple-700 transition-colors">Sign In</Link>
                    )}
                </div>
            </nav>

            <Hero />
            <Business />
            <Stats />
            <Process />
            <KeyFeatures />
            <CTA />
            <Testimonials />
            <DownloadApp />
            <Footer />
        </div>
    );
}
