import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Briefcase, IdCard, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * Dra. Ana Carolina Pacheco Nekrycz — Pediatra e Pneumologista Pediátrica
 */

export default function About() {
  const { t } = useTranslation();

  const credentials = [
    { icon: Briefcase, text: t("about.cred1") },
    { icon: Award, text: t("about.cred2") },
    { icon: BookOpen, text: t("about.cred3") },
    { icon: GraduationCap, text: t("about.cred4") },
    { icon: Building2, text: t("about.cred5") },
    { icon: IdCard, text: t("about.cred6") },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EAF4EF" }}>
              <span className="text-sm font-medium" style={{ color: "#5a9a7d" }}>{t("about.badge")}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#212529" }}>
              {t("about.name")}
            </h3>

            <p className="text-lg mb-6 font-medium" style={{ color: "#5a9a7d" }}>
              {t("about.subtitle")}
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }} dangerouslySetInnerHTML={{ __html: t("about.bio1") }} />
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }} dangerouslySetInnerHTML={{ __html: t("about.bio2") }} />
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }} dangerouslySetInnerHTML={{ __html: t("about.bio3") }} />

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(90, 154, 125, 0.15)", backgroundColor: "rgba(234, 244, 239, 0.4)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EAF4EF" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#5a9a7d" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#212529" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              <img
                src="/doctor-portrait.jpg"
                alt="Dra. Ana Carolina Pacheco Nekrycz"
                className="w-full h-[550px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(90, 154, 125, 0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(90, 154, 125, 0.1)" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(90, 154, 125, 0.2)" }}
        >
          {[
            { value: t("about.indicator1Value"), label: t("about.indicator1Label") },
            { value: t("about.indicator2Value"), label: t("about.indicator2Label") },
            { value: t("about.indicator3Value"), label: t("about.indicator3Label") },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#1a3a2a" }}>{item.value}</div>
              <div className="text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-bold italic max-w-3xl mx-auto mb-8" style={{ color: "#1a3a2a" }}>
            "{t("about.quote")}"
          </blockquote>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "#5a9a7d" }}
          >
            {t("about.ctaButton")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
