import { Star, Facebook, ThumbsUp, Heart, MessageSquare } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data';

export default function Reviews() {
  return (
    <section id="opinie" className="py-16 bg-amber-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-blue-800 uppercase bg-blue-105 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full inline-flex items-center gap-1">
            <Facebook size={12} className="text-blue-700" />
            <span>Opinie z Facebooka</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 tracking-tight">
            Co Mówią Nasi Klienci?
          </h2>
          <p className="text-stone-600 mt-2 font-medium">
            Nasze zapiekanki zyskały miano ulubionych przekąsek w Gostyninie. Oto opinie pozostawione przez Gości na naszym profilu społecznościowym!
          </p>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border-2 border-stone-100 hover:border-amber-300 hover:shadow-lg transition-all duration-350 flex flex-col justify-between relative transform hover:-translate-y-1 block"
            >
              {/* Quote bubble decor */}
              <div className="absolute -top-4 right-6 text-5xl font-serif text-amber-200/50 select-none">
                ”
              </div>

              <div className="space-y-4">
                {/* Stars and Rating */}
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-black text-amber-700 ml-1">5.0</span>
                </div>

                {/* Content Text */}
                <p className="text-stone-750 text-sm sm:text-base italic leading-relaxed font-medium">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-stone-400 font-mono">
                    Poleca na Facebooku 
                  </span>
                </div>

                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs shadow">
                  <Facebook size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FB Call to Action Box */}
        <div className="mt-12 bg-stone-900 rounded-3xl p-6 sm:p-8 text-white border-2 border-stone-950 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>Znasz już smak Zapiek-ANKA?</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-350 font-medium">
              Zostaw swoją opinię na naszym oficjalnym profilu. Bardzo cenimy każdą wskazówkę, a Twoje słowa motywują nas do wypiekania jeszcze lepszych zapiekanek!
            </p>
          </div>

          <a 
            href={RESTAURANT_INFO.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-blue-650 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow transition-transform transform active:scale-95 flex items-center gap-2 cursor-pointer border-b-2 border-blue-900"
          >
            <Facebook size={16} />
            <span>Napisz recenzję</span>
          </a>
        </div>

      </div>
    </section>
  );
}
