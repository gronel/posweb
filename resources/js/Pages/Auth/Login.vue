<template>
    <div class="auth-page">
        <div class="container-fluid">
            <div class="row min-vh-100">
                <!-- Left Side - Branding -->
                <div class="col-lg-6 d-none d-lg-flex auth-branding">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 text-white p-5">
                        <div class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="logo-circle me-3"></div>
                                <span class="fw-bold fs-1">Quip</span>
                            </div>
                            <h2 class="display-5 fw-bold mb-3">Welcome Back!</h2>
                            <p class="lead opacity-75">Sign in to access your POS dashboard and manage your business operations.</p>
                        </div>
                        <div class="feature-list">
                            <div class="d-flex align-items-center mb-3">
                                <div class="check-icon me-3">✓</div>
                                <span>Real-time inventory tracking</span>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="check-icon me-3">✓</div>
                                <span>Comprehensive sales analytics</span>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="check-icon me-3">✓</div>
                                <span>Secure payment processing</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Login Form -->
                <div class="col-lg-6 d-flex align-items-center justify-content-center bg-light">
                    <div class="auth-form-container p-4 p-md-5">
                        <div class="text-center text-lg-start mb-4">
                            <div class="d-lg-none d-flex align-items-center justify-content-center mb-4">
                                <div class="logo-circle me-2" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                                <span class="fw-bold fs-3">Quip</span>
                            </div>
                            <h3 class="fw-bold mb-2">Sign In</h3>
                            <p class="text-muted">Enter your credentials to access your account</p>
                        </div>

                        <form @submit.prevent="submit">
                            <!-- Email -->
                            <div class="mb-3">
                                <label for="email" class="form-label fw-semibold">Email Address</label>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="form-control form-control-lg"
                                    :class="{ 'is-invalid': form.errors.email }"
                                    placeholder="you@example.com"
                                    required
                                    autofocus
                                >
                                <div v-if="form.errors.email" class="invalid-feedback">
                                    {{ form.errors.email }}
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="mb-3">
                                <label for="password" class="form-label fw-semibold">Password</label>
                                <input
                                    id="password"
                                    v-model="form.password"
                                    type="password"
                                    class="form-control form-control-lg"
                                    :class="{ 'is-invalid': form.errors.password }"
                                    placeholder="••••••••"
                                    required
                                >
                                <div v-if="form.errors.password" class="invalid-feedback">
                                    {{ form.errors.password }}
                                </div>
                            </div>

                            <!-- Remember Me & Forgot Password -->
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <div class="form-check">
                                    <input
                                        id="remember"
                                        v-model="form.remember"
                                        type="checkbox"
                                        class="form-check-input"
                                    >
                                    <label class="form-check-label" for="remember">
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    v-if="canResetPassword"
                                    :href="route('password.request')"
                                    class="text-decoration-none small"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <!-- Submit Button -->
                            <button
                                type="submit"
                                class="btn btn-primary btn-lg w-100 mb-3"
                                :disabled="form.processing"
                            >
                                <span v-if="form.processing" class="spinner-border spinner-border-sm me-2"></span>
                                {{ form.processing ? 'Signing In...' : 'Sign In' }}
                            </button>

                            <!-- Register Link -->
                            <div class="text-center">
                                <span class="text-muted">Don't have an account? </span>
                                <Link :href="route('register')" class="text-decoration-none fw-semibold">
                                    Sign Up
                                </Link>
                            </div>
                        </form>

                        <!-- Divider -->
                        <div class="divider my-4">
                            <span class="divider-text">Or continue with</span>
                        </div>

                        <!-- Social Login Buttons -->
                        <div class="row g-2">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary w-100">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" class="me-2">
                                        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                                        <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
                                        <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                                        <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.002 0 5.48 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
                                    </svg>
                                    Google
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-outline-secondary w-100">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="me-2">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm, Link } from '@inertiajs/vue3';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<style scoped>
.auth-page {
    min-height: 100vh;
}

.auth-branding {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
}

.auth-branding::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: rotate 30s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.logo-circle {
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
}

.check-icon {
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.auth-form-container {
    width: 100%;
    max-width: 480px;
}

.form-control-lg {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
}

.form-control:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.btn-outline-secondary {
    border-color: #dee2e6;
    color: #495057;
    border-radius: 0.5rem;
    padding: 0.5rem;
    transition: all 0.3s ease;
}

.btn-outline-secondary:hover {
    background-color: #f8f9fa;
    border-color: #adb5bd;
    color: #495057;
}

.divider {
    position: relative;
    text-align: center;
}

.divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #dee2e6;
}

.divider-text {
    position: relative;
    background-color: #f8f9fa;
    padding: 0 1rem;
    color: #6c757d;
    font-size: 0.875rem;
}

a {
    color: #667eea;
    transition: color 0.3s ease;
}

a:hover {
    color: #764ba2;
}

.form-check-input:checked {
    background-color: #667eea;
    border-color: #667eea;
}

.invalid-feedback {
    display: block;
}

@media (max-width: 991px) {
    .auth-form-container {
        max-width: 100%;
    }
}
</style>
