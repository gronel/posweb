export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-24 min-h-[80vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
                            <span>⭐</span> We Provide the Best POS System Solutions
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">Our Advanced POS Software Solutions</h1>
                        <p className="text-lg mb-8 text-white/75">Streamline your business operations with our cutting-edge Point of Sale system. Fast, reliable, and easy to use.</p>
                        <div className="flex gap-4 flex-wrap">
                            <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">▶ Get Started Now</button>
                            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">▶ See Demo</button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center p-8">
                        <div className="w-[280px] h-[380px] bg-white/15 rounded-[20px] p-5 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                            <div className="w-full h-4/5 bg-white/20 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
