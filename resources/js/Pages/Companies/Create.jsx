import { useForm, Link } from '@inertiajs/react';

export default function CompanyCreate({ company }) {
    const form = useForm({
        id: company?.id || null,
        companyname: company?.companyname || '',
        email: company?.email || '',
        address: company?.address || '',
        phone: company?.phone || '',
        fax: company?.fax || '',
        website: company?.website || '',
        logo: company?.logo || '',
    });

    const submit = (e) => {
        e.preventDefault();
        form.post('/company/store', { onSuccess: () => form.reset() });
    };

    const inputCls = (err) => `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${err ? 'border-red-400' : 'border-gray-300'}`;

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-1">Create/Update Company</h2>
                <p className="text-gray-500">Add a new company to the system</p>
            </div>
            <div className="max-w-2xl">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <form onSubmit={submit} className="space-y-4">
                        {[
                            { id: 'companyname', label: 'Company Name', type: 'text', req: true, val: form.data.companyname, set: 'companyname', err: form.errors.companyname, ph: 'Enter company name' },
                            { id: 'address', label: 'Address', type: 'text', req: true, val: form.data.address, set: 'address', err: form.errors.address, ph: 'Enter company address' },
                            { id: 'phone', label: 'Phone', type: 'tel', req: true, val: form.data.phone, set: 'phone', err: form.errors.phone, ph: 'Enter phone number' },
                            { id: 'email', label: 'Email Address', type: 'email', req: true, val: form.data.email, set: 'email', err: form.errors.email, ph: 'user@example.com' },
                            { id: 'website', label: 'Website', type: 'text', req: false, val: form.data.website, set: 'website', err: form.errors.website, ph: 'https://www.example.com', opt: true },
                            { id: 'logo', label: 'Logo URL', type: 'text', req: false, val: form.data.logo, set: 'logo', err: form.errors.logo, ph: 'https://www.example.com/logo.png' },
                        ].map(f => (
                            <div key={f.id}>
                                <label htmlFor={f.id} className="block text-sm font-semibold mb-1">
                                    {f.label}
                                    {f.req && <span className="text-red-500 ml-1">*</span>}
                                    {f.opt && <span className="text-gray-400 font-normal ml-1">optional</span>}
                                </label>
                                <input
                                    id={f.id}
                                    type={f.type}
                                    value={f.val}
                                    onChange={e => form.setData(f.set, e.target.value)}
                                    placeholder={f.ph}
                                    className={inputCls(f.err)}
                                    required={f.req}
                                />
                                {f.err && <p className="text-red-500 text-xs mt-1">{f.err}</p>}
                            </div>
                        ))}
                        <div className="flex gap-3 pt-2">
                            <button type="submit" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60" disabled={form.processing}>
                                {form.processing ? 'Creating...' : 'Create Company'}
                            </button>
                            <Link href="/companies" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}