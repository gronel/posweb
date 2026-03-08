export default function Process() {
    const steps = [
        { n: '1', t: 'Quick Registration', d: 'Sign up in minutes and get instant access to our powerful POS system.' },
        { n: '2', t: 'Set Up Your Store', d: 'Configure your products, pricing, and payment methods easily.' },
        { n: '3', t: 'Customize Your Solution', d: 'Tailor the system to match your specific business needs.' },
    ];
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">HOW IT WORKS</span>
                    <h2 className="text-4xl font-bold mt-4">Simple To Process To Start</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map(s => (
                        <div key={s.n} className="text-center">
                            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full inline-flex items-center justify-center mb-4">
                                <span className="text-3xl font-bold">{s.n}</span>
                            </div>
                            <h5 className="font-bold mb-3">{s.t}</h5>
                            <p className="text-gray-500">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
