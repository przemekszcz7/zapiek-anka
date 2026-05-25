import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import Reviews from './components/Reviews';
import InfoSection from './components/InfoSection';
import { Phone, MapPin, Facebook, Compass, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-400 selection:text-stone-900 scroll-smooth flex flex-col justify-between">
      
      {/* Upper Navigation & Status Banner */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Visual Greetings Banner & Promo */}
        <Hero />

        {/* Dynamic Categorized Food List */}
        <MenuSection />

        {/* Interactive Food Imagery */}
        <GallerySection />

        {/* Facebook Feedback & Verification Cards */}
        <Reviews />

        {/* Real Address and Google Iframe integration */}
        <InfoSection />
      </main>

      {/* Footer Block */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-4 sm:px-6 lg:px-8 border-t-8 border-amber-500 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & description (ColSpan 4) */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="text-2xl font-black tracking-tighter text-white">
                Zapiek-<span className="text-amber-400">ANKA</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Chrupiące zapiekanki z pieca i najlepsze szybkie jedzenie w Gostyninie. Starannie dobrane wędliny, świeże warzywa i rzemieślnicze sosy każdego dnia.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
              <a 
                href={RESTAURANT_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="Szybki kontakt facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (ColSpan 4) */}
          <div className="md:col-span-4 text-center md:text-left space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider font-mono">Nasza Oferta</h4>
            <ul className="text-xs space-y-2 font-medium">
              <li>
                <span className="hover:text-amber-400 transition-colors uppercase cursor-default block">Zapiekanki Małe i Duże</span>
              </li>
              <li>
                <span className="hover:text-amber-400 transition-colors uppercase cursor-default block">Grillowane Hot-Dogi z dodatkami</span>
              </li>
              <li>
                <span className="hover:text-amber-400 transition-colors uppercase cursor-default block">Burgery drobiowe i CheeseBurgery</span>
              </li>
              <li>
                <span className="hover:text-amber-400 transition-colors uppercase cursor-default block">Frytki, Nuggetsy, Lody rzemieślnicze</span>
              </li>
            </ul>
          </div>

          {/* Contact coordinates (ColSpan 4) */}
          <div className="md:col-span-4 text-center md:text-left space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider font-mono">Dane Kontaktowe</h4>
            
            <div className="text-xs space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-amber-400" />
                <span>Legionów Polskich 6B, Gostynin 09-500</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={14} className="text-amber-400" />
                <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-amber-400 transition-colors">
                  Telefon: {RESTAURANT_INFO.phone}
                </a>
              </div>
              
              <div className="pt-2 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-1 bg-stone-900 border border-stone-800 text-[10px] text-amber-300 font-mono px-3 py-1.5 rounded-xl uppercase">
                  <Sparkles size={11} className="text-red-500 animate-pulse" />
                  Smak, który łączy pokolenia!
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower block bar */}
        <div className="mt-12 pt-6 border-t border-stone-900 text-center text-xs text-stone-500 font-medium font-mono space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Zapiek-ANKA Gostynin. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex justify-center items-center gap-4 text-[10px] text-stone-600">
            <span>Strona przystosowana do urządzeń mobilnych 📱</span>
            <span>|</span>
            <span>Real-time Status Checker ⚡</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
