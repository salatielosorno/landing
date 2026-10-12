export const WHATSAPP_NUMBER = "5212223609002";

export const waLink = (message?: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}` +
  (message ? `&text=${encodeURIComponent(message)}` : "");

export const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Piñatas", href: "#pinatas" },
  { label: "Recuerdos", href: "#recuerdos" },
  { label: "Moños", href: "#monos" },
  { label: "Dulceros", href: "#dulceros" },
  { label: "Paquetes", href: "#paquetes" },
];
