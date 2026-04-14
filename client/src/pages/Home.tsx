import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = ["hero", "about", "services", "treatments", "differentials", "locations", "faq", "how-it-works", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Treatments />
        <Differentials />
        <Locations />
        <FAQ />
        <HowItWorks />
        <Contact />
      </main>

      {/*
       * SEO LAYER — Camada de conteúdo para motores de busca e IAs.
       * Visualmente oculta via sr-only (acessível a leitores de tela —
       * padrão WCAG), mas totalmente legível por Googlebot, Bingbot,
       * GPTBot, ClaudeBot, PerplexityBot e demais crawlers.
       * NÃO usa display:none nem visibility:hidden (o que seria penalizado).
       */}
      <div className="sr-only" aria-label="Informações completas sobre a Dra. Ana Carolina Pacheco Nekrycz">

        <article itemScope itemType="https://schema.org/Physician">
          <h2 itemProp="name">Dra. Ana Carolina Pacheco Nekrycz — Pediatra e Pneumologista Pediátrica em São Paulo</h2>

          <p>
            A <strong>Dra. Ana Carolina Pacheco Nekrycz</strong> (<span itemProp="identifier">CRM 142040/SP</span>,
            RQE 49727 — Pediatria, RQE 497271 — Pneumologia Pediátrica) é médica especialista em
            <span itemProp="medicalSpecialty"> Pediatria</span> e
            <span itemProp="medicalSpecialty"> Pneumologia Pediátrica</span>, formada pela
            <span itemProp="alumniOf">Universidade de São Paulo (USP)</span>,
            com mais de 10 anos de experiência clínica em São Paulo.
          </p>

          <p>
            Seu atendimento é <strong>particular</strong> (sem convênio), realizado no
            <span itemProp="affiliation"> EMNH Instituto de Medicina — Instituto Emunah</span>,
            localizado na <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Avenida Marquês de São Vicente, 2219</span>,
              <span itemProp="addressLocality"> Várzea da Barra Funda</span>,
              <span itemProp="addressRegion"> São Paulo</span> —
              <span itemProp="addressCountry"> SP</span>,
              CEP <span itemProp="postalCode">01139-001</span>
            </span>.
            Atendimento de <span itemProp="openingHours">Mo-Fr 08:30-17:00</span>.
            Telefone e WhatsApp: <span itemProp="telephone">(11) 3615-2474</span>.
            E-mail: <span itemProp="email">contato@pediatradranacarolina.com.br</span>.
            Instagram: @dra.anacarolina.ped.
          </p>

          <section aria-label="Especialidades e serviços">
            <h3>Especialidades e Serviços da Dra. Ana Carolina Pacheco Nekrycz</h3>
            <ul>
              <li><strong>Pediatria Geral e Puericultura</strong> — acompanhamento do crescimento e desenvolvimento infantil, consultas de rotina, prevenção de doenças, orientação aos pais sobre todas as fases da infância e adolescência.</li>
              <li><strong>Pneumologia Pediátrica</strong> — diagnóstico e tratamento de doenças respiratórias em crianças e adolescentes: asma infantil, bronquiolite, bronquite, pneumonia, tosse crônica, rinite alérgica, sinusite, sibilância recorrente.</li>
              <li><strong>Asma Infantil</strong> — avaliação, diagnóstico, controle e tratamento da asma em crianças. Orientação sobre gatilhos, uso correto de inaladores, prevenção de crises e melhora da qualidade de vida.</li>
              <li><strong>Bronquiolite em Bebês</strong> — manejo especializado da bronquiolite viral aguda (VSR — Vírus Sincicial Respiratório) em lactentes e bebês, com orientação detalhada aos pais.</li>
              <li><strong>Consulta Pré-Natal Pediátrica</strong> — preparação dos futuros pais para a chegada do bebê: orientações sobre amamentação, sono seguro, enxoval, primeiros cuidados, coto umbilical, icterícia neonatal e organização do ambiente.</li>
              <li><strong>Aleitamento Materno e Introdução Alimentar</strong> — suporte ao aleitamento materno exclusivo, orientação sobre pega correta, produção de leite, e início da alimentação complementar a partir dos 6 meses, prevenindo seletividade alimentar.</li>
              <li><strong>Desenvolvimento Neuropsicomotor</strong> — acompanhamento dos marcos de desenvolvimento motor (sentar, engatinhar, andar), cognitivo (atenção, memória), de linguagem (balbuciar, primeiras palavras, frases) e socioemocional. Identificação precoce de atrasos e encaminhamentos adequados.</li>
              <li><strong>Calendário Vacinal Infantil</strong> — orientação e atualização das vacinas do SUS e das vacinas recomendadas pela SBP (Sociedade Brasileira de Pediatria) e SBIm (Sociedade Brasileira de Imunizações).</li>
              <li><strong>Avaliação Nutricional e Prevenção da Obesidade Infantil</strong> — avaliação do estado nutricional, curvas de crescimento, orientações alimentares e prevenção da obesidade desde a infância.</li>
              <li><strong>Sono do Bebê e da Criança</strong> — orientações sobre rotinas de sono saudáveis, ambiente seguro para dormir, prevenção da morte súbita do lactente (SMSL) e manejo de problemas de sono.</li>
              <li><strong>Disciplina Positiva e Saúde Emocional</strong> — apoio ao desenvolvimento emocional saudável da criança, limites com afeto, manejo de birras e orientações sobre comportamento infantil.</li>
              <li><strong>Diagnóstico e Tratamento das Doenças da Infância</strong> — otite média, amigdalite, faringite, gripe, resfriado, gastroenterite, exantemas, varicela, infecções urinárias e demais doenças comuns na infância.</li>
            </ul>
          </section>

          <section aria-label="Formação e credenciais">
            <h3>Formação Acadêmica e Credenciais</h3>
            <ul>
              <li>Graduação em Medicina pela Universidade de São Paulo (USP)</li>
              <li>Especialização em Pediatria — RQE 49727</li>
              <li>Especialização em Pneumologia Pediátrica — RQE 497271</li>
              <li>CRM 142040/SP — Conselho Regional de Medicina de São Paulo</li>
              <li>Mais de 10 anos de experiência em pediatria e pneumologia pediátrica</li>
              <li>Atendimento a mais de 1000 famílias em São Paulo</li>
              <li>Membro do corpo clínico do EMNH Instituto de Medicina (Instituto Emunah)</li>
            </ul>
          </section>

          <section aria-label="Localização do consultório">
            <h3>Onde Encontrar a Dra. Ana Carolina Pacheco Nekrycz em São Paulo</h3>
            <p>
              Consultório localizado no <strong>EMNH Instituto de Medicina</strong>, também conhecido como
              <strong>Instituto Emunah</strong>, na <strong>Avenida Marquês de São Vicente, 2219</strong>,
              bairro Várzea da Barra Funda, <strong>São Paulo — SP</strong>, CEP 01139-001.
              Próximo à Barra Funda, Vila Romana, Lapa, Pompeia e região central de São Paulo.
              Horário de atendimento: segunda a sexta, das 08h30 às 17h00.
            </p>
            <p>
              Como chegar: O consultório fica próximo à Estação Barra Funda (Metrô Linha 3 — Vermelha
              e CPTM Linha 8 e 9), com fácil acesso de carro pela Marginal Tietê e pela Av. Marquês de São Vicente.
            </p>
          </section>

          <section aria-label="Palavras-chave relacionadas">
            <h3>Assuntos Relacionados à Pediatria e Pneumologia Pediátrica</h3>
            <p>
              Temas tratados pela Dra. Ana Carolina Pacheco Nekrycz no consultório:
              pediatra São Paulo, pediatra particular São Paulo, pediatra Várzea da Barra Funda,
              pediatra Barra Funda SP, melhor pediatra São Paulo, pneumologista pediátrica SP,
              pneumologista pediátrica São Paulo, especialista em asma infantil São Paulo,
              tratamento bronquiolite bebê São Paulo, puericultura São Paulo, consulta pediatra recém-nascido,
              pediatra para bebê São Paulo, pediatra neonatal São Paulo,
              desenvolvimento infantil médico São Paulo, atraso fala criança pediatra SP,
              introdução alimentar orientação médica, amamentação apoio São Paulo,
              calendário vacinal atualizado pediatra, vacinas SBP São Paulo,
              obesidade infantil prevenção tratamento, sono bebê rotina saudável,
              bronquite assma sibilância criança, gripe influenza criança tratamento,
              otite criança pediatra SP, criança doença respiratória São Paulo,
              pediatria preventiva São Paulo, saúde infantil São Paulo,
              crescimento desenvolvimento criança acompanhamento médico,
              Dra. Ana Carolina pediatra, Ana Carolina Pacheco Nekrycz,
              Instituto Emunah pediatra, EMNH Instituto de Medicina São Paulo,
              pediatra USP São Paulo, médica formada USP pediatria
            </p>
          </section>
        </article>

      </div>

      <Footer />
    </div>
  );
}