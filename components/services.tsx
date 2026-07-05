import { Sparkles } from "lucide-react";
import { salonData } from "@/lib/salon-data";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-rose-700 font-semibold text-sm uppercase tracking-wide">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-rose-950">
            Lashes & brows, perfected.
          </h2>
          <p className="mt-4 text-slate-600">
            Every service begins with a short consultation so we choose the
            right style, curl, and length for your features.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {salonData.services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl border border-rose-100 bg-rose-50/50 hover:bg-rose-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-rose-950 group-hover:text-rose-700 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-rose-700">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
