export default function Footer() {
    const cols = [
        { h: 'Product', links: ['Features','Pricing','Demo','Updates'] },
        { h: 'Support', links: ['Help Center','Contact Us','FAQ','Documentation'] },
        { h: 'Resources', links: ['Blog','Newsletter','Events','Webinars'] },
        { h: 'Company', links: ['About Us','Careers','Partners','Press'] },
    ];
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full"></div>
                            <span className="font-bold text-white text-lg">A-an</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">Modern POS solutions for modern businesses.</p>
                        <div className="flex gap-2">
                            {['f', 'X', 'in'].map(s => (
                                <a key={s} href="#" className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-white transition-colors">{s}</a>
                            ))}
                        </div>
                    </div>
                    {cols.map(col => (
                        <div key={col.h}>
                            <h6 className="font-bold text-white mb-4">{col.h}</h6>
                            <ul className="space-y-2 list-none p-0">
                                {col.links.map(l => (
                                    <li key={l}><a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-gray-500 text-sm">&copy; 2026 A-an POS. All rights reserved.</p>
                    <div className="flex gap-4">
                        {['Privacy Policy','Terms of Service','Cookies'].map(l => (
                            <a key={l} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}