import { useForm, Link } from '@inertiajs/react';

export default function LocationsEdit({ location }) {
    const form = useForm({
        location: location.location || '',
        description: location.description || '',
    });

    const submit = (e) => {
        e.preventDefault();
        form.put(`/locations/${location.id}`);
    };

    const inputCls = (err) => `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${err ? 'border-red-400' : 'border-gray-300'}`;

    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Link href="/locations" className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    Back
                </Link>
                <div>
                    <h2 className="text-2xl font-bold mb-0.5">Edit Location</h2>
                    <p className="text-gray-500 text-sm">Update location details.</p>
                </div>
            </div>
            <div className="max-w-2xl">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label htmlFor="location" className="block text-sm font-semibold mb-1">Location</label>
                            <input
                                id="location"
                                type="text"
                                value={form.data.location}
                                onChange={(e) => form.setData('location', e.target.value)}
                                placeholder="Enter location name"
                                className={inputCls(form.errors.location)}
                                required
                            />
                            {form.errors.location && <p className="text-red-500 text-xs mt-1">{form.errors.location}</p>}
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-semibold mb-1">Description</label>
                            <input
                                id="description"
                                type="text"
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                placeholder="Optional description"
                                className={inputCls(form.errors.description)}
                            />
                            {form.errors.description && <p className="text-red-500 text-xs mt-1">{form.errors.description}</p>}
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button type="submit" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60" disabled={form.processing}>
                                {form.processing ? 'Saving...' : 'Update Location'}
                            </button>
                            <Link href="/locations" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
