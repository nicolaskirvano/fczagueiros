import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://fczagueiros.pages.dev/",
    title: "Zagueiro Market",
    description:
      "Os melhores zagueiros do EA FC Ultimate Team: precos, em alta e custo-beneficio, todos os dias.",
    author: "Zagueiro Market",
    profile: "https://fczagueiros.pages.dev/",
    publisher: {
      type: "Organization",
      name: "Zagueiro Market",
      url: "https://fczagueiros.pages.dev/",
      logo: "logo-fq-symbol.svg",
      sameAs: [
        "https://instagram.com/futquant",
        "https://youtube.com/@futquant",
        "https://x.com/futquant",
        "https://tiktok.com/@futquant",
      ],
    },
    ogImage: "default-og.jpg",
    lang: "pt-BR",
    timezone: "America/Sao_Paulo",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: false,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  ai: {
    enabled: true,
    llms: {
      maxPosts: 200,
      includeFullText: true,
    },
    crawlers: {
      allowSearchBots: true,
      allowTrainingBots: true,
    },
  },
  socials: [
    {
      name: "x",
      url: "https://x.com/futquant",
      linkTitle: "FutQuant no X",
    },
    {
      name: "mail",
      url: "mailto:contato@futquant.com",
      linkTitle: "Enviar email para FutQuant",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=Veja%20isto&body=" },
  ],
});
