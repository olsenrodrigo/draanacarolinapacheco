import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import App from "./App";
import { ORIGIN, llmsTxt, rotas, urlDaRota } from "@/content/seo";
import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

/**
 * Entrada usada só no build, por `script/prerender.ts`.
 *
 * Duas coisas justificam este arquivo:
 *  - crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) não
 *    executam JavaScript, e o HTML servido era um `<div id="root">` vazio;
 *  - `/`, `/en` e `/es` compartilhavam o mesmo <title> em português, então o
 *    Google as tratava como a mesma página e descartava duas.
 *
 * O i18n do cliente (`client/src/i18n.ts`) não serve aqui: ele usa o
 * LanguageDetector, que lê `localStorage` e `navigator`, e escreve em
 * `document.documentElement`. No build não existe nenhum dos três. Por isso o
 * SSR monta uma instância própria, com o idioma fixado pela rota.
 */

const recursos = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
};

const escapar = (texto: string) =>
  texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function renderizarRota(path: string) {
  const dados = rotas.find((r) => r.path === path);
  if (!dados) throw new Error(`Rota sem registro em content/seo.ts: ${path}`);

  const i18n = createInstance();
  i18n.use(initReactI18next).init({
    resources: recursos,
    lng: dados.lang,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    // Sem detector: o idioma vem da rota, não do ambiente.
    initImmediate: false,
  });

  const corpo = renderToString(
    <I18nextProvider i18n={i18n}>
      <Router ssrPath={path}>
        <App />
      </Router>
    </I18nextProvider>,
  );

  const url = urlDaRota(path);
  const imagem = `${ORIGIN}/opengraph.jpg`;

  const cabeca = [
    `<title>${escapar(dados.title)}</title>`,
    `<meta name="description" content="${escapar(dados.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapar(dados.title)}" />`,
    `<meta property="og:description" content="${escapar(dados.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${dados.lang === "pt" ? "pt_BR" : dados.lang === "es" ? "es_ES" : "en_US"}" />`,
    `<meta property="og:image" content="${imagem}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapar(dados.title)}" />`,
    `<meta name="twitter:description" content="${escapar(dados.description)}" />`,
    `<meta name="twitter:image" content="${imagem}" />`,
  ].join("\n    ");

  return { corpo, cabeca, htmlLang: dados.htmlLang };
}

export const caminhos = rotas.map((r) => r.path);
export const origem = ORIGIN;
export const llms = llmsTxt();
