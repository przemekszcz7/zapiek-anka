import { MapPin, Phone, Clock, Compass, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function InfoSection() {
  return (
    <section id="kontakt" className="py-16 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-red-650 uppercase bg-red-100 text-red-800 px-3 py-1 rounded-full">
            Godziny & Lokalizacja
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 tracking-tight">
            Kontakt i Lokalizacja
          </h2>
          <p className="text-stone-600 mt-2 font-medium">
            Znajdziesz nas w samym sercu Gostynina. Złóż zamówienie telefonicznie, a odbierz je gorące o wybranej godzinie bez czekania w kolejce!
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Left: Contact, address, hours (ColSpan 5) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-900 shadow-xl space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Phone Line */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
                  <Phone size={22} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-stone-500 uppercase font-mono tracking-wider">Zamów telefonicznie:</h3>
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`} 
                    className="block text-2xl sm:text-3xl font-black text-stone-950 hover:text-red-700 transition-colors font-mono tracking-tight"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-stone-400 text-xs font-semibold leading-relaxed">
                    *Zadzwoń, a zapiekanki zaczną się piec natychmiast!
                  </span>
                </div>
              </div>

              {/* Address Line */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-stone-500 uppercase font-mono tracking-wider">Lokalizacja:</h3>
                  <p className="text-lg font-extrabold text-stone-900">
                    Legionów Polskich 6B
                  </p>
                  <p className="text-stone-600 font-semibold">
                    Gostynin 09-500
                  </p>
                  <a 
                    href={RESTAURANT_INFO.googleMapsLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-red-700 hover:text-red-950 hover:underline font-extrabold flex items-center gap-1 mt-1 uppercase"
                  >
                    <Compass size={12} />
                    <span>Nawiguj do lokalu &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Hours line */}
              <div className="flex items-start gap-4 pt-2 border-t border-stone-100">
                <div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
                  <Clock size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-stone-500 uppercase font-mono tracking-wider mb-2">Godziny otwarcia:</h3>
                  
                  <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-stone-800">
                    {RESTAURANT_INFO.openingHours.map((oh, index) => {
                      const isSunday = oh.day === 'Niedziela';
                      return (
                        <div 
                          key={index} 
                          className={`flex justify-between items-center py-1 border-b border-stone-50 ${isSunday ? 'text-red-600 font-black' : ''}`}
                        >
                          <span>{oh.day}</span>
                          <span className="font-mono">{oh.hours}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick takeaway safety tip */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
              <h4 className="text-xs font-black uppercase text-amber-800 flex items-center gap-1">
                <HelpCircle size={14} />
                Płatność
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed mt-1 font-semibold">
                W naszym lokalu zapłacisz zarówno **kartą / blikiem**, jak i **gotówką**. Obsługujemy zamówienia z odbiorem własnym na miejscu.
              </p>
            </div>

          </div>

          {/* Interactive Google Map: (ColSpan 7) */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl border-2 border-stone-900 shadow-xl overflow-hidden min-h-[300px] h-full flex flex-col justify-between">
            <div className="relative w-full flex-1 min-h-[320px] rounded-2xl overflow-hidden border border-stone-200 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0333926171215!2d19.460433212670676!3d52.4241926432011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b86d54d9e0797%3A0x70f6f741183a72da!2sLegion%C3%B3w%20Polskich%206B%2C%2009-500%20Gostynin!5e0!3m2!1spl!2spl!4v1779701872620!5m2!1spl!2spl" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Zapiek-ANKA Gostynin na mapie"
              ></iframe>
            </div>

            <div className="px-3 pt-3 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-2">
              <span>Wskazówka: Kliknij mapę, aby rozwinąć nawigację Google Maps</span>
              <span className="font-mono text-[10px]">Legionów Polskich 6B, Gostynin</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
