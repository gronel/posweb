import { useForm, Link } from '@inertiajs/react';

export default function ItemsCreate({ locations, categories }) {
    const form = useForm({
        itemcode: '',
        itemname: '',
        itemdescription: '',
        locationid: locations.length ? locations[0].id : '',
        itemcategoryid: categories.length ? categories[0].id : '',
        brandtype: '',
        uom: '',
        stocklevelqty: '',
        stackoh: '',
        isactive: true,
        itemimg: '',
        costprice: '',
        sellingprice: '',
    });

    const submit = (e) => {
        e.preventDefault();
        form.post('/items');
    };

    const inputCls = (err) => `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${err ? 'border-red-400' : 'border-gray-300'}`;

    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Link href="/items" className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    Back
                </Link>
                <div>
                    <h2 className="text-2xl font-bold mb-0.5">Add New Item</h2>
                    <p className="text-gray-500 text-sm">Enter item details and save.</p>
                </div>
            </div>
            <div className="max-w-3xl">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <form onSubmit={submit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="itemcode" className="block text-sm font-semibold mb-1">Item Code</label>
                                <input
                                    id="itemcode"
                                    type="text"
                                    value={form.data.itemcode}
                                    onChange={(e) => form.setData('itemcode', e.target.value)}
                                    placeholder="Enter item code"
                                    className={inputCls(form.errors.itemcode)}
                                    required
                                />
                                {form.errors.itemcode && <p className="text-red-500 text-xs mt-1">{form.errors.itemcode}</p>}
                            </div>
                            <div>
                                <label htmlFor="itemname" className="block text-sm font-semibold mb-1">Item Name</label>
                                <input
                                    id="itemname"
                                    type="text"
                                    value={form.data.itemname}
                                    onChange={(e) => form.setData('itemname', e.target.value)}
                                    placeholder="Enter item name"
                                    className={inputCls(form.errors.itemname)}
                                />
                                {form.errors.itemname && <p className="text-red-500 text-xs mt-1">{form.errors.itemname}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="itemdescription" className="block text-sm font-semibold mb-1">Description</label>
                            <input
                                id="itemdescription"
                                type="text"
                                value={form.data.itemdescription}
                                onChange={(e) => form.setData('itemdescription', e.target.value)}
                                placeholder="Enter item description"
                                className={inputCls(form.errors.itemdescription)}
                            />
                            {form.errors.itemdescription && <p className="text-red-500 text-xs mt-1">{form.errors.itemdescription}</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="locationid" className="block text-sm font-semibold mb-1">Storage Location</label>
                                <select
                                    id="locationid"
                                    value={form.data.locationid}
                                    onChange={(e) => form.setData('locationid', e.target.value)}
                                    className={inputCls(form.errors.locationid)}
                                    required
                                >
                                    <option value="">Select location</option>
                                    {locations.map((loc) => (
                                        <option key={loc.id} value={loc.id}>{loc.location}</option>
                                    ))}
                                </select>
                                {form.errors.locationid && <p className="text-red-500 text-xs mt-1">{form.errors.locationid}</p>}
                            </div>
                            <div>
                                <label htmlFor="itemcategoryid" className="block text-sm font-semibold mb-1">Item Category</label>
                                <select
                                    id="itemcategoryid"
                                    value={form.data.itemcategoryid}
                                    onChange={(e) => form.setData('itemcategoryid', e.target.value)}
                                    className={inputCls(form.errors.itemcategoryid)}
                                    required
                                >
                                    <option value="">Select category</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.itemcategory}</option>
                                    ))}
                                </select>
                                {form.errors.itemcategoryid && <p className="text-red-500 text-xs mt-1">{form.errors.itemcategoryid}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="brandtype" className="block text-sm font-semibold mb-1">Brand</label>
                                <input
                                    id="brandtype"
                                    type="text"
                                    value={form.data.brandtype}
                                    onChange={(e) => form.setData('brandtype', e.target.value)}
                                    placeholder="Enter brand"
                                    className={inputCls(form.errors.brandtype)}
                                />
                                {form.errors.brandtype && <p className="text-red-500 text-xs mt-1">{form.errors.brandtype}</p>}
                            </div>
                            <div>
                                <label htmlFor="uom" className="block text-sm font-semibold mb-1">Unit of Measure</label>
                                <input
                                    id="uom"
                                    type="text"
                                    value={form.data.uom}
                                    onChange={(e) => form.setData('uom', e.target.value)}
                                    placeholder="e.g. BTLE"
                                    className={inputCls(form.errors.uom)}
                                />
                                {form.errors.uom && <p className="text-red-500 text-xs mt-1">{form.errors.uom}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="stocklevelqty" className="block text-sm font-semibold mb-1">Stock Level Qty</label>
                                <input
                                    id="stocklevelqty"
                                    type="number"
                                    value={form.data.stocklevelqty}
                                    onChange={(e) => form.setData('stocklevelqty', e.target.value)}
                                    className={inputCls(form.errors.stocklevelqty)}
                                />
                                {form.errors.stocklevelqty && <p className="text-red-500 text-xs mt-1">{form.errors.stocklevelqty}</p>}
                            </div>
                            <div>
                                <label htmlFor="stackoh" className="block text-sm font-semibold mb-1">Stock On Hand</label>
                                <input
                                    id="stackoh"
                                    type="number"
                                    value={form.data.stackoh}
                                    onChange={(e) => form.setData('stackoh', e.target.value)}
                                    className={inputCls(form.errors.stackoh)}
                                />
                                {form.errors.stackoh && <p className="text-red-500 text-xs mt-1">{form.errors.stackoh}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="costprice" className="block text-sm font-semibold mb-1">Cost Price</label>
                                <input
                                    id="costprice"
                                    type="number"
                                    step="0.01"
                                    value={form.data.costprice}
                                    onChange={(e) => form.setData('costprice', e.target.value)}
                                    className={inputCls(form.errors.costprice)}
                                />
                                {form.errors.costprice && <p className="text-red-500 text-xs mt-1">{form.errors.costprice}</p>}
                            </div>
                            <div>
                                <label htmlFor="sellingprice" className="block text-sm font-semibold mb-1">Selling Price</label>
                                <input
                                    id="sellingprice"
                                    type="number"
                                    step="0.01"
                                    value={form.data.sellingprice}
                                    onChange={(e) => form.setData('sellingprice', e.target.value)}
                                    className={inputCls(form.errors.sellingprice)}
                                />
                                {form.errors.sellingprice && <p className="text-red-500 text-xs mt-1">{form.errors.sellingprice}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                            <div>
                                <label htmlFor="itemimg" className="block text-sm font-semibold mb-1">Image URL</label>
                                <input
                                    id="itemimg"
                                    type="text"
                                    value={form.data.itemimg}
                                    onChange={(e) => form.setData('itemimg', e.target.value)}
                                    placeholder="Optional image URL"
                                    className={inputCls(form.errors.itemimg)}
                                />
                                {form.errors.itemimg && <p className="text-red-500 text-xs mt-1">{form.errors.itemimg}</p>}
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    id="isactive"
                                    type="checkbox"
                                    checked={form.data.isactive}
                                    onChange={(e) => form.setData('isactive', e.target.checked)}
                                    className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                                />
                                <label htmlFor="isactive" className="text-sm font-semibold">Active</label>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button type="submit" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60" disabled={form.processing}>
                                {form.processing ? 'Saving...' : 'Save Item'}
                            </button>
                            <Link href="/items" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
