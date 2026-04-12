import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * WHITELABEL: Personalizar
 * - Depoimentos de pacientes
 * - CTA de agendamento
 * - Endereco do consultorio
 * - Cores: #5B8C9B (primary), #2C3E50 (secondary), #EDF2F4 (muted)
 */

export default function FAQ() {
  const { t } = useTranslation();

  /* WHITELABEL: Depoimentos */
  const testimonials = [
    {
      text: t("faq.testimonial1Text"),
      name: t("faq.testimonial1Name"),
      detail: t("faq.testimonial1Detail"),
    },
    {
      text: t("faq.testimonial2Text"),
      name: t("faq.testimonial2Name"),
      detail: t("faq.testimonial2Detail"),
    },
    {
      text: t("faq.testimonial3Text"),
      name: t("faq.testimonial3Name"),
      detail: t("faq.testimonial3Detail"),
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#EDF2F4" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>{t("faq.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
            {t("faq.title")}
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            {t("faq.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#5B8C9B" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#5B8C9B" }} />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#5B8C9B" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #5B8C9B 0%, #2C3E50 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {t("faq.ctaTitle")}
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg" style={{ color: "#EDF2F4" }}>
            <span>{t("faq.ctaPrivate")}</span>
            <span>|</span>
            <span>{t("faq.ctaLocation")}</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(237, 242, 244, 0.8)" }}>
            {t("faq.ctaAddress")}
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#2C3E50" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("faq.ctaButton")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
