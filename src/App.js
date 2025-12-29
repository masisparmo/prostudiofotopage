import React, { useState, useEffect } from 'react';
import { 
    Moon, Sun, Camera, DollarSign, Crop, Palette, 
    CheckCircle, XCircle, ArrowRight, Zap, Star, 
    Clock, ShieldCheck, Users, TrendingUp, Gift,
    Mail, MessageCircle, ShieldAlert, X
} from 'lucide-react';

// --- KOMPONEN LOGO CUSTOM ---
const Logo = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="none">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
    <rect x="32" y="32" width="448" height="448" rx="120" fill="url(#logoGradient)" />
    <circle cx="256" cy="256" r="140" stroke="white" strokeWidth="32" opacity="0.9" />
    <path d="M256 80 L256 116" stroke="white" strokeWidth="24" strokeLinecap="round" />
    <path d="M256 396 L256 432" stroke="white" strokeWidth="24" strokeLinecap="round" />
    <path d="M80 256 L116 256" stroke="white" strokeWidth="24" strokeLinecap="round" />
    <path d="M396 256 L432 256" stroke="white" strokeWidth="24" strokeLinecap="round" />
    <path d="M256 160 C265 210 270 230 300 256 C270 282 265 302 256 352 C247 302 242 282 212 256 C242 230 247 210 256 160 Z" fill="white" />
    <circle cx="350" cy="180" r="12" fill="white" opacity="0.8" />
    <circle cx="170" cy="340" r="8" fill="white" opacity="0.6" />
  </svg>
);

