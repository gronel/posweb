import { Link } from '@inertiajs/react';

export default function DispenseIndex({ items, summary }) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900">Dispense</h1>
                    <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                        Review your inventory items before dispensing. This page shows current stock, location and category details for all available items.
                    </p>
                </div>
                <Link
                    href="/items"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200/70 hover:opacity-95 transition"
                >
                    View Item Master
                </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Total item records</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-900">{summary.total_items}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Total stock quantity</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-900">{summary.total_stock_qty ?? 0}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Active items</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-900">{summary.active_items}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Inactive items</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-900">{summary.inactive_items}</p>
                </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 text-sm">
                        <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            <tr>
                                <th className="px-4 py-4">Code</th>
                                <th className="px-4 py-4">Item</th>
                                <th className="px-4 py-4">Location</th>
                                <th className="px-4 py-4">Category</th>
                                <th className="px-4 py-4">Stock</th>
                                <th className="px-4 py-4">UOM</th>
                                <th className="px-4 py-4">Unit price</th>
                                <th className="px-4 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                            {items.data.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="px-4 py-6 text-center text-sm text-slate-500">
                                        No items available for dispensing.
                                    </td>
                                </tr>
                            ) : (
                                items.data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-4 py-4 font-medium text-slate-900">{item.itemcode}</td>
                                        <td className="px-4 py-4 text-slate-600">{item.itemname}</td>
                                        <td className="px-4 py-4 text-slate-600">{item.location || 'N/A'}</td>
                                        <td className="px-4 py-4 text-slate-600">{item.category || 'N/A'}</td>
                                        <td className="px-4 py-4 text-slate-600">{item.stocklevelqty ?? 0}</td>
                                        <td className="px-4 py-4 text-slate-600">{item.uom || '-'}</td>
                                        <td className="px-4 py-4 text-slate-600">{item.sellingprice ? `₱ ${item.sellingprice}` : '-'}</td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.isactive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                                {item.isactive ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {items.links && (
                <div className="flex items-center justify-end gap-2 py-3">
                    {items.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            className={`rounded-full px-4 py-2 text-sm font-semibold ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                            preserveScroll
                            as="button"
                        >
                            <span dangerouslySetInnerHTML={{ __html: link.label }} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
