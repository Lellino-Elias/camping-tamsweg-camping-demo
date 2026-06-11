import type { CampsiteConfig } from "../types";

/**
 * Waldcamping Tamsweg — Familie Santner, Mörtelsdorf 172, 5580 Tamsweg (Salzburger Lungau).
 * Ganzjährig geöffneter Waldcampingplatz am Taurachbach. Inhalte zu 100 % aus der eigenen
 * Quelle (raw/digest) abgeleitet; Bilder ausschließlich von dieser Website (provenance-bound).
 */
const IMG = "/campsites/camping-tamsweg";

const campingTamsweg: CampsiteConfig = {
  name: "Waldcamping Tamsweg",
  shortName: "Waldcamping",
  slug: "camping-tamsweg",
  ort: "Tamsweg",
  region: "Salzburger Lungau",
  theme: "alpin",
  heroVariant: "center",
  brandKind: "Waldcamping",
  regionLong: "UNESCO Biosphärenpark Salzburger Lungau · Österreich",

  claim: "Mitten im Wald, umringt von den Tauern",
  claimEmphasis: "im Wald",
  intro:
    "Auf der saftig grünen Campingwiese am Taurachbach campst du zwischen tiefem Wald und klarem Bach — ganzjährig geöffnet und familiär geführt von Familie Santner, nur wenige Schritte von der Natur entfernt.",

  logo: { src: `${IMG}/logo.png`, alt: "Waldcamping Tamsweg Logo" },

  statement: {
    text: "Nur wenige Schritte, und du stehst mitten im tiefgrünen Wald — am Taurachbach, in frischer, klarer Gebirgsluft.",
    emphasis: "wenige Schritte",
  },

  pillars: [
    {
      title: "Unberührte Natur",
      text: "Tiefgrüne Wälder, romantische Bäche und der wildromantische Prebersee liegen ganz in der Nähe — du campst mitten im Biosphärenpark Lungau.",
      image: { src: `${IMG}/natur-see.webp`, alt: "Morgennebel über einem Bergsee im Salzburger Lungau" },
    },
    {
      title: "Lungauer Gastlichkeit",
      text: "Jause auf der Alm, wöchentlicher Bauernmarkt und gemütliche Gasthäuser im Ort — die Lungauer Lebensart lernst du von ihrer herzlichsten Seite kennen.",
      image: { src: `${IMG}/gastlichkeit.webp`, alt: "Jause auf einer sonnigen Almterrasse mit Bergblick" },
    },
    {
      title: "Winterzauber",
      text: "Im Winter verwandelt sich der Lungau in eine glitzernde Schneelandschaft — mit vier familienfreundlichen Skigebieten und tief verschneiten Wegen rundum.",
      image: { src: `${IMG}/winterzauber.webp`, alt: "Tief verschneite Winterlandschaft mit Kapelle im Lungau" },
    },
  ],

  usps: ["Ganzjährig geöffnet", "Stellplätze mit Strom", "Gratis WLAN", "Waldspielplatz & Ponys"],

  trust: {
    heading: "Daheim zwischen Wald und Bach",
    headingEmphasis: "Wald und Bach",
    intro:
      "Familie Santner führt den Waldcampingplatz persönlich und das ganze Jahr über. Großzügige Stellplätze, moderne Sanitäranlagen und kurze Wege in die Natur — hier kommst du wirklich an.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-waldcamping.webp`, alt: "Hauptgebäude des Waldcamping Tamsweg mit Liegewiese und Tischtennis" },
  },

  camping: {
    heading: "Dein Platz im Wald",
    intro:
      "Ob direkt am Waldrand, nahe am Taurachbach oder in Spielplatznähe — auf rund 30 Stellplätzen mit Strom findest du deinen Lieblingsplatz. Für Wohnwagen, Wohnmobil, Caravan und Zelt.",
    features: [
      {
        title: "Am Waldrand und Bach",
        text: "Saftig grüne Campingwiese zwischen tiefem Wald und dem Taurachbach — du entscheidest, ob du am Waldrand, am Fluss oder nahe dem Spielplatz stehst.",
        image: { src: `${IMG}/luftbild-platz.webp`, alt: "Luftbild des Waldcamping Tamsweg am Taurachbach" },
      },
      {
        title: "Sommer wie Winter offen",
        text: "Der Platz ist das ganze Jahr geöffnet — auch im tief verschneiten Winter, mit eigenem Bereich für Dauercamper.",
        image: { src: `${IMG}/winter-platz.webp`, alt: "Verschneiter Waldcampingplatz mit Wohnwagen im Winter" },
      },
      {
        title: "Loipe & Wege ab Platz",
        text: "Loipeneinstieg sowie Rad- und Spazierwege starten direkt am Campingplatz — der Aktivurlaub beginnt vor dem Vorzelt.",
        image: { src: `${IMG}/langlauf.webp`, alt: "Langläufer auf einer gespurten Loipe im Salzburger Lungau" },
      },
    ],
  },

  kinder: {
    heading: "Wo Kinder den Tag draußen verbringen",
    intro:
      "Waldspielplatz mit Rutsche und Schaukel, abends Grillen am offenen Feuer und zwei Ponys zum Streicheln — bei uns sind die Kleinen den ganzen Tag im Freien.",
    features: [
      {
        title: "Unsere zwei Ponys",
        text: "Auf unserem kleinen Hof leben zwei Ponys — Streicheln und Kinder-Ponyreiten gehören bei uns einfach dazu.",
        image: { src: `${IMG}/kinder-ponys.webp`, alt: "Kinder bei den Ponys am Waldcamping Tamsweg" },
      },
      {
        title: "Draußen in der Natur",
        text: "Frische Bergluft, Wald und Wiese rundum — hier dürfen Kinder noch den ganzen Tag draußen sein und die Natur entdecken.",
        image: { src: `${IMG}/kinder-natur.webp`, alt: "Kind trinkt an einem hölzernen Brunnen in der Natur" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Vor der Tür wird's aktiv",
    intro:
      "Wandern, Radfahren und Kajak im Sommer, vier familienfreundliche Skigebiete und verschneite Wege im Winter — der Lungau ist ein Spielplatz für Aktivurlauber.",
    items: [
      {
        title: "Radfahren & Mountainbiken",
        text: "Genussradwege, Trails und Mountainbike-Touren starten direkt am Platz und führen tief in die Lungauer Bergwelt.",
        image: { src: `${IMG}/aktiv-radfahren.webp`, alt: "Mountainbiker an einem Bergsee im Lungau" },
      },
      {
        title: "Wandern in den Bergen",
        text: "Spazierwege, Nordic-Walking-Strecken und Gipfeltouren zwischen Nockbergen und Hohen Tauern — für jede Kondition das Richtige.",
        image: { src: `${IMG}/aktiv-wandern.webp`, alt: "Wanderer auf einem Höhenweg im Salzburger Lungau" },
      },
      {
        title: "Skifahren & Snowboarden",
        text: "Vier familienfreundliche Skigebiete locken Skifahrer, Snowboarder und Carver — die gemütliche Einkehr inklusive.",
        image: { src: `${IMG}/aktiv-skifahren.webp`, alt: "Skifahrer im Schnee mit Bergpanorama" },
      },
      {
        title: "Pferdeschlittenfahrt",
        text: "Eingehüllt in wärmende Decken gleitest du auf einer Pferdeschlittenfahrt durch die verschneite Winterlandschaft.",
        image: { src: `${IMG}/aktiv-pferdeschlitten.webp`, alt: "Familie auf einer Pferdeschlittenfahrt im Schnee" },
      },
      {
        title: "Rodeln & Schlitteln",
        text: "Ab auf die Kufen: Rodeln und Schlittenfahren machen den Winterurlaub für Groß und Klein zum Vergnügen.",
        image: { src: `${IMG}/aktiv-rodeln.webp`, alt: "Personen beim Rodeln vor einer Almhütte" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt in den Lungau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauernautobahn A10 bis zur Abfahrt St. Michael im Lungau, dann auf der B96 nach Tamsweg — der Platz liegt am Ortsrand in Mörtelsdorf.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Murtalbahn bis Tamsweg; vom Bahnhof sind es nur wenige Minuten zum Campingplatz.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Salzburg liegt rund 1,5 Stunden entfernt — von dort weiter mit Mietwagen oder Bahn.",
      },
    ],
  },

  galerie: {
    heading: "Der Lungau in Bildern",
    headingEmphasis: "Lungau",
    intro: "Ein paar Eindrücke aus der Region rund um den Platz — von sonnigen Gipfeln bis zu tief verschneiten Wintertagen.",
    tag: "Sommer & Winter",
    moreCount: 12,
    images: [
      { src: `${IMG}/galerie-berge.webp`, alt: "Bergrücken über dem Lungau im Spätsommer" },
      { src: `${IMG}/galerie-skihuette.webp`, alt: "Sonnige Skihütten-Terrasse mit Kaiserschmarrn" },
      { src: `${IMG}/galerie-huette.webp`, alt: "Gemütliche Hüttenjause in einer Almhütte" },
      { src: `${IMG}/galerie-winterwandern.webp`, alt: "Winterwanderung auf verschneitem Weg mit Bergblick" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Wald",
    headingEmphasis: "im Wald",
    intro: "Wähle Zeitraum und Personen — Familie Santner meldet sich persönlich bei dir mit der Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis/Nacht: Stehplatz € 9 + 2 Erwachsene à € 11,50 — zzgl. Ortstaxe € 2,35 pro Person und Strom € 0,85/kWh. Kinder günstiger (3–5 J. € 5, 6–15 J. € 8). Ganzjährig geöffnet, Dauercamper auf Anfrage.",
    highlight: { title: "Ganzjährig geöffnet", text: "Sommer wie Winter — auch Dauercamper sind herzlich willkommen." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 11.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 32, perExtraGuest: 11.5 },
    ],
  },

  kontakt: {
    coords: { lat: 47.140265, lng: 13.804554 },
    tel: "+43 6474 2504",
    telHref: "tel:+4364742504",
    mail: "waldcampingtwg@yahoo.de",
    facebook: "https://www.facebook.com/campingplatztamsweg",
    adresse: "Mörtelsdorf 172 · 5580 Tamsweg · Salzburg",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Ausstattung", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten", children: [
      { label: "Sommer", href: "#aktivitaeten" },
      { label: "Winter", href: "#aktivitaeten" },
    ]},
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anfahrt", href: "#anreise" },
    ]},
  ],
};

export default campingTamsweg;
