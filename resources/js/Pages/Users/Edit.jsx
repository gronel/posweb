import { useForm, Link } from '@inertiajs/react';

export default function UsersEdit({ user }) {
    const form = useForm({ name: user.name, email: user.email, password: '', password_confirmation: '' });

    const submit = (e) => {
        e.preventDefault();
        form.put(`/users/${user.id}`);
    };

    const inputCls = (err) => `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${err ? 'border-red-400' : 'border-gray-300'}`;

    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Link href="/users" className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    Back
                </Link>
                <div>
                    <h2 className="text-2xl font-bold mb-0.5">Edit User</h2>
                    <p className="text-gray-500 text-sm">Update user information</p>
                </div>
            </div>
            <div className="max-w-2xl">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                            <input id="name" type="text" value={form.data.name} onChange={e => form.setData('name', e.target.value)} placeholder="Enter user name" className={inputCls(form.errors.name)} required />
                            {form.errors.name && <p className="text-red-500 text-xs mt-1">{form.errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email Address</label>
                            <input id="email" type="email" value={form.data.email} onChange={e => form.setData('email', e.target.value)} placeholder="user@example.com" className={inputCls(form.errors.email)} required />
                            {form.errors.email && <p className="text-red-500 text-xs mt-1">{form.errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold mb-1">
                                Password <span className="text-gray-400 font-normal text-xs">(Leave blank to keep current)</span>
                            </label>
                            <input id="password" type="password" value={form.data.password} onChange={e => form.setData('password', e.target.value)} placeholder="••••••••" className={inputCls(form.errors.password)} />
                            {form.errors.password && <p className="text-red-500 text-xs mt-1">{form.errors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="password_confirmation" className="block text-sm font-semibold mb-1">Confirm Password</label>
                            <input id="password_confirmation" type="password" value={form.data.password_confirmation} onChange={e => form.setData('password_confirmation', e.target.value)} placeholder="••••••••" className={inputCls(false)} />
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button type="submit" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60" disabled={form.processing}>
                                {form.processing ? 'Updating...' : 'Update User'}
                            </button>
                            <Link href="/users" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}