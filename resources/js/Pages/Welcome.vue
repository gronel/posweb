<template>
    <div class="landing-page">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark py-3">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="/">
                    <div class="logo-circle me-2"></div>
                    <span class="fw-bold">Quip</span>
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
                        <template>
                            <Link v-if="canLogin" :href="route('login')" class="btn btn-outline-light">Sign In</Link>
                            <Link v-if="canRegister" :href="route('register')" class="btn btn-light">Get Started</Link>
                        </template>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-section text-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="badge bg-light bg-opacity-25 text-white mb-3 px-3 py-2">
                            <span class="me-2">⭐</span> We Provide the Best POS System Solutions
                        </div>
                        <h1 class="display-3 fw-bold mb-4">Our Advanced POS Software Solutions</h1>
                        <p class="lead mb-4 opacity-75">Streamline your business operations with our cutting-edge point of sale system. Fast, secure, and reliable.</p>
                        <div class="d-flex gap-3 mb-4">
                            <button class="btn btn-light btn-lg px-4">
                                <span class="me-2">▶</span> Get Started Now
                            </button>
                            <button class="btn btn-outline-light btn-lg px-4">
                                <span class="me-2">▶</span> See Demo
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-image-container">
                            <div class="pos-terminal-mockup">
                                <div class="screen"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Business Section -->
        <section class="business-section py-5">
            <div class="container">
                <div class="text-center mb-5">
                    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">WHY CHOOSE US</span>
                    <h2 class="display-5 fw-bold">Business With Our Cutting<br>Edge Quip POS Software</h2>
                </div>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="feature-card p-4 bg-light rounded-4 h-100">
                            <div class="d-flex align-items-center mb-3">
                                <div class="icon-box bg-warning bg-opacity-25 text-warning p-3 rounded-3 me-3">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                                    </svg>
                                </div>
                                <h5 class="mb-0">Order Management Simplified</h5>
                            </div>
                            <p class="text-muted">Efficiently manage all your orders in one place with real-time tracking and updates.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-card p-4 bg-light rounded-4 h-100">
                            <div class="d-flex align-items-center mb-3">
                                <div class="icon-box bg-success bg-opacity-25 text-success p-3 rounded-3 me-3">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </div>
                                <h5 class="mb-0">Inventory Tracking</h5>
                            </div>
                            <p class="text-muted">Keep track of your stock levels in real-time and get alerts for low inventory.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section py-5 bg-light">
            <div class="container">
                <div class="row g-4 text-center">
                    <div class="col-md-3">
                        <div class="stat-card bg-pink rounded-4 p-4">
                            <h2 class="display-4 fw-bold mb-2">6M+</h2>
                            <p class="text-muted mb-0">Total POS User</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card bg-mint rounded-4 p-4">
                            <h2 class="display-4 fw-bold mb-2">5M+</h2>
                            <p class="text-muted mb-0">5 Star Received</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card bg-warning bg-opacity-25 rounded-4 p-4">
                            <h2 class="display-4 fw-bold mb-2">35%</h2>
                            <p class="text-muted mb-0">Increase Accuracy</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card bg-info bg-opacity-25 rounded-4 p-4">
                            <h2 class="display-4 fw-bold mb-2">Two</h2>
                            <p class="text-muted mb-0">People User Type</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="process-section py-5">
            <div class="container">
                <div class="text-center mb-5">
                    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">HOW IT WORKS</span>
                    <h2 class="display-5 fw-bold">Simple To Process To Start</h2>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="text-center">
                            <div class="process-icon bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                                <span class="fs-3 fw-bold">1</span>
                            </div>
                            <h5 class="fw-bold mb-3">Quick Registration</h5>
                            <p class="text-muted">Sign up in minutes and get instant access to our powerful POS system.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center">
                            <div class="process-icon bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                                <span class="fs-3 fw-bold">2</span>
                            </div>
                            <h5 class="fw-bold mb-3">Set Up Your Store</h5>
                            <p class="text-muted">Configure your products, pricing, and payment methods easily.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center">
                            <div class="process-icon bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                                <span class="fs-3 fw-bold">3</span>
                            </div>
                            <h5 class="fw-bold mb-3">Customize Your Solution</h5>
                            <p class="text-muted">Tailor the system to match your specific business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features Section -->
        <section class="features-section py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">POWERFUL FEATURES</span>
                    <h2 class="display-5 fw-bold">Key Features Of Quip POS</h2>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card bg-white p-4 rounded-4 h-100 shadow-sm">
                            <h6 class="text-primary mb-3">Sales-Driven Decision-Making</h6>
                            <p class="text-muted small mb-3">Make informed business decisions with comprehensive analytics and reporting.</p>
                            <div class="chart-placeholder bg-info bg-opacity-10 rounded-3 p-4">
                                <div class="d-flex justify-content-around align-items-end" style="height: 120px;">
                                    <div class="bar bg-info" style="width: 30px; height: 40%;"></div>
                                    <div class="bar bg-info" style="width: 30px; height: 80%;"></div>
                                    <div class="bar bg-info" style="width: 30px; height: 60%;"></div>
                                    <div class="bar bg-info" style="width: 30px; height: 90%;"></div>
                                    <div class="bar bg-info" style="width: 30px; height: 50%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card bg-white p-4 rounded-4 h-100 shadow-sm">
                            <h6 class="text-primary mb-3">Payment Processing</h6>
                            <p class="text-muted small mb-3">Accept all major payment methods securely and efficiently.</p>
                            <div class="chart-placeholder bg-warning bg-opacity-10 rounded-3 p-4">
                                <div class="d-flex justify-content-around align-items-end" style="height: 120px;">
                                    <div class="bar bg-warning" style="width: 30px; height: 70%;"></div>
                                    <div class="bar bg-warning" style="width: 30px; height: 85%;"></div>
                                    <div class="bar bg-warning" style="width: 30px; height: 65%;"></div>
                                    <div class="bar bg-warning" style="width: 30px; height: 95%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card bg-white p-4 rounded-4 h-100 shadow-sm">
                            <h6 class="text-primary mb-3">Customer Loyalty</h6>
                            <p class="text-muted small mb-3">Build lasting relationships with integrated loyalty programs.</p>
                            <div class="chart-placeholder bg-success bg-opacity-10 rounded-3 p-4">
                                <div class="d-flex justify-content-around align-items-end" style="height: 120px;">
                                    <div class="bar bg-success" style="width: 25px; height: 50%;"></div>
                                    <div class="bar bg-success" style="width: 25px; height: 70%;"></div>
                                    <div class="bar bg-success" style="width: 25px; height: 90%;"></div>
                                    <div class="bar bg-success" style="width: 25px; height: 60%;"></div>
                                    <div class="bar bg-success" style="width: 25px; height: 80%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card bg-white p-4 rounded-4 h-100 shadow-sm">
                            <h6 class="text-primary mb-3">Inventory Control</h6>
                            <p class="text-muted small mb-3">Monitor stock levels and automate reordering processes.</p>
                            <div class="chart-placeholder bg-danger bg-opacity-10 rounded-3 p-4" style="height: 120px;"></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card bg-white p-4 rounded-4 h-100 shadow-sm">
                            <h6 class="text-primary mb-3">Staff Management</h6>
                            <p class="text-muted small mb-3">Track employee performance and manage schedules effectively.</p>
                            <div class="chart-placeholder bg-info bg-opacity-10 rounded-3 p-4" style="height: 120px;"></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card bg-white p-4 rounded-4 h-100 shadow-sm">
                            <h6 class="text-primary mb-3">Multi-Location</h6>
                            <p class="text-muted small mb-3">Manage multiple store locations from a single dashboard.</p>
                            <div class="chart-placeholder bg-primary bg-opacity-10 rounded-3 p-4" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section py-5">
            <div class="container">
                <div class="row align-items-center g-4">
                    <div class="col-md-4">
                        <div class="cta-image bg-light rounded-4 p-5 text-center">
                            <div class="pos-device"></div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">QUIP POS SYSTEM</span>
                        <h2 class="display-5 fw-bold mb-4">Business with Our All in-One POS System</h2>
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <div class="icon-box bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-2">Fast Checkout</h6>
                                        <p class="text-muted small">Speed up transactions and reduce wait times.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <div class="icon-box bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-2">Live Updates</h6>
                                        <p class="text-muted small">Get real-time updates on sales and inventory.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <div class="icon-box bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-2">Secure Payments</h6>
                                        <p class="text-muted small">PCI-compliant payment processing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <div class="icon-box bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-2">Online Tools</h6>
                                        <p class="text-muted small">Access your business data anywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">OUR TESTIMONIALS</span>
                    <h2 class="display-5 fw-bold">Our Satisfied Client Says</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="testimonial-card bg-white p-5 rounded-4 shadow-sm">
                            <div class="d-flex align-items-start mb-4">
                                <div class="avatar bg-primary rounded-circle me-3" style="width: 80px; height: 80px;"></div>
                                <div>
                                    <div class="text-warning mb-2">★★★★★</div>
                                    <p class="text-muted mb-3">"The Quip POS system has transformed our business operations. It's user-friendly, fast, and reliable. Customer support is excellent and always ready to help. Highly recommended!"</p>
                                    <h6 class="fw-bold mb-0">Sarah Johnson</h6>
                                    <small class="text-muted">Restaurant Owner</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Download App Section -->
        <section class="download-section py-5 text-white">
            <div class="container">
                <div class="text-center mb-5">
                    <span class="badge bg-light bg-opacity-25 text-white px-3 py-2 mb-3">DOWNLOAD NOW</span>
                    <h2 class="display-5 fw-bold mb-4">Download Your App<br>Available Now!</h2>
                    <p class="lead mb-4 opacity-75">Get started with our mobile app for iOS and Android</p>
                    <div class="d-flex gap-3 justify-content-center">
                        <a href="#" class="btn btn-dark btn-lg px-4">
                            <span class="me-2">🍎</span> App Store
                        </a>
                        <a href="#" class="btn btn-light btn-lg px-4">
                            <span class="me-2">📱</span> Google Play
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer-section bg-dark text-light py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3">
                        <div class="d-flex align-items-center mb-3">
                            <div class="logo-circle me-2"></div>
                            <span class="fw-bold fs-5">Quip</span>
                        </div>
                        <p class="text-muted small">Modern POS solutions for modern businesses. Built with Laravel, Vue.js, and Inertia.js.</p>
                        <div class="d-flex gap-2 mt-3">
                            <a href="#" class="btn btn-sm btn-outline-light rounded-circle" style="width: 40px; height: 40px;">f</a>
                            <a href="#" class="btn btn-sm btn-outline-light rounded-circle" style="width: 40px; height: 40px;">𝕏</a>
                            <a href="#" class="btn btn-sm btn-outline-light rounded-circle" style="width: 40px; height: 40px;">in</a>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="fw-bold mb-3">Product</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Features</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Pricing</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Demo</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Updates</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="fw-bold mb-3">Support</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Help Center</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Contact Us</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">FAQ</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Documentation</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="fw-bold mb-3">Resources</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Blog</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Newsletter</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Events</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Webinars</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h6 class="fw-bold mb-3">Company</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">About Us</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Careers</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Partners</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Press</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 border-secondary">
                <div class="row">
                    <div class="col-md-6">
                        <p class="text-muted small mb-0">© 2026 Quip POS. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <a href="#" class="text-muted text-decoration-none small me-3">Privacy Policy</a>
                        <a href="#" class="text-muted text-decoration-none small me-3">Terms of Service</a>
                        <a href="#" class="text-muted text-decoration-none small">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

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
