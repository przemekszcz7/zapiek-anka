import { ChevronRight, Phone, Clock, Flame, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="o-nas" className="relative bg-gradient-to-b from-amber-500 via-amber-400 to-amber-50 overflow-hidden py-12 lg:py-20 border-b border-stone-200">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 leading-none">
              Prawdziwe, chrupiące <br className="hidden sm:inline" />
              <span className="text-red-700 underline decoration-wavy decoration-amber-300">zapiekanki z pieca</span>
              <br />oraz pyszne burgery!
            </h1>

            <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Zapraszamy do <strong className="text-stone-950">Zapiek-ANKA</strong> Gostynin! 
              Odkryj genialne zapiekanki z chrupiącą bagietką i mnóstwem ciągnącego sera. 
              Mamy też hot-dogi z grilla, soczyste burgery drobiowe, chrupiące frytki, nuggets, na miejscu lody rzemieślnicze, chłodne napoje i słodycze!
            </p>

            {/* Quick Product Badge Row */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-stone-900 uppercase tracking-widest mb-3 font-mono">Nasze Specjały:</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  'Zapiekanki', 'Hot-dogi', 'Hamburgery', 'Frytki', 'Kebab', 'Lody', 'Napoje', 'Słodycze'
                ].map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-stone-900 text-amber-300 font-bold rounded-xl text-xs sm:text-sm shadow-sm hover:scale-105 transition-all cursor-default flex items-center gap-1 border border-stone-800"
                  >
                    <Sparkles size={11} className="text-red-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <button 
                onClick={scrollToMenu}
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl shadow-lg transition-all text-base tracking-wider uppercase flex items-center justify-center gap-2 border-b-4 border-red-800 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Zobacz Menu</span>
                <ChevronRight size={20} />
              </button>
              
              <a 
                href="tel:516921001"
                className="w-full sm:w-auto px-8 py-4 bg-stone-950 hover:bg-stone-850 text-amber-300 font-black rounded-2xl shadow-lg transition-all text-base tracking-wider uppercase flex items-center justify-center gap-2 border-b-4 border-stone-800 transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Phone size={18} className="text-amber-400" />
                <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Info Info */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-stone-900 font-bold font-mono">
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-red-700" />
                <span>Pon - Sob: 11:00 - 20:00</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                <span>Niedziela: Zamknięte</span>
              </div>
            </div>

          </div>

          {/* Tasty Graphic Right Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Round glow */}
            <div className="absolute -inset-4 bg-red-650/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Main Interactive Stack Frame */}
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border-4 border-stone-950 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                <img 
                  src="https://i.ibb.co/39rpnv4L/702695600-941795865336306-2844583075404380246-n.jpg"
                  alt="Zapiek-ANKA Gorąca Zapiekanka"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Special Price Flash Badge - moved outside overflow-hidden of the inner card so it protrudes over the black border nicely */}
              <div className="absolute -top-5 -right-5 w-18 h-18 bg-amber-400 border-4 border-stone-950 rounded-full flex flex-col items-center justify-center shadow-2xl transform rotate-12 z-25 hover:scale-110 transition-transform duration-200">
                <span className="text-[10px] font-black uppercase text-stone-900 leading-none">Już od</span>
                <span className="text-xl font-black text-stone-950 leading-none mt-0.5">8,50</span>
                <span className="text-[11px] font-bold text-stone-900 leading-none">zł</span>
              </div>

              {/* Stats / trust lines below photo */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200">
                  <span className="block text-xs font-bold text-stone-800 uppercase tracking-widest">Szybko</span>
                  <span className="block text-lg font-black text-red-700">NA GORĄCO</span>
                </div>
                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200">
                  <span className="block text-xs font-bold text-stone-800 uppercase tracking-widest">Atrakcyjna</span>
                  <span className="block text-lg font-black text-red-700">CENA</span>
                </div>
              </div>

              {/* Decorative tape or banner */}
              <div className="absolute -top-5 -left-5 bg-yellow-400 text-stone-900 text-xs font-black py-1 px-4 border-2 border-stone-950 shadow transform -rotate-12 select-none">
                ŚWIEŻE SKŁADNIKI!
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
