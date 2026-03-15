import { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';

export default function LayoutAuthenticated({ children }) {
    const { auth } = usePage().props;

    const [sections, setSections] = useState({
        quickLaunch: true,
        actions: true,
        admin: true,
    });

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleSection = (section) => {
        setSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const logout = () => {
        router.post(route('logout'));
    };

    const menuItemClass = "flex items-center gap-3 px-6 py-3.5 text-blue-600 no-underline text-[0.95rem] transition-all duration-300 hover:bg-slate-50 hover:text-blue-700";
    const sectionToggleClass = "w-full px-6 py-4 bg-slate-100 border-0 flex items-center gap-3 text-slate-500 font-semibold text-sm cursor-pointer transition-all duration-300 hover:bg-slate-200";

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Mobile Top Bar */}
            <header className="md:hidden fixed inset-x-0 top-0 z-40 bg-white shadow-sm">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                            aria-label="Toggle menu"
                        >
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.5 12.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-lg font-semibold text-blue-600">A-AN POS</h1>
                            <p className="text-xs text-slate-500">Management System</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-[2px_0_10px_rgba(0,0,0,0.05)] flex flex-col overflow-y-auto transition-transform duration-300 ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
            >
                {/* Header */}
                <div className="px-6 py-8 text-center border-b border-gray-200">
                    <div className="w-15 h-15 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full mx-auto mb-2" style={{width:'60px',height:'60px'}}></div>
                    <h5 className="text-blue-600 font-bold text-xl mb-1">A-AN POS</h5>
                    <p className="text-pink-500 text-xs font-semibold">MANAGEMENT SYSTEM</p>
                </div>

                {/* Quick Launch Section */}
                <div className="border-b border-gray-200">
                    <button className={sectionToggleClass} onClick={() => toggleSection('quickLaunch')}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className={`transition-transform duration-300 ${sections.quickLaunch ? 'rotate-180' : ''}`}>
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <span>QUICK LAUNCH</span>
                    </button>
                    {sections.quickLaunch && (
                        <div className="py-2">
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <span>New Sale</span>
                            </a>
                        </div>
                    )}
                </div>

                {/* Actions Section */}
                <div className="border-b border-gray-200">
                    <button className={sectionToggleClass} onClick={() => toggleSection('actions')}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className={`transition-transform duration-300 ${sections.actions ? 'rotate-180' : ''}`}>
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <span>Maintenance</span>
                    </button>
                    {sections.actions && (
                        <div className="py-2">
                            <Link href="company" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.5 14V1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V14h10V1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V14h.5a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h.5zm2-13v13h1V1h-1zm2 0v13h1V1h-1zm2 0v13h1V1h-1zm2 0v13h1V1h-1zm2 0v13h1V1h-1z"/>
                                </svg>
                                <span>Company</span>
                            </Link>
                            <Link href="users" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                </svg>
                                <span>Manage User</span>
                            </Link>
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <span>Item Master</span>
                            </a>
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                <span>Inventory Management</span>
                            </a>
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>
                                <span>Clinical Management</span>
                            </a>
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                                </svg>
                                <span>Dispense</span>
                            </a>
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                <span>Dispose</span>
                            </a>
                        </div>
                    )}
                </div>

                {/* Admin / Transaction Section */}
                <div className="border-b border-gray-200">
                    <button className={sectionToggleClass} onClick={() => toggleSection('admin')}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className={`transition-transform duration-300 ${sections.admin ? 'rotate-180' : ''}`}>
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <span>Transaction</span>
                    </button>
                    {sections.admin && (
                        <div className="py-2">
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                                </svg>
                                <span>Reports</span>
                            </a>
                            <a href="#" className={menuItemClass}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                                </svg>
                                <span>Manage</span>
                            </a>
                        </div>
                    )}
                </div>

                {/* User Footer */}
                <div className="mt-auto px-6 py-6 border-t border-gray-200">
                    <div className="mb-4">
                        <span className="text-slate-500 text-sm font-medium">{auth?.user?.name}</span>
                    </div>
                    <button onClick={logout} className="w-full py-3 bg-white border border-slate-200 rounded-lg text-slate-500 text-sm font-medium cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-50 hover:border-red-200 hover:text-red-600">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Mobile overlay */}
            {mobileMenuOpen && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={toggleMobileMenu} />}

            {/* Main Content Area */}
            <main className="flex-1 md:ml-[280px] pt-16 md:pt-0 p-4 md:p-8">
                {children}
            </main>
        </div>
    );
}
