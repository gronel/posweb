import { useForm, Link } from '@inertiajs/react';

export default function ResetPassword({ token, email: initialEmail }) {
    const form = useForm({ token, email: initialEmail || '', password: '', password_confirmation: '' });

    const submit = (e) => {
        e.preventDefault();
        form.post(route('password.update'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-3xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset your password</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Choose a new password for your account.
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={submit}>
                    <input type="hidden" name="token" value={form.data.token} />

                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={form.data.email}
                                onChange={(e) => form.setData('email', e.target.value)}
                                required
                                className={`appearance-none rounded-t-xl relative block w-full px-3 py-3 border ${form.errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="Email address"
                            />
                            {form.errors.email && <p className="mt-2 text-sm text-red-600">{form.errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={form.data.password}
                                onChange={(e) => form.setData('password', e.target.value)}
                                required
                                className={`appearance-none relative block w-full px-3 py-3 border ${form.errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="New password"
                            />
                            {form.errors.password && <p className="mt-2 text-sm text-red-600">{form.errors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="password_confirmation" className="sr-only">Confirm password</label>
                            <input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                autoComplete="new-password"
                                value={form.data.password_confirmation}
                                onChange={(e) => form.setData('password_confirmation', e.target.value)}
                                required
                                className={`appearance-none rounded-b-xl relative block w-full px-3 py-3 border ${form.errors.password_confirmation ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="Confirm password"
                            />
                            {form.errors.password_confirmation && <p className="mt-2 text-sm text-red-600">{form.errors.password_confirmation}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={form.processing}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:opacity-90 transition"
                        >
                            Reset password
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center text-gray-600">
                    Remembered your password?{' '}
                    <Link href={route('login')} className="font-semibold text-purple-600 hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
