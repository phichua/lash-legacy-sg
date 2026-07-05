import { Instagram, Heart } from "lucide-react";
import { salonData } from "@/lib/salon-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-rose-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-rose-950">{salonData.name}</p>
            <p className="text-sm text-slate-500">
              {salonData.tagline} · {salonData.area}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={salonData.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-rose-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rose-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="flex items-center gap-1">
            © {year} {salonData.name}. Made with{" "}
            <Heart className="w-4 h-4 text-rose-500 fill-current" />{" "}
            in Singapore.
          </p>
          <p>
            Photos via{" "}
            {salonData.imageCredits.map((credit, i) => (
              <span key={credit.name}>
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-rose-700 hover:underline"
                >
                  {credit.name}
                </a>
                {i < salonData.imageCredits.length - 1 && " · "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
