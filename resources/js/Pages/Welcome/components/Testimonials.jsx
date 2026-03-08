export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">OUR TESTIMONIALS</span>
                    <h2 className="text-4xl font-bold mt-4">Our Satisfied Client Says</h2>
                </div>
                <div className="flex justify-center">
                    <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-sm">
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 bg-blue-600 rounded-full shrink-0"></div>
                            <div>
                                <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
                                <p className="text-gray-500 mb-4">"The A-an POS system has transformed our business operations. It's user-friendly, fast, and reliable. Customer support is excellent and always ready to help. Highly recommended!"</p>
                                <h6 className="font-bold">Sarah Johnson</h6>
                                <small className="text-gray-400">Restaurant Owner</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
