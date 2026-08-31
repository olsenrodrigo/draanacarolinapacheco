// Registro de SEO/GEO por rota. Fonte única lida pelo pré-render
// (`client/src/entry-ssr.tsx` + `script/prerender.ts`).
//
// O `client/index.html` já trazia canonical, hreflang, keywords, geo e um
// JSON-LD extenso — tudo isso continua vindo de lá e vale para as três rotas.
// O que faltava era duas coisas:
//   1. corpo: o HTML servido era um `<div id="root">` vazio, invisível para
//      GPTBot, ClaudeBot, PerplexityBot e OAI-SearchBot, que não executam JS;
//   2. título por idioma: `/`, `/en` e `/es` serviam o MESMO título em
//      português, então para o Google as três eram a mesma página.

export const ORIGIN = "https://pediatradranacarolina.com.br";

export type Idioma = "pt" | "en" | "es";

export type Rota = {
  path: string;
  lang: Idioma;
  /** Valor do atributo `lang` do `<html>`. */
  htmlLang: string;
  title: string;
  description: string;
};

export const rotas: Rota[] = [
  {
    path: "/",
    lang: "pt",
    htmlLang: "pt-BR",
    title:
      "Dra. Ana Carolina Pacheco Nekrycz | Pediatra e Pneumologista Pediátrica — Barra Funda, Perdizes e Jardim das Perdizes",
    description:
      "Dra. Ana Carolina Pacheco Nekrycz — CRM 142040/SP. Pediatra e Pneumologista Pediátrica formada pela USP, com mais de 10 anos de experiência. Atendimento particular no Instituto Emunah, próximo ao Jardim das Perdizes, Perdizes e Barra Funda — São Paulo.",
  },
  {
    path: "/en",
    lang: "en",
    htmlLang: "en",
    title:
      "Dr. Ana Carolina Pacheco Nekrycz | Pediatrician and Pediatric Pulmonologist in São Paulo, Brazil",
    description:
      "Dr. Ana Carolina Pacheco Nekrycz (CRM 142040/SP), pediatrician and pediatric pulmonologist trained at USP, with over 10 years of experience. Private practice at Instituto Emunah, near Barra Funda and Perdizes, São Paulo.",
  },
  {
    path: "/es",
    lang: "es",
    htmlLang: "es",
    title:
      "Dra. Ana Carolina Pacheco Nekrycz | Pediatra y Neumóloga Pediátrica en São Paulo, Brasil",
    description:
      "Dra. Ana Carolina Pacheco Nekrycz (CRM 142040/SP), pediatra y neumóloga pediátrica formada en la USP, con más de 10 años de experiencia. Consulta particular en el Instituto Emunah, cerca de Barra Funda y Perdizes, São Paulo.",
  },
];

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

/**
 * `llms.txt` — markdown limpo, sem navegação nem script, que motores
 * generativos leem direto. Só em português: é onde está o público da médica.
 */
export function llmsTxt() {
  return [
    "# Dra. Ana Carolina Pacheco Nekrycz",
    "",
    "> Pediatra e Pneumologista Pediátrica em São Paulo/SP, formada pela USP, com",
    "> mais de 10 anos de experiência. Atendimento particular no Instituto Emunah,",
    "> no Jardim das Perdizes, atendendo também Perdizes e Barra Funda.",
    "> Registro: CRM 142040/SP.",
    "",
    "## Ficha",
    "",
    "- Profissional: Dra. Ana Carolina Pacheco Nekrycz",
    "- Especialidades: Pediatria e Pneumologia Pediátrica",
    "- Registro: CRM 142040/SP",
    "- Formação: Faculdade de Medicina da USP",
    "- Local de atendimento: Instituto Emunah — Av. Marquês de São Vicente, 2219,",
    "  Jardim das Perdizes, São Paulo/SP",
    "- Regiões atendidas: Jardim das Perdizes, Perdizes, Barra Funda e Várzea da Barra Funda",
    `- Site: ${ORIGIN}/`,
    "",
    "## Do que ela cuida",
    "",
    "- Puericultura: acompanhamento do crescimento e do desenvolvimento da criança",
    "- Asma infantil e outras doenças respiratórias da infância",
    "- Bronquiolite e infecções respiratórias do bebê",
    "- Introdução alimentar",
    "- Desenvolvimento neuropsicomotor",
    "- Orientação sobre aleitamento materno",
    "- Calendário de vacinação infantil",
    "- Sono do bebê",
    "- Prevenção da obesidade infantil",
    "- Consulta pré-natal pediátrica",
    "",
    "## Idiomas do site",
    "",
    `- Português: ${ORIGIN}/`,
    `- English: ${ORIGIN}/en`,
    `- Español: ${ORIGIN}/es`,
    "",
    "## Observações",
    "",
    "- Atendimento particular; o agendamento é feito pelos canais do site.",
    "- Este site é informativo e não substitui consulta médica: nenhuma conduta é",
    "  indicada sem avaliação presencial.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
