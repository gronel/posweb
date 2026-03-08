export default function CTA() {
    const items = [
        { label: 'Fast Checkout', desc: 'Speed up transactions and reduce wait times.' },
        { label: 'Live Updates', desc: 'Get real-time updates on sales and inventory.' },
        { label: 'Secure Payments', desc: 'PCI-compliant payment processing.' },
        { label: 'Online Tools', desc: 'Access your business data anywhere.' },
    ];
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/3">
                        <div className="bg-gray-100 rounded-2xl p-12 flex justify-center">
                            <div className="w-[180px] h-[280px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[20px] opacity-40"></div>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">A-an POS SYSTEM</span>
                        <h2 className="text-4xl font-bold mt-4 mb-8">Business with Our All in-One POS System</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {items.map(item => (
                                <div key={item.label} className="flex gap-4">
                                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0 self-start">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 className="font-bold mb-1">{item.label}</h6>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}