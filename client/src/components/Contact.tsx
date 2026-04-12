import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * WHITELABEL: Personalizar
 * - Informacoes de contato (endereco, telefone, email)
 * - Placeholder da mensagem
 * - Cores: #5B8C9B (primary), #2C3E50 (secondary), #EDF2F4 (muted)
 */

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#EFEFEF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>{t("contact.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            {t("contact.title")}
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WHITELABEL: Informacoes de contato */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EDF2F4" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#5B8C9B" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>{t("contact.addressLabel")}</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    {t("contact.addressLine1")}<br />
                    {t("contact.addressLine2")}<br />
                    {t("contact.addressLine3")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EDF2F4" }}>
                  <Phone className="w-5 h-5" style={{ color: "#5B8C9B" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>{t("contact.phoneLabel")}</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    {t("contact.phoneLine1")}<br />
                    {t("contact.phoneLine2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EDF2F4" }}>
                  <Mail className="w-5 h-5" style={{ color: "#5B8C9B" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>{t("contact.emailLabel")}</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    {t("contact.emailAddress")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#2C3E50" }}>{t("contact.formSuccess")}</h4>
                  <p className="mb-6" style={{ color: "#3C3C3C" }}>{t("contact.formSuccessMessage")}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 rounded-lg border font-medium transition-colors hover:bg-gray-50 cursor-pointer"
                    style={{ borderColor: "rgba(91, 140, 155, 0.3)", color: "#2C3E50" }}
                  >
                    {t("contact.formSendAnother")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>{t("contact.formName")}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(91, 140, 155, 0.3)" }}
                        placeholder={t("contact.formNamePlaceholder")}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>{t("contact.formPhone")}</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(91, 140, 155, 0.3)" }}
                        placeholder={t("contact.formPhonePlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>{t("contact.formEmail")}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                      style={{ borderColor: "rgba(91, 140, 155, 0.3)" }}
                      placeholder={t("contact.formEmailPlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>{t("contact.formMessage")}</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all resize-none outline-none"
                      style={{ borderColor: "rgba(91, 140, 155, 0.3)" }}
                      placeholder={t("contact.formMessagePlaceholder")}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">{t("contact.formError")}</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #5B8C9B 0%, #2C3E50 100%)" }}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> {t("contact.formSending")}</>
                    ) : (
                      <>{t("contact.formSubmit")} <Send size={20} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
