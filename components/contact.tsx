import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import { salonData } from "@/lib/salon-data";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-rose-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to book?
            </h2>
            <p className="text-rose-100 leading-relaxed">
              {salonData.bookingNote} We'll confirm your slot and send
              pre-care instructions so you get the most from your visit.
            </p>

            <a
              href={salonData.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-rose-950 hover:bg-rose-50 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5" />
              DM @lashlegacysg
            </a>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-900/50">
                <MapPin className="w-5 h-5 text-rose-300" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-rose-100 text-sm">{salonData.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-900/50">
                <Clock className="w-5 h-5 text-rose-300" />
              </div>
              <div>
                <p className="font-semibold">Opening Hours</p>
                {salonData.hours.map((h) => (
                  <p key={h.day} className="text-rose-100 text-sm">
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-900/50">
                <Phone className="w-5 h-5 text-rose-300" />
              </div>
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <p className="text-rose-100 text-sm">{salonData.phone}</p>
              </div>
            </div>

            {salonData.email && (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-rose-900/50">
                  <Mail className="w-5 h-5 text-rose-300" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-rose-100 text-sm">{salonData.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
