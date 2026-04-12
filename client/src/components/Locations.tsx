import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * Dra. Ana Carolina Pacheco Nekrycz — Pediatra e Pneumologista Pediátrica
 */

export default function Locations() {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, text: t("locations.feature1") },
    { icon: Clock, text: t("locations.feature2") },
    { icon: Users, text: t("locations.feature3") },
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(90, 154, 125, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1a3a2a" }}>{t("locations.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            {t("locations.title")}
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            {t("locations.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(90, 154, 125, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EAF4EF" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#5a9a7d" }} />
                  </div>
                  <span className="font-medium pt-2" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border"
              style={{ borderColor: "rgba(90, 154, 125, 0.2)", backgroundColor: "rgba(234, 244, 239, 0.5)" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#5a9a7d" }} />
                <div>
                  <p className="font-bold" style={{ color: "#212529" }}>{t("locations.addressLabel")}</p>
                  <p style={{ color: "#3C3C3C" }}>
                    {t("locations.addressLine1")}<br />
                    {t("locations.addressLine2")}<br />
                    {t("locations.addressLine3")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(90, 154, 125, 0.15)", minHeight: "480px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4567890123456!2d-46.66789012345678!3d-23.523456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef87654321abc%3A0x1234567890abcdef!2sAv.%20Marqu%C3%AAs%20de%20S%C3%A3o%20Vicente%2C%202219%20-%20V%C3%A1rzea%20da%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001139-001!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "480px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("locations.mapTitle")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
