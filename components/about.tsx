import { salonData } from "@/lib/salon-data";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-rose-900/10 border border-rose-100">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                alt="Lash artist at work in a clean studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-950">
              {salonData.about.title}
            </h2>
            {salonData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <ul className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Premium adhesives",
                "Custom lash mapping",
                "Relaxing private room",
                "Strict hygiene standards",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
