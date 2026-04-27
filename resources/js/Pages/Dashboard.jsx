import { usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;

    const orders = [
        { id: '#10234', amount: '$125.50', status: 'Completed', statusColor: 'bg-green-100 text-green-700', time: '2 mins ago' },
        { id: '#10233', amount: '$89.99', status: 'Processing', statusColor: 'bg-yellow-100 text-yellow-700', time: '15 mins ago' },
        { id: '#10232', amount: '$234.00', status: 'Cancelled', statusColor: 'bg-red-100 text-red-700', time: '2 hours ago' },
    ];

    const quickActions = [
        { label: '+ New Sale', primary: true },
        { label: '📦 Add Product', primary: false },
        { label: '📊 View Reports', primary: false },
    ];

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-1">Welcome back, {auth?.user?.name}! 👋</h1>
                <p className="text-gray-500">Here is what is happening with your business today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-2xl shadow-sm p-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Today Sales</p>
                            <h3 className="text-2xl font-bold mb-1">$2,456</h3>
                            <small className="text-green-600">↑ 12.5%</small>
                        </div>
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Orders</p>
                            <h3 className="text-2xl font-bold mb-1">156</h3>
                            <small className="text-green-600">↑ 8.3%</small>
                        </div>
                        <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Low Stock Items</p>
                            <h3 className="text-2xl font-bold mb-1">12</h3>
                            <small className="text-red-500">⚠ Action needed</small>
                        </div>
                        <div className="bg-red-100 text-red-600 p-3 rounded-xl">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h5 className="font-semibold">Recent Orders</h5>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    {['Order ID','Amount','Status','Time'].map(h => (
                                        <th key={h} className="text-left px-6 py-3 text-gray-500 font-medium">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {orders.map(o => (
                                    <tr key={o.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-semibold">{o.id}</td>
                                        <td className="px-6 py-4">{o.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${o.statusColor}`}>{o.status}</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400">{o.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-2xl shadow-sm">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h5 className="font-semibold">Quick Actions</h5>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            {quickActions.map(a => (
                                <button key={a.label} className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${a.primary ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:opacity-90' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                                    {a.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h5 className="font-semibold">Store Status</h5>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">Store Open</span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Active</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">Active Users</span>
                                <span className="font-semibold text-sm">3</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">Last Sync</span>
                                <span className="font-semibold text-sm">Just now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}