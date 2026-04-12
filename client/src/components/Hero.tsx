import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * Dra. Ana Carolina Pacheco Nekrycz — Pediatra e Pneumologista Pediátrica
 */

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { t } = useTranslation();

  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Dra. Ana Carolina Pacheco Nekrycz"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(26, 58, 42, 0.92), rgba(26, 58, 42, 0.75), rgba(26, 58, 42, 0.4))" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 pt-32 sm:pt-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-2 backdrop-blur-sm border rounded-full mb-6"
              style={{ backgroundColor: "rgba(90, 154, 125, 0.2)", borderColor: "rgba(90, 154, 125, 0.3)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#EAF4EF" }}>
                {t("hero.badge")}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("hero.titleStart")}
              <span style={{ color: "#5a9a7d" }}>
                {t("hero.titleHighlight")}
              </span>
            </h2>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#EAF4EF" }}>
              {t("hero.subtitle")}
            </p>

            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(234, 244, 239, 0.85)" }}>
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("contact")}
                className="group px-8 py-4 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "#5a9a7d" }}
              >
                <Calendar size={20} />
                {t("hero.ctaSchedule")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-8 py-4 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <User size={20} />
                {t("hero.ctaSpecialist")}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16 pt-6 sm:pt-10 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            {[
              { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
              { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
              { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm" style={{ color: "#EAF4EF" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
