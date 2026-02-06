<template>
    <div class="landing-page">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark py-3">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="/">
                    <div class="logo-circle me-2"></div>
                    <span class="fw-bold">A-an</span>
                </a>
                <div class="d-flex align-items-center w-100">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
                        <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#resources">Resources</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Solutions</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Restaurant</a></li>
                                <li><a class="dropdown-item" href="#">Retail</a></li>
                                <li><a class="dropdown-item" href="#">Enterprise</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-flex gap-2">
                        <Link  href="login" class="btn btn-outline-light">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
       <Hero/>

        <!-- Business Section -->
       <Business/>

        <!-- Stats Section -->
        <Stats/>

        <!-- Process Section -->
        <Process/>

        <!-- Key Features Section -->
       <KeyFeatures/>

        <!-- CTA Section -->
       <CTA/>

        <!-- Testimonials Section -->
       <Testimonials/>

        <!-- Download App Section -->
        <DownloadApp/>
        <!-- Footer -->
        <Footer/>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import Hero from './components/Hero.vue';
import Business from './components/Business.vue';
import Stats from './components/Stats.vue';
import Process from './components/Process.vue';
import KeyFeatures from './components/KeyFeatures.vue';
import CTA from './components/CTA.vue';
import Testimonials from './components/Testimonials.vue';
import DownloadApp from './components/DownloadApp.vue';
import Footer from './components/Footer.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    auth: Object,
});
</script>

<style scoped>
.landing-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Navigation */
.navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo-circle {
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
}

.hero-image-container {
    position: relative;
    min-height: 400px;
}

.pos-terminal-mockup {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    transform: perspective(1000px) rotateY(-15deg);
}

.pos-terminal-mockup .screen {
    background: white;
    height: 300px;
    border-radius: 10px;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Stats Cards */
.stat-card {
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.bg-pink {
    background-color: #fce4ec !important;
}

.bg-mint {
    background-color: #d4f1d4 !important;
}

/* Feature Cards */
.feature-card {
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* Process Section */
.process-icon {
    font-size: 2rem;
    transition: all 0.3s ease;
}

.process-icon:hover {
    transform: scale(1.1);
}

/* Chart Placeholder */
.chart-placeholder {
    min-height: 100px;
}

.bar {
    border-radius: 4px 4px 0 0;
    transition: all 0.3s ease;
}

.feature-card:hover .bar {
    opacity: 0.8;
}

/* Download Section */
.download-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
}

/* Footer */
.footer-section {
    background-color: #1a1a2e;
}

.footer-section a:hover {
    color: #667eea !important;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-section {
        padding: 60px 0;
    }
    
    .pos-terminal-mockup {
        transform: none;
    }
    
    .display-3 {
        font-size: 2.5rem;
    }
    
    .display-5 {
        font-size: 2rem;
    }
}

/* Smooth scroll */
html {
    scroll-behavior: smooth;
}

/* Button animations */
.btn {
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
