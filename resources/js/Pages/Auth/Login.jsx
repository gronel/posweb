import { useForm, Link, router } from '@inertiajs/react';

export default function Login({ canResetPassword }) {
    const form = useForm({ email: '', password: '', remember: false });

    const submit = (e) => {
        e.preventDefault();
        form.post('login', {
            onSuccess: () => router.visit('dashboard'),
            onFinish: () => form.reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#667eea] to-[#764ba2] flex-col justify-center items-center text-white p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                        <span className="font-bold text-4xl">A-an</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-lg text-white/75 mb-8">Sign in to access your POS dashboard and manage your business operations.</p>
                    <div className="space-y-3">
                        {['Real-time inventory tracking', 'Comprehensive sales analytics', 'Secure payment processing'].map(f => (
                            <div key={f} className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</div>
                                <span>{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-md p-8">
                    <div className="text-center lg:text-left mb-6">
                        <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full"></div>
                            <span className="font-bold text-2xl">A-an</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">Sign In</h3>
                        <p className="text-gray-500">Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email Address</label>
                            <input
                                id="email"
                                value={form.data.email}
                                onChange={(e) => form.setData('email', e.target.value)}
                                type="email"
                                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 ${form.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="you@example.com"
                                required
                                autoFocus
                            />
                            {form.errors.email && <p className="text-red-500 text-xs mt-1">{form.errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                            <input
                                id="password"
                                value={form.data.password}
                                onChange={(e) => form.setData('password', e.target.value)}
                                type="password"
                                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 ${form.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                required
                            />
                            {form.errors.password && <p className="text-red-500 text-xs mt-1">{form.errors.password}</p>}
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input
                                    id="remember"
                                    checked={form.data.remember}
                                    onChange={(e) => form.setData('remember', e.target.checked)}
                                    type="checkbox"
                                    className="rounded"
                                />
                                Remember me
                            </label>
                            {canResetPassword && (
                                <Link href={route('password.request')} className="text-sm text-purple-600 hover:underline">
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                            disabled={form.processing}
                        >
                            {form.processing ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="relative my-6 text-center">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                        <span className="relative bg-gray-50 px-4 text-sm text-gray-400">Or continue with</span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 text-sm hover:bg-gray-100 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                            <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
                            <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                            <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.002 0 5.48 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
                        </svg>
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}