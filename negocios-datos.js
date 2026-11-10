/* DATOS DE KONECTA: aquí se agregan los negocios.
   Para sumar uno: copia un bloque { ... } de NEGOCIOS, cambia sus datos y sepáralo con coma.
   La categoría (cat) usa una de estas claves: comida, belleza, oficios, tramites, envios, eventos.
   Redes (opcionales): instagram, facebook, tiktok con el enlace completo.
   Con la línea  oculto: true  el negocio no aparece en la web; bórrala para publicarlo. */
const CATS = {
  comida: "Comida y tiendas",
  belleza: "Belleza y bienestar",
  oficios: "Oficios y reparaciones",
  tramites: "Trámites y asesoría",
  envios: "Envíos y viajes",
  eventos: "Eventos y comunidad"
};

const NEGOCIOS = [
  {
    nombre: "Arepaisa del Quindío",
    cat: "comida",
    zona: "Meyrin",
    desc: "Arepas colombianas por encargo en Meyrin.",
    etiquetas: ["Arepas", "100% maíz", "Colombiana"],
    url: "/directorio/arepaisa-del-quindio/",
    logo: "/directorio/arepaisa-del-quindio/logo.jpg",
    whatsapp: "41783286271"
  },
  {
    nombre: "Felipe Barber",
    cat: "belleza",
    zona: "Servette",
    desc: "Barbería: cortes, barba, diseños y cejas. Agenda tu cita.",
    etiquetas: ["Barbería", "Corte", "Barba", "Cejas", "Tintes"],
    url: "/directorio/felipe-barber/",
    logo: "/directorio/felipe-barber/logo.jpg",
    logoCuadrado: true,
    whatsapp: "41779092261"
  },
  {
    nombre: "Gómez Beauty by Daniela",
    cat: "belleza",
    zona: "A domicilio en Ginebra",
    desc: "Uñas, pedicura y cejas a domicilio, con cita.",
    etiquetas: ["Uñas", "Manicura", "Acrílico", "Gel", "Pedicura", "Cejas", "Maquillaje", "Peinados"],
    url: "/directorio/gomez-beauty/",
    logo: "/directorio/gomez-beauty/logo.jpg",
    logoCuadrado: true,
    whatsapp: "41783423046",
    instagram: "https://www.instagram.com/gomezbeauty1/"
  },
  {
    nombre: "Edilson – Bricolaje y montaje",
    cat: "oficios",
    zona: "A domicilio en Ginebra",
    desc: "Bricolaje, pequeños trabajos eléctricos y montaje de muebles a domicilio. 30 CHF la hora.",
    etiquetas: ["Bricolaje", "Pequeños trabajos eléctricos", "Eléctrico", "Montaje de muebles", "A domicilio", "Reparaciones"],
    url: "/directorio/edilson-bricolaje/",
    logo: "/directorio/edilson-bricolaje/logo.png",
    logoCuadrado: true,
    whatsapp: "41783286271"
  },
  {
    nombre: "Edilson – Formateo y mantenimiento de PC",
    cat: "oficios",
    zona: "Ginebra",
    desc: "Formateo e instalación de Windows, limpieza y optimización de PC.",
    etiquetas: ["Formateo", "Windows", "PC", "Computador", "Limpieza", "Antivirus", "Informática", "HP", "Acer", "Lenovo", "Dell", "ASUS", "Laptop"],
    url: "/directorio/edilson-informatica/",
    logo: "/directorio/edilson-informatica/logo.png",
    logoCuadrado: true,
    whatsapp: "41783286271"
  }
];

const visibles = () => NEGOCIOS.filter(n => !n.oculto);

function el(tag, props, texto) {
  const e = document.createElement(tag);
  if (props) Object.assign(e, props);
  if (texto) e.textContent = texto;
  return e;
}

function tarjeta(n) {
  const f = el("article", { className: "ficha" });
  if (n.logo) {
    const im = el("img", { src: n.logo, alt: "Logo de " + n.nombre, width: 80, height: 80, loading: "lazy" });
    if (n.logoCuadrado) { im.style.borderRadius = ".7rem"; im.style.objectFit = "contain"; }
    f.appendChild(im);
  }
  const h = el("h3");
  h.appendChild(el("a", { href: n.url }, n.nombre));
  f.appendChild(h);
  f.appendChild(el("span", { className: "ok" }, n.desc));
  const fila = el("div", { className: "fila" });
  fila.appendChild(el("span", { className: "chip" }, CATS[n.cat]));
  fila.appendChild(el("span", { className: "chip" }, n.zona));
  f.appendChild(fila);
  const acc = el("div", { className: "fila acc" });
  if (n.whatsapp) {
    const msg = "Hola, vi " + n.nombre + " en Konecta.ch y quiero hacer una consulta.";
    acc.appendChild(el("a", { className: "chip chip-wa", href: "https://wa.me/" + n.whatsapp + "?text=" + encodeURIComponent(msg), target: "_blank", rel: "noopener" }, "WhatsApp"));
  }
  acc.appendChild(el("a", { className: "chip", href: n.url }, "Ver ficha"));
  [["instagram", "Instagram"], ["facebook", "Facebook"], ["tiktok", "TikTok"]].forEach(([k, t]) => {
    if (n[k]) acc.appendChild(el("a", { className: "chip chip-red", href: n[k], target: "_blank", rel: "noopener" }, t));
  });
  f.appendChild(acc);
  return f;
}
