export default function Business() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">WHY CHOOSE US</span>
                    <h2 className="text-4xl font-bold mt-4">Business With Our Cutting<br/>Edge A-an POS Software</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                                </svg>
                            </div>
                            <h5 className="font-semibold">Order Management Simplified</h5>
                        </div>
                        <p className="text-gray-500 text-sm">Efficiently manage all your orders in one place with real-time tracking and updates.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </div>
                            <h5 className="font-semibold">Inventory Tracking</h5>
                        </div>
                        <p className="text-gray-500 text-sm">Keep track of your stock levels in real-time and get alerts for low inventory.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
