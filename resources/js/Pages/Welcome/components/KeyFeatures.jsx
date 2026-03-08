export default function KeyFeatures() {
    const features = [
        { title: 'Sales-Driven Decision-Making', desc: 'Make informed business decisions with comprehensive analytics and reporting.', bg: 'bg-cyan-50', bar: 'bg-cyan-400', heights: ['40%','80%','60%','90%','50%'] },
        { title: 'Payment Processing', desc: 'Accept all major payment methods securely and efficiently.', bg: 'bg-yellow-50', bar: 'bg-yellow-400', heights: ['70%','85%','65%','95%'] },
        { title: 'Customer Loyalty', desc: 'Build lasting relationships with integrated loyalty programs.', bg: 'bg-green-50', bar: 'bg-green-400', heights: ['50%','70%','90%','60%','80%'] },
        { title: 'Inventory Control', desc: 'Monitor stock levels and automate reordering processes.', bg: 'bg-red-50', bar: null, heights: [] },
        { title: 'Staff Management', desc: 'Track employee performance and manage schedules effectively.', bg: 'bg-cyan-50', bar: null, heights: [] },
        { title: 'Multi-Location', desc: 'Manage multiple store locations from a single dashboard.', bg: 'bg-blue-50', bar: null, heights: [] },
    ];
    return (
        <section className="py-20 bg-gray-50" id="features">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">POWERFUL FEATURES</span>
                    <h2 className="text-4xl font-bold mt-4">Key Features Of A-an POS</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map(f => (
                        <div key={f.title} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
                            <h6 className="text-blue-600 font-semibold mb-2">{f.title}</h6>
                            <p className="text-gray-500 text-sm mb-4">{f.desc}</p>
                            <div className={`${f.bg} rounded-xl p-4 flex-1 min-h-[120px]`}>
                                {f.bar && f.heights.length > 0 && (
                                    <div className="flex justify-around items-end h-full">
                                        {f.heights.map((h, i) => (
                                            <div key={i} className={`${f.bar} w-7 rounded-t`} style={{height: h}}></div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}