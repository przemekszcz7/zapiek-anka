import { useState, useEffect } from 'react';
import { Phone, Clock, Facebook, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function Header() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateOpenStatus = () => {
      try {
        // Safe conversion to Poland Time
        const parts = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Europe/Warsaw',
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
          weekday: 'long'
        }).formatToParts(new Date());

        const hourVal = parts.find(p => p.type === 'hour')?.value;
        const minVal = parts.find(p => p.type === 'minute')?.value;
        const weekdayVal = parts.find(p => p.type === 'weekday')?.value;

        const hour = hourVal ? parseInt(hourVal, 10) : 12;
        const minute = minVal ? parseInt(minVal, 10) : 0;
        const weekday = weekdayVal || 'Monday';

        // Check opening days
        const isSunday = weekday === 'Sunday';
        
        if (isSunday) {
          setIsOpenNow(false);
          setStatusText('Dziś Zamknięte (Niedziela)');
        } else {
          // Mon-Sat: 11:00 - 20:00
          const currentDecimalTime = hour + minute / 60;
          if (currentDecimalTime >= 11 && currentDecimalTime < 20) {
            setIsOpenNow(true);
            setStatusText(`Otwarte • Zamknięcie o 20:00`);
          } else {
            setIsOpenNow(false);
            if (currentDecimalTime < 11) {
              setStatusText(`Zamknięte • Otwieramy o 11:00`);
            } else {
              setStatusText(`Zamknięte • Otwieramy jutro o 11:00`);
            }
          }
        }
      } catch (e) {
        // Fallback
        const now = new Date();
        const currentHour = now.getHours();
        const currentDay = now.getDay(); // 0 is Sunday
        if (currentDay === 0) {
          setIsOpenNow(false);
          setStatusText('Dziś Zamknięte');
        } else if (currentHour >= 11 && currentHour < 20) {
          setIsOpenNow(true);
          setStatusText('Otwarte • Zapraszamy do 20:00');
        } else {
          setIsOpenNow(false);
          setStatusText('Lokal Zamknięty');
        }
      }
    };

    updateOpenStatus();
    const interval = setInterval(updateOpenStatus, 30000); // update every 30s
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-amber-500 text-stone-900 shadow-md border-b-4 border-red-600 transition-all duration-300">
      {/* Top micro bar for phone & open status */}
      <div className="bg-stone-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></span>
            <span>{statusText}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:516921001" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone size={13} className="text-amber-400" />
              <span>Telefon: <strong className="text-amber-300">516 921 001</strong></span>
            </a>
            <span className="hidden md:inline-block">|</span>
            <span className="hidden md:inline-block flex items-center gap-1">
              <MapPin size={13} className="text-amber-400" />
              <span>Gostynin, Legionów Polskich 6B</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-white rounded-full border-2 border-red-600 shadow-inner flex items-center justify-center p-0.5 overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src="https://i.ibb.co/B23Q2Vhb/302013786-100303679490556-4128682625964984836-n.jpg" 
                alt="Logo Zapiek-ANKA" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block font-black text-2xl sm:text-3xl tracking-tighter text-stone-950 drop-shadow-[0_2px_1px_rgba(255,255,255,0.7)]">
                Zapiek-<span className="text-red-700">ANKA</span>
              </span>
              <span className="hidden sm:block text-xs font-bold tracking-wider uppercase text-red-800 -mt-1">
                Gostynin • Szybko i Pysznie
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-bold text-stone-950 text-sm">
            <button 
              onClick={() => scrollToSection('o-nas')}
              className="px-3 py-2 hover:bg-white/25 rounded-lg transition-all hover:text-red-800 cursor-pointer"
            >
              O nas
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="px-3 py-2 hover:bg-white/25 rounded-lg transition-all hover:text-red-800 cursor-pointer"
            >
              Nasze Menu
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="px-3 py-2 hover:bg-white/25 rounded-lg transition-all hover:text-red-800 cursor-pointer"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('opinie')}
              className="px-3 py-2 hover:bg-white/25 rounded-lg transition-all hover:text-red-800 cursor-pointer"
            >
              Opinie
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="px-3 py-2 hover:bg-white/25 rounded-lg transition-all hover:text-red-800 cursor-pointer"
            >
              Kontakt
            </button>
          </nav>

          {/* Social CTA & Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={RESTAURANT_INFO.facebookUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
              title="Odwiedź nasz Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="tel:516921001" 
              className="flex items-center gap-2 bg-red-650 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-black uppercase tracking-wider shadow transition-transform transform active:scale-95 border-b-2 border-red-800"
            >
              <Phone size={16} className="animate-bounce" />
              <span>Zadzwoń: 516 921 001</span>
            </a>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex items-center md:hidden gap-2">
            <a 
              href={RESTAURANT_INFO.facebookUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Facebook size={16} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-900 hover:bg-white/25 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-amber-500 border-t border-amber-600 py-4 px-6 space-y-3 font-semibold text-stone-950 uppercase tracking-wide text-center">
          <button 
            onClick={() => scrollToSection('o-nas')}
            className="block w-full py-2 hover:bg-red-600 hover:text-white rounded-lg transition-all"
          >
            O nas
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="block w-full py-2 hover:bg-red-600 hover:text-white rounded-lg transition-all"
          >
            Nasze Menu
          </button>
          <button 
            onClick={() => scrollToSection('galeria')}
            className="block w-full py-2 hover:bg-red-600 hover:text-white rounded-lg transition-all"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection('opinie')}
            className="block w-full py-2 hover:bg-red-600 hover:text-white rounded-lg transition-all"
          >
            Opinie
          </button>
          <button 
            onClick={() => scrollToSection('kontakt')}
            className="block w-full py-2 hover:bg-red-600 hover:text-white rounded-lg transition-all"
          >
            Kontakt
          </button>
          <div className="pt-2 border-t border-amber-600">
            <a 
              href="tel:516921001" 
              className="flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-xl font-bold uppercase shadow transition-all duration-200"
            >
              <Phone size={18} />
              Zadzwoń: 516 921 001
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
