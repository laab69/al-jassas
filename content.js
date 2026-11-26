// ============================================================
// AL-JASSAS (الجاسوس) — Jeu d'espion islamique
// Contenu : mots secrets, ayat, histoires des prophètes
// ============================================================

const GAME_CONTENT = [
  // ---------- PROPHÈTES ----------
  { categorie: "Prophète", mot: "Yusuf (Youssouf) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Musa (Moïse) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Nuh (Noé) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Ibrahim (Abraham) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Yunus (Jonas) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Salih ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Isa (Jésus) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Isma'il ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Hud ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Sulayman (Salomon) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Dawud (David) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Ayyub (Job) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Lut (Loth) ﷺ", theme: "histoire" },
  { categorie: "Prophète", mot: "Adam ﷺ", theme: "histoire" },

  // ---------- SOURATES / AYAT CÉLÈBRES ----------
  { categorie: "Sourate", mot: "Al-Fatiha (l'Ouverture)", theme: "ayah" },
  { categorie: "Sourate", mot: "Al-Ikhlas (le Monothisme pur)", theme: "ayah" },
  { categorie: "Sourate", mot: "Al-Falaq et An-Nas (les protections)", theme: "ayah" },
  { categorie: "Sourate", mot: "Ad-Duha (le Jour montant)", theme: "ayah" },
  { categorie: "Sourate", mot: "Al-Kawthar (l'Abondance)", theme: "ayah" },
  { categorie: "Sourate", mot: "Yasin (le cœur du Coran)", theme: "ayah" },
  { categorie: "Sourate", mot: "Al-Mulk (la Royauté)", theme: "ayah" },
  { categorie: "Sourate", mot: "Al-Kahf (la Caverne)", theme: "ayah" },
  { categorie: "Sourate", mot: "Al-Fil (l'Éléphant)", theme: "ayah" },
  { categorie: "Sourate", mot: "Ayat al-Kursi (2:255)", theme: "ayah" },

  // ---------- HISTOIRES / RÉCITS ----------
  { categorie: "Histoire", mot: "Al-Isra wal-Mi'raj", theme: "histoire" },
  { categorie: "Histoire", mot: "La Bataille de Badr", theme: "histoire" },
  { categorie: "Histoire", mot: "La Bataille d'Uhud", theme: "histoire" },
  { categorie: "Histoire", mot: "La Conquête de La Mecque", theme: "histoire" },
  { categorie: "Histoire", mot: "Les Gens de la Caverne (Ahl al-Kahf)", theme: "histoire" },
  { categorie: "Histoire", mot: "La scission de la mer", theme: "histoire" },
  { categorie: "Histoire", mot: "Le sacrifice d'Ibrahim", theme: "histoire" },
  { categorie: "Histoire", mot: "La Hijra (l'émigration à Médine)", theme: "histoire" },
  { categorie: "Histoire", mot: "L'histoire du puits de Yusuf", theme: "histoire" },
  { categorie: "Histoire", mot: "Maryam et la naissance d'Isa", theme: "histoire" },
  { categorie: "Histoire", mot: "Le peuple de 'Ad et le vent", theme: "histoire" },
  { categorie: "Histoire", mot: "Saba et la reine de Bilqis", theme: "histoire" },
  { categorie: "Histoire", mot: "Talut et Jalut", theme: "histoire" },
  { categorie: "Histoire", mot: "Les jardins de Firdaws", theme: "histoire" },

  // ---------- LIEUX ----------
  { categorie: "Lieu", mot: "La Ka'ba", theme: "lieu" },
  { categorie: "Lieu", mot: "Masjid al-Aqsa", theme: "lieu" },
  { categorie: "Lieu", mot: "Médine (Al-Madinah)", theme: "lieu" },
  { categorie: "Lieu", mot: "Le Mont Arafat", theme: "lieu" },
  { categorie: "Lieu", mot: "Le Puits de Zamzam", theme: "lieu" },
  { categorie: "Lieu", mot: "La Grotte de Hira", theme: "lieu" },
  { categorie: "Lieu", mot: "La Grotte Thawr", theme: "lieu" },
  { categorie: "Lieu", mot: "Le Mont Uhud", theme: "lieu" },
  { categorie: "Lieu", mot: "Mina et le stoning de Jamrat", theme: "lieu" },

  // ---------- PERSONNAGES ----------
  { categorie: "Personnage", mot: "Abu Bakr As-Siddiq", theme: "personnage" },
  { categorie: "Personnage", mot: "Umar ibn Al-Khattab", theme: "personnage" },
  { categorie: "Personnage", mot: "Uthman ibn Affan", theme: "personnage" },
  { categorie: "Personnage", mot: "Ali ibn Abi Talib", theme: "personnage" },
  { categorie: "Personnage", mot: "Khalid ibn Al-Walid", theme: "personnage" },
  { categorie: "Personnage", mot: "Bilal ibn Rabah", theme: "personnage" },
  { categorie: "Personnage", mot: "Aisha (raa)", theme: "personnage" },
  { categorie: "Personnage", mot: "Khadija (raa)", theme: "personnage" },
  { categorie: "Personnage", mot: "Hamza ibn Abdul-Muttalib", theme: "personnage" },
  { categorie: "Personnage", mot: "Fir'awn (Pharaon)", theme: "personnage" },
  { categorie: "Personnage", mot: "Qarun (Coré)", theme: "personnage" },
  { categorie: "Personnage", mot: "Abu Lahab", theme: "personnage" },
  { categorie: "Personnage", mot: "Bilqis, la reine de Saba", theme: "personnage" },
  { categorie: "Personnage", mot: "Ya'qub (Jacob) ﷺ", theme: "personnage" },

  // ---------- PILIERS & PRATIQUES ----------
  { categorie: "Pilier", mot: "Le Hajj", theme: "pratique" },
  { categorie: "Pilier", mot: "Le Ramadan", theme: "pratique" },
  { categorie: "Pilier", mot: "La Zakat", theme: "pratique" },
  { categorie: "Pilier", mot: "La Salat (prière)", theme: "pratique" },
  { categorie: "Pilier", mot: "La Chahada", theme: "pratique" },
  { categorie: "Pilier", mot: "Le Eid al-Adha", theme: "pratique" },
  { categorie: "Pilier", mot: "Le Eid al-Fitr", theme: "pratique" },
  { categorie: "Pilier", mot: "Le Tawaf", theme: "pratique" },
  { categorie: "Pilier", mot: "Le Sa'i (Safa et Marwa)", theme: "pratique" },
  { categorie: "Pilier", mot: "Le Wuquf à Arafat", theme: "pratique" }
];

// Messages affichés à l'espion pour l'aider à bluffer
const SPY_HINTS = [
  "Écoute bien les indices des autres joueurs",
  "Reste vague : « je pense que c'est une histoire connue »",
  "Parle de piété, de prophètes, de prière — mais reste évasif",
  "Ne sois ni trop précis, ni trop silencieux",
  "Si tu devines le mot, tu peux le dire au moment du vote"
];
