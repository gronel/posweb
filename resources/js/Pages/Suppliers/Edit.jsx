import { useForm, Link } from '@inertiajs/react';

export default function SuppliersEdit({ title, supplier }) {
    const form = useForm(supplier ? {
        id: supplier.id || null,
        suppliername: supplier.suppliername || '',
        email: supplier.email || '',
        address: supplier.address || '',
        telno: supplier.telno || '',
        cellno: supplier.cellno || '',
        accreditation: supplier.accreditation || '',
        suppliertype: supplier.suppliertype || '',
        comcategory: supplier.comcategory || '',
        payterms: supplier.payterms || '',
        contactname: supplier.contactname || '',
        designation: supplier.designation || '',
        department: supplier.department || '',
        remarks: supplier.remarks || '',
    } : {
        id: null,
        suppliername: '',
        email: '',
        address: '',
        telno: '',
        cellno: '',
        accreditation: '',
        suppliertype: '',
        comcategory: '',
        payterms: '',
        contactname: '',
        designation: '',
        department: '',
        remarks: '',
    });

    const submit = (e) => {
        e.preventDefault();
        form.post('/supplier/store');
    };

    const inputCls = (err) => `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${err ? 'border-red-400' : 'border-gray-300'}`;

    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Link href="/supplier" className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    Back
                </Link>
                <div>
                    <h2 className="text-2xl font-bold mb-0.5">{title} Supplier</h2>
                    <p className="text-gray-500 text-sm">{title} supplier details</p>
                </div>
            </div>

            <div className="max-w-3xl">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <form onSubmit={submit} className="space-y-4">

                        <div>
                            <label htmlFor="suppliername" className="block text-sm font-semibold mb-1">Supplier Name</label>
                            <input id="suppliername" type="text" value={form.data.suppliername} onChange={e => form.setData('suppliername', e.target.value)} placeholder="Enter supplier name" className={inputCls(form.errors.suppliername)} />
                            {form.errors.suppliername && <p className="text-red-500 text-xs mt-1">{form.errors.suppliername}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                            <input id="email" type="email" value={form.data.email} onChange={e => form.setData('email', e.target.value)} placeholder="supplier@example.com" className={inputCls(form.errors.email)} />
                            {form.errors.email && <p className="text-red-500 text-xs mt-1">{form.errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-semibold mb-1">Address</label>
                            <textarea id="address" value={form.data.address} onChange={e => form.setData('address', e.target.value)} placeholder="Enter address" rows="3" className={inputCls(form.errors.address)} />
                            {form.errors.address && <p className="text-red-500 text-xs mt-1">{form.errors.address}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="telno" className="block text-sm font-semibold mb-1">Tel No</label>
                                <input id="telno" type="number" value={form.data.telno} onChange={e => form.setData('telno', e.target.value)} placeholder="Tel no" className={inputCls(form.errors.telno)} />
                                {form.errors.telno && <p className="text-red-500 text-xs mt-1">{form.errors.telno}</p>}
                            </div>
                            <div>
                                <label htmlFor="cellno" className="block text-sm font-semibold mb-1">Cell No</label>
                                <input id="cellno" type="number" value={form.data.cellno} onChange={e => form.setData('cellno', e.target.value)} placeholder="Cell no" className={inputCls(form.errors.cellno)} />
                                {form.errors.cellno && <p className="text-red-500 text-xs mt-1">{form.errors.cellno}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="accreditation" className="block text-sm font-semibold mb-1">Accreditation</label>
                            <input id="accreditation" type="text" value={form.data.accreditation} onChange={e => form.setData('accreditation', e.target.value)} placeholder="Accreditation" className={inputCls(form.errors.accreditation)} />
                            {form.errors.accreditation && <p className="text-red-500 text-xs mt-1">{form.errors.accreditation}</p>}
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="suppliertype" className="block text-sm font-semibold mb-1">Supplier Type</label>
                                <input id="suppliertype" type="number" value={form.data.suppliertype} onChange={e => form.setData('suppliertype', Number(e.target.value))} placeholder="Type ID" className={inputCls(form.errors.suppliertype)} />
                                {form.errors.suppliertype && <p className="text-red-500 text-xs mt-1">{form.errors.suppliertype}</p>}
                            </div>
                            <div>
                                <label htmlFor="comcategory" className="block text-sm font-semibold mb-1">Category</label>
                                <input id="comcategory" type="number" value={form.data.comcategory} onChange={e => form.setData('comcategory', Number(e.target.value))} placeholder="Category ID" className={inputCls(form.errors.comcategory)} />
                                {form.errors.comcategory && <p className="text-red-500 text-xs mt-1">{form.errors.comcategory}</p>}
                            </div>
                            <div>
                                <label htmlFor="payterms" className="block text-sm font-semibold mb-1">Payment Terms</label>
                                <input id="payterms" type="text" value={form.data.payterms} onChange={e => form.setData('payterms', e.target.value)} placeholder="Terms ID" className={inputCls(form.errors.payterms)} />
                                {form.errors.payterms && <p className="text-red-500 text-xs mt-1">{form.errors.payterms}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contactname" className="block text-sm font-semibold mb-1">Contact Name</label>
                                <input id="contactname" type="text" value={form.data.contactname} onChange={e => form.setData('contactname', e.target.value)} placeholder="Contact name" className={inputCls(form.errors.contactname)} />
                                {form.errors.contactname && <p className="text-red-500 text-xs mt-1">{form.errors.contactname}</p>}
                            </div>
                            <div>
                                <label htmlFor="designation" className="block text-sm font-semibold mb-1">Designation</label>
                                <input id="designation" type="text" value={form.data.designation} onChange={e => form.setData('designation', e.target.value)} placeholder="Designation" className={inputCls(form.errors.designation)} />
                                {form.errors.designation && <p className="text-red-500 text-xs mt-1">{form.errors.designation}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="department" className="block text-sm font-semibold mb-1">Department</label>
                            <input id="department" type="text" value={form.data.department} onChange={e => form.setData('department', e.target.value)} placeholder="Department" className={inputCls(form.errors.department)} />
                            {form.errors.department && <p className="text-red-500 text-xs mt-1">{form.errors.department}</p>}
                        </div>

                        <div>
                            <label htmlFor="remarks" className="block text-sm font-semibold mb-1">Remarks</label>
                            <textarea id="remarks" value={form.data.remarks} onChange={e => form.setData('remarks', e.target.value)} placeholder="Enter remarks" rows="3" className={inputCls(form.errors.remarks)} />
                            {form.errors.remarks && <p className="text-red-500 text-xs mt-1">{form.errors.remarks}</p>}
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button type="submit" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60" disabled={form.processing}>
                                {form.processing ? 'Saving...' : `${title} Supplier`}
                            </button>
                            <Link href="/supplier" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
