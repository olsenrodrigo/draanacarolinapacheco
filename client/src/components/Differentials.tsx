import { motion } from "framer-motion";
import { GraduationCap, Eye, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * WHITELABEL: Personalizar
 * - Titulo e subtitulo
 * - Cards de diferenciais (icone, titulo, descricao)
 * - Cores: #5B8C9B (primary), #2C3E50 (secondary), #EDF2F4 (muted)
 */

export default function Differentials() {
  const { t } = useTranslation();

  /* WHITELABEL: Diferenciais do profissional */
  const differentials = [
    {
      icon: GraduationCap,
      title: t("differentials.diff1Title"),
      description: t("differentials.diff1Description"),
    },
    {
      icon: Eye,
      title: t("differentials.diff2Title"),
      description: t("differentials.diff2Description"),
    },
    {
      icon: Heart,
      title: t("differentials.diff3Title"),
      description: t("differentials.diff3Description"),
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#EDF2F4" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>{t("differentials.badge")}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              {t("differentials.title")}
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              {t("differentials.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border text-center"
                style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #5B8C9B 0%, #2C3E50 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-4" style={{ color: "#212529" }}>
                  {item.title}
                </h4>

                <p className="leading-relaxed" style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
