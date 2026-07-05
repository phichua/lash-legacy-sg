import { Instagram } from "lucide-react";
import { salonData } from "@/lib/salon-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose-50">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-300 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
              </span>
              Now accepting appointments in {salonData.area}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-rose-950 leading-[1.1]">
              Wake up with lashes you'll love.
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-lg">
              {salonData.name} is a Singapore lash & brow studio crafting
              lightweight, eye-opening extensions, lifts, and brow shapes
              tailored to you.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={salonData.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Book on Instagram
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Explore Services
              </a>
            </div>

            <p className="text-sm text-slate-500">
              Follow us on Instagram: {" "}
              <a
                href={salonData.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-rose-700 hover:underline font-medium"
              >
                {salonData.instagramHandle}
              </a>
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/10 border border-rose-100">
              <img
                src="https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=80"
                alt="Elegant eyelash extension close-up"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-rose-100 hidden md:block">
              <p className="text-sm font-medium text-slate-500">Trusted by clients across Singapore</p>
              <p className="text-2xl font-bold text-rose-700">500+ sets done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
