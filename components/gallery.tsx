import { salonData } from "@/lib/salon-data";

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-950">
            Our Work
          </h2>
          <p className="mt-4 text-slate-600">
            A glimpse of the lashes and brows we create for clients across
            Singapore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {salonData.gallery.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden border border-rose-100 shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