export default function LandingPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [spotsLeft, setSpotsLeft] = useState(14); // Simulasi sisa slot
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false); // State untuk Modal
    
    // Toggle Theme
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // Simulasi urgensi: Slot berkurang perlahan
    useEffect(() => {
        const timer = setInterval(() => {
            setSpotsLeft(prev => (prev > 5 ? prev - 1 : 5));
        }, 45000); 
        return () => clearInterval(timer);
    }, []);

    const scrollToPricing = () => {
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    };

    const linkPembelian = "http://lynk.id/kangmasis/xq91xyr80x0k";

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300 relative">
                
                {/* --- MODAL DISCLAIMER --- */}
                {isDisclaimerOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsDisclaimerOpen(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-gray-200 dark:border-gray-700" onClick={e => e.stopPropagation()}>
                            <button 
                                onClick={() => setIsDisclaimerOpen(false)} 
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors bg-gray-100 dark:bg-gray-700 rounded-full p-1"
                            >
                                <X size={20} />
                            </button>
                            
                            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-4">
                                <ShieldAlert className="text-orange-500"/> Disclaimer & Privasi
                            </h3>
                            
                            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                                    <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-1">1. Privasi Data</h4>
                                    <p className="text-xs leading-relaxed">Foto yang Anda upload diproses oleh AI Google Cloud secara real-time untuk keperluan pengeditan sesi ini saja. Kami tidak menyimpan foto Anda secara permanen di server publik.</p>
                                </div>
                                
                                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800/50">
                                    <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-1">2. Hak Cipta</h4>
                                    <p className="text-xs leading-relaxed">Pengguna bertanggung jawab penuh atas hak cipta foto produk yang diupload. Dilarang mengupload konten ilegal atau melanggar norma.</p>
                                </div>

                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50">
                                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-1">3. Batasan AI</h4>
                                    <p className="text-xs leading-relaxed">Aplikasi ini berbasis teknologi AI Gemini, sehingga ada kemungkinan melakukan kesalahan atau berhalusinasi. Jika itu terjadi, silakan ulangi langkah atau prosesnya.</p>
                                </div>

                                <div className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                                    <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1">4. Batasan Aplikasi</h4>
                                    <p className="text-xs leading-relaxed">Aplikasi ini dibuat pada lingkungan Gemini, sehingga pemakaiannya mengikuti terms of service dari Gemini dan Google.</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 text-right">
                                <button onClick={() => setIsDisclaimerOpen(false)} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm">
                                    Saya Mengerti
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- NAVBAR --- */}
                <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Logo className="w-10 h-10 shadow-md hover:scale-105 transition-transform" />
                            <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">Pro Studio Foto</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={toggleTheme} 
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button 
                                onClick={scrollToPricing}
                                className="hidden md:block px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-indigo-500/30"
                            >
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                </nav>

                {/* --- HERO SECTION --- */}
                <header className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 dark:bg-indigo-500/20"></div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 text-xs font-bold mb-6 border border-indigo-100 dark:border-indigo-800 tracking-wide">
                            🔥 REVOLUSI FOTO PRODUK UMKM
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
                            Stop Buang Waktu & Uang.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                Foto Produk Profesional Kini Otomatis.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Ubah foto HP biasa menjadi aset visual kelas studio, resize otomatis ke semua sosmed, dan buat desain promosi dalam hitungan detik dengan AI.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button 
                                onClick={scrollToPricing}
                                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2 group"
                            >
                                Ambil Diskon 50% Sekarang <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="#masalah" className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                Pelajari Dulu
                            </a>
                        </div>
                        
                        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900 flex items-center justify-center overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p>Insya Allah akan dipercaya oleh <span className="font-bold text-gray-900 dark:text-white">1000+</span> UMKM</p>
                        </div>
                    </div>
                </header>

                {/* --- PAIN POINTS SECTION (The Problem) --- */}
                <section id="masalah" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Jujur Saja, Foto Produk itu <span className="text-red-500">Melelahkan</span></h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Apakah Anda masih mengalami 4 masalah klasik ini saat mencoba menaikkan level branding bisnis Anda?
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Pain 1 */}
                            <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-red-100 dark:bg-red-800/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                                    <Camera size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">1. Proses Ribet</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Butuh kamera mahal, teknik pencahayaan rumit, properti, dan background studio. Salah setting sedikit, foto jadi gelap dan tidak menarik.
                                </p>
                            </div>

                            {/* Pain 2 */}
                            <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-800/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                                    <DollarSign size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">2. Biaya Mahal</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Sewa fotografer profesional? Biayanya puluhan ribu hingga jutaan. Belum lagi biaya berulang jika Anda punya varian produk baru setiap bulan. Boncos!
                                </p>
                            </div>

                            {/* Pain 3 */}
                            <div className="p-6 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-800/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4">
                                    <Crop size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">3. Pusing Resize</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Satu foto harus diedit jadi 1:1 (Feed), 9:16 (Story/TikTok), 16:9 (Youtube). Pekerjaan manual yang membosankan dan memakan waktu.
                                </p>
                            </div>

                            {/* Pain 4 */}
                            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600 hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 mb-4">
                                    <Palette size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">4. Gaptek Desain</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Ingin bikin brosur atau flyer promo tapi tidak punya skill desain grafis? Hasilnya malah terlihat amatir dan menurunkan citra brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SOLUTION SECTION --- */}
                <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold mb-4">
                                    SOLUSI ALL-IN-ONE
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
                                    <span className="text-indigo-600 dark:text-indigo-400">Pro Studio Foto</span><br/>
                                    Fotografer & Desainer Pribadi Anda.
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    Lupakan kamera mahal. Cukup upload foto mentah, dan biarkan AI kami melakukan keajaiban dalam hitungan detik.
                                </p>
                                
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Auto Fix & Retouch: Pencahayaan & detail sempurna instan.",
                                        "Smart Expand: Ubah rasio foto tanpa merusak objek utama.",
                                        "Flyer Prompt Generator: Otomatis buat prompt detail untuk membuat poster iklan otomatis dengan copywriting AI",
                                        "Sekali Bayar: Tidak ada biaya langganan bulanan yang menjebak."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                                                <CheckCircle size={12} />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button onClick={scrollToPricing} className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold hover:opacity-90 transition-opacity">
                                    Miliki Akses Sekarang
                                </button>
                            </div>
                            
                            {/* Visual Mockup Abstract */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl rotate-3 opacity-20 dark:opacity-40"></div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 relative border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="text-xs font-mono text-gray-400">AI Processing...</div>
                                    </div>
                                    
                                    {/* Mockup Comparison */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2 relative overflow-hidden group">
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-bold z-10">BEFORE</div>
                                                <XCircle size={32} className="text-gray-400 opacity-50" />
                                            </div>
                                            <p className="text-center text-xs font-bold text-gray-500">Foto HP Gelap</p>
                                        </div>
                                        <div>
                                            <div className="aspect-[3/4] bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-2 relative overflow-hidden border-2 border-indigo-500 shadow-lg shadow-indigo-500/20">
                                                 <div className="absolute inset-0 flex items-center justify-center text-indigo-600 font-bold z-10">AFTER</div>
                                                <CheckCircle size={32} className="text-indigo-600" />
                                            </div>
                                            <p className="text-center text-xs font-bold text-indigo-600 dark:text-indigo-400">Studio Quality</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-2">
                                        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                                        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PRICING / OFFER SECTION --- */}
                <section id="pricing" className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Penawaran Spesial Terbatas</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Investasi sekali seumur hidup untuk visual brand Anda.
                            </p>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-indigo-500 relative transform transition-all hover:scale-[1.01]">
                            {/* Ribbon */}
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-8 translate-y-4 shadow-md z-10">
                                50% OFF
                            </div>

                            <div className="p-8 md:p-12 text-center">
                                <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">Lifetime Access</h3>
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <span className="text-2xl text-gray-400 line-through decoration-red-500 decoration-2 font-semibold">Rp 150.000</span>
                                    <span className="text-5xl md:text-6xl font-black text-indigo-600 dark:text-indigo-400">Rp 75.000</span>
                                </div>
                                
                                {/* PROMO BADGE (Replacing Progress Bar) */}
                                <div className="flex items-center justify-center gap-2 mb-8 bg-red-50 dark:bg-red-900/20 py-2 px-4 rounded-full max-w-fit mx-auto border border-red-100 dark:border-red-800 animate-pulse">
                                    <Gift size={20} className="text-red-500 shrink-0" />
                                    <span className="text-sm font-bold text-red-600 dark:text-red-400">Promo khusus untuk 50 pembeli pertama</span>
                                </div>

                                <ul className="text-left max-w-sm mx-auto space-y-3 mb-8 text-gray-600 dark:text-gray-300">
                                    <li className="flex gap-2"><CheckCircle size={20} className="text-indigo-500 shrink-0" /> <span>Akses Selamanya (Lifetime)</span></li>
                                    <li className="flex gap-2"><CheckCircle size={20} className="text-indigo-500 shrink-0" /> <span>Unlimited AI Edits</span></li>
                                    <li className="flex gap-2"><CheckCircle size={20} className="text-indigo-500 shrink-0" /> <span>Semua Fitur Premium</span></li>
                                    <li className="flex gap-2"><CheckCircle size={20} className="text-indigo-500 shrink-0" /> <span>Gratis Update Fitur Masa Depan</span></li>
                                </ul>

                                <a 
                                    href={linkPembelian}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-extrabold text-xl shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all transform active:scale-95 animate-pulse"
                                >
                                    AMBIL DISKON SEKARANG
                                </a>
                                <p className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
                                    <ShieldCheck size={14} /> Garansi Transaksi Aman via Lynk.id
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 text-center text-sm text-gray-500">
                                Bukan langganan bulanan. Cukup bayar sekali untuk selamanya.
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Logo className="w-8 h-8 opacity-80" />
                            <span className="font-bold text-xl text-gray-900 dark:text-white">Pro Studio Foto</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-md mx-auto">
                            Aplikasi berbasis AI untuk membantu UMKM Indonesia meningkatkan penjualan melalui foto produk yang berkualitas.
                        </p>
                        
                        {/* Contact Buttons */}
                        <div className="flex justify-center gap-4 mb-8">
                            <a href="https://wa.me/628121083060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-green-500/30">
                                <MessageCircle size={16} /> WhatsApp Support
                            </a>
                            <a href="mailto:mail@isparmo.com" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-bold transition-all">
                                <Mail size={16} /> Email Support
                            </a>
                        </div>

                        {/* Modal Trigger */}
                        <button 
                            onClick={() => setIsDisclaimerOpen(true)}
                            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 underline underline-offset-4 mb-8 transition-colors"
                        >
                            Baca Disclaimer & Privasi
                        </button>

                        <div className="text-xs text-gray-400">
                            &copy; 2025 Pro Studio Foto by <a href="https://page.isparmo.com" className="hover:text-indigo-500 underline">ISPARMO</a>. All rights reserved.
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
