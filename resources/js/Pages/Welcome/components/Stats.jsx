export default function Stats() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-pink-100 rounded-2xl p-6">
                        <h2 className="text-5xl font-bold mb-2">6M+</h2>
                        <p className="text-gray-500">Total POS User</p>
                    </div>
                    <div className="bg-teal-50 rounded-2xl p-6">
                        <h2 className="text-5xl font-bold mb-2">5M+</h2>
                        <p className="text-gray-500">5 Star Received</p>
                    </div>
                    <div className="bg-yellow-100 rounded-2xl p-6">
                        <h2 className="text-5xl font-bold mb-2">35%</h2>
                        <p className="text-gray-500">Increase Accuracy</p>
                    </div>
                    <div className="bg-cyan-100 rounded-2xl p-6">
                        <h2 className="text-5xl font-bold mb-2">Two</h2>
                        <p className="text-gray-500">People User Type</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
