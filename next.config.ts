// Lido pelo vinext (mesmas opções do next.config).
export default {
  // Metadados sempre no <head>, para qualquer user agent. Sem isto, rotas dinâmicas (os cases)
  // mandam title, description e canonical no <body> para quem não está na lista de bots,
  // e o Lighthouse acusa "sem meta description". Os metadados daqui são síncronos: nada a perder.
  htmlLimitedBots: ".*",
};
