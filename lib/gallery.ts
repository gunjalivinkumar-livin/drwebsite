export type GalleryImage = {
  id: string;
  title: string;
  category: "Clinic" | "Bloom Initiative" | "Patient Care" | "Events";
  gradient: string;
  tall?: boolean;
};

// Placeholder tiles — swap `gradient` for a real photo (next/image) once
// clinic photography is available. Keeping the same gradient/petal language
// used across the rest of the site so it never looks unfinished.
export const galleryImages: GalleryImage[] = [
  { id: "g1", title: "Clinic reception, Willow Women's Care", category: "Clinic", gradient: "linear-gradient(140deg,#C48793,#5B3242)", tall: true },
  { id: "g2", title: "Consultation room", category: "Clinic", gradient: "linear-gradient(140deg,#93A87E,#74905C)" },
  { id: "g3", title: "Bloom school workshop, KPHB", category: "Bloom Initiative", gradient: "linear-gradient(140deg,#C9A66B,#A9677A)" },
  { id: "g4", title: "Adolescent health awareness camp", category: "Bloom Initiative", gradient: "linear-gradient(140deg,#5B3242,#C48793)", tall: true },
  { id: "g5", title: "New mother & baby follow-up", category: "Patient Care", gradient: "linear-gradient(140deg,#74905C,#93A87E)" },
  { id: "g6", title: "Antenatal check-up", category: "Patient Care", gradient: "linear-gradient(140deg,#A9677A,#C9A66B)" },
  { id: "g7", title: "World Menstrual Hygiene Day, 2025", category: "Events", gradient: "linear-gradient(140deg,#C48793,#93A87E)" },
  { id: "g8", title: "Meadow Multispeciality wing", category: "Clinic", gradient: "linear-gradient(140deg,#3B1F2A,#A9677A)", tall: true },
  { id: "g9", title: "Bloom community outreach", category: "Bloom Initiative", gradient: "linear-gradient(140deg,#93A87E,#C9A66B)" },
  { id: "g10", title: "Laparoscopy recovery ward", category: "Clinic", gradient: "linear-gradient(140deg,#5B3242,#74905C)" },
  { id: "g11", title: "Patient counselling session", category: "Patient Care", gradient: "linear-gradient(140deg,#C9A66B,#5B3242)" },
  { id: "g12", title: "Annual women's health camp", category: "Events", gradient: "linear-gradient(140deg,#A9677A,#93A87E)", tall: true },
];

export const galleryCategories = [
  "All",
  "Clinic",
  "Bloom Initiative",
  "Patient Care",
  "Events",
] as const;
