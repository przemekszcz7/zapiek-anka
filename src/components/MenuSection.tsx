import { useState } from 'react';
import { Sparkles, Info, Phone } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('zapiekanki');



  // Add virtual pepperoni, romaburger and gd_grill elements into appropriate categories if they aren't pre-rendered in lists
  const getExtendedMenuItems = (catId: string): MenuItem[] => {
    const original = MENU_ITEMS[catId] || [];
    
    if (catId === 'zapiekanki') {
      const hasPep = original.some(i => i.id === 'zap_pepperoni');
      if (!hasPep) {
        return [
          {
            id: 'zap_pepperoni',
            name: 'ZAPIEKANKA PEPPERONI',
            ingredients: 'Tu aromatyczne plastry pepperoni łączą się z czarnymi oliwkami. Smak dopełnia zielone jalapeno w parze z piklami, ser mozzarella, pieczarki',
            priceSmall: 11.50,
            priceLarge: 21.00,
            takeawaySmall: 2.00,
            takeawayLarge: 3.00,
            isCustomizable: true
          },
          ...original
        ];
      }
    }

    if (catId === 'hamburgery') {
      const hasRoma = original.some(i => i.id === 'burg_roma');
      if (!hasRoma) {
        return [
          {
            id: 'burg_roma',
            name: 'ROMABURGER',
            ingredients: 'Bułka, Kotlet drobiowy, Ser mozzarella, Pomidor, Sałata, Czerwona cebula, Sosy do wyboru',
            priceSingle: 11.50,
            takeawaySingle: 1.05,
            isCustomizable: true
          },
          ...original
        ];
      }
    }

    if (catId === 'hotdogi') {
      const hasGrill = original.some(i => i.id === 'hd_grill');
      if (!hasGrill) {
        return [
          {
            id: 'hd_grill',
            name: 'HOT DOG GRILLOWANY',
            ingredients: 'Chrupiąca grillowana bagietka, Grillowana kiełbasa 100% mięsa, Pomidor, Ogórek kiszony, Czerwona cebula, Kapusta pekińska, Sosy do wyboru oraz prażona cebulka',
            priceSingle: 11.00,
            takeawaySingle: 1.50,
            isCustomizable: true
          },
          ...original
        ];
      }
    }

    return original;
  };

  const currentItems = getExtendedMenuItems(activeCategory);

  return (
    <section id="menu" className="py-16 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-100 text-red-800 px-3 py-1 rounded-full">
            Nasza Karta Smaków
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 tracking-tight">
            Menu Zapiek-ANKA
          </h2>
          <p className="text-stone-600 mt-2 font-medium">
            Zobacz nasze pyszne propozycje przygotowywane ze świeżych składników. Od chrupiących zapiekanek po soczyste burgery!
          </p>
        </div>

        {/* Category sticky-like navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 overflow-x-auto select-none no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 transform active:scale-95 flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap border-b-2 ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 border-amber-600 scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border-transparent hover:text-stone-900'
                }`}
              >
                <span>
                  {cat.id === 'zapiekanki' && '🥖'}
                  {cat.id === 'hamburgery' && '🍔'}
                  {cat.id === 'hotdogi' && '🌭'}
                  {cat.id === 'frytki_nuggetsy' && '🍟'}
                </span>
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => {
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md border-2 border-stone-100 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  {/* Decorative clean line */}
                  <div className="relative h-3 w-full bg-gradient-to-r from-amber-400 to-red-500"></div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-lg font-black text-stone-950 uppercase tracking-tight leading-tight">
                        {item.name}
                      </h3>
                    </div>

                    {item.ingredients && (
                      <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed">
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer and Pricing Display */}
                <div className="p-5 sm:p-6 pt-0 border-t border-stone-50 bg-stone-50/50">
                  {/* Small / Large pricing block */}
                  {item.priceSmall !== undefined && item.priceLarge !== undefined ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold font-mono">
                        <div className="bg-amber-100/50 p-3 rounded-2xl border border-amber-200">
                          <span className="block text-[10px] text-stone-600 uppercase tracking-wider font-sans font-black">MAŁA</span>
                          <span className="block text-xl font-black text-stone-950 mt-1">{item.priceSmall.toFixed(2)} zł</span>
                        </div>
                        <div className="bg-orange-100/50 p-3 rounded-2xl border border-orange-200">
                          <span className="block text-[10px] text-stone-600 uppercase tracking-wider font-sans font-black">DUŻA</span>
                          <span className="block text-xl font-black text-stone-950 mt-1">{item.priceLarge.toFixed(2)} zł</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Single pricing block */
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-2xl border border-stone-200">
                      <div>
                        <span className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider font-sans">Porcja Standardowa</span>
                      </div>
                      <span className="text-xl font-black text-stone-950 font-mono">
                        {item.priceSingle?.toFixed(2)} zł
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Notice */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-6 border border-amber-200 text-center max-w-2xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
              <Phone size={24} className="animate-pulse" />
            </div>
            <div className="text-left">
              <h4 className="text-base font-black text-stone-950">Masz ochotę na coś pysznego?</h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Zadzwoń do nas i odbierz gorące zamówienie osobiście: <strong className="text-stone-950">516 921 001</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
