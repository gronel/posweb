export default function DownloadApp() {
    return (
        <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-20 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">DOWNLOAD NOW</span>
                    <h2 className="text-4xl font-bold mt-6 mb-4">Download Your App<br/>Available Now!</h2>
                    <p className="text-lg text-white/75 mb-8">Get started with our mobile app for iOS and Android</p>
                    <div className="flex gap-4 justify-center">
                        <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">🍎 App Store</a>
                        <a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">📱 Google Play</a>
                    </div>
                </div>
            </div>
        </section>
    );
}