import { useState } from 'react';
import { Camera, X, PlayCircle, Sparkles, HelpCircle } from 'lucide-react';
import { IMAGES } from '../data';
import { FoodImage } from '../types';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<FoodImage | null>(null);

  return (
    <section id="galeria" className="py-16 bg-stone-900 text-white border-t border-stone-830">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-stone-800 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-stone-700">
            <Camera size={13} className="text-red-500 animate-pulse" />
            <span>Galeria Zdjęć Zapiek-ANKA</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            Prawdziwe Zdjęcia Naszych Dań
          </h2>
          <p className="text-stone-400 mt-2 font-medium">
            Sfotografowane ze smakiem w naszym lokalu w Gostyninie. Nasze zapiekanki, burgery i hot-dogi szykowane są dokładnie tak, jak widzisz na zdjęciach!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IMAGES.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-lg hover:border-amber-400 group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-900 border-b border-stone-850">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Hover State Glass */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-amber-400 text-stone-950 font-black p-3.5 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    🔍 Zobacz z bliska
                  </div>
                </div>

                {/* Picture Label Tag */}
                <div className="absolute top-3 left-3 bg-red-650 bg-red-600 border border-red-800 text-white text-[10px] font-black px-2.5 py-1 rounded-lg uppercase font-mono tracking-widest">
                  FOTO {idx + 1}
                </div>
              </div>

              {/* Title & Description under photo */}
              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-base text-amber-300 uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                  {img.title}
                </h3>
                {img.description && (
                  <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed">
                    {img.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-stone-900 text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-800 max-w-3xl w-full relative transform scale-95 sm:scale-100 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-stone-950/80 backdrop-blur hover:bg-red-600 rounded-full border border-stone-800 flex items-center justify-center transition-colors text-white cursor-pointer"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>

              <div className="aspect-[4/3] w-full bg-stone-950 relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-2 bg-stone-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <h4 className="text-xl font-bold uppercase text-amber-300 tracking-tight">
                    {selectedImage.title}
                  </h4>
                </div>
                {selectedImage.description && (
                  <p className="text-sm text-stone-300 font-medium leading-relaxed">
                    {selectedImage.description}
                  </p>
                )}
                
                <div className="pt-3 border-t border-stone-800 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
                  <span>Zapiek-ANKA Legionów Polskich 6B, Gostynin</span>
                  <a 
                    href="tel:516921001" 
                    className="text-amber-400 font-black uppercase hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Zadzwoń i zamów gorące: 516 921 001
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
