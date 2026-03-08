import { Link, router, usePage } from '@inertiajs/react';

export default function UsersIndex({ users }) {
    const { flash } = usePage().props;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const deleteUser = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(`/users/${id}`);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold mb-0.5">User Management</h2>
                    <p className="text-gray-500 text-sm">Manage all system users</p>
                </div>
                <Link href="/users/create" className="flex items-center gap-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    Add New User
                </Link>
            </div>

            {flash?.success && (
                <div className="bg-green-100 text-green-800 border border-green-200 rounded-xl px-4 py-3 mb-4 text-sm">
                    {flash.success}
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                {['ID','Name','Email','Created At','Actions'].map(h => (
                                    <th key={h} className={`px-6 py-3 text-left text-gray-500 font-medium ${h === 'Actions' ? 'text-right' : ''}`}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.data.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-semibold">{user.id}</td>
                                    <td className="px-6 py-4 text-gray-700">{user.name}</td>
                                    <td className="px-6 py-4 text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 text-gray-400">{formatDate(user.created_at)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="inline-flex gap-2">
                                            <Link href={`/users/${user.id}/edit`} className="flex items-center gap-1 border border-blue-300 text-blue-600 px-3 py-1.5 rounded-lg text-xs hover:bg-blue-50 transition-colors">
                                                <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                                Edit
                                            </Link>
                                            <button onClick={() => deleteUser(user.id)} className="flex items-center gap-1 border border-red-300 text-red-600 px-3 py-1.5 rounded-lg text-xs hover:bg-red-50 transition-colors">
                                                <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {users.links.length > 3 && (
                <div className="mt-4 flex justify-center gap-1">
                    {users.links.map((link, i) => (
                        link.url
                            ? <Link key={i} href={link.url} className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${link.active ? 'bg-purple-600 text-white border-purple-600' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`} dangerouslySetInnerHTML={{ __html: link.label }} />
                            : <span key={i} className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-400" dangerouslySetInnerHTML={{ __html: link.label }} />
                    ))}
                </div>
            )}
        </div>
    );
}