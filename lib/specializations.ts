export type Specialization = {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  gradient: string;
  overview: string[];
  procedures: string[];
  whoItsFor: string[];
  faqs: { q: string; a: string }[];
};

export const specializations: Specialization[] = [
  {
    slug: "obstetrics-prenatal-care",
    icon: "🌸",
    title: "Obstetrics & Prenatal Care",
    shortDescription:
      "Antenatal monitoring, high-risk pregnancy management and painless-birthing guidance.",
    gradient: "linear-gradient(135deg,#C48793,#5B3242)",
    overview: [
      "From the first confirmation of pregnancy through delivery and postpartum recovery, care is built around regular monitoring, honest conversations and a plan that adapts as your pregnancy progresses.",
      "High-risk pregnancies — including gestational diabetes, hypertension, twin pregnancies and prior C-sections — are managed with closer monitoring and a clear escalation plan, so nothing is left to guesswork.",
    ],
    procedures: [
      "Regular antenatal check-ups with growth scans",
      "Gestational diabetes & hypertension screening",
      "Painless labour (epidural) guidance and birth planning",
      "High-risk pregnancy monitoring",
      "Postpartum care and lactation support",
    ],
    whoItsFor: [
      "Women who are pregnant or planning a pregnancy",
      "Those with a high-risk pregnancy history (diabetes, hypertension, previous complications)",
      "First-time mothers wanting a structured antenatal plan",
    ],
    faqs: [
      {
        q: "When should I schedule my first antenatal visit?",
        a: "Ideally within the first 6-8 weeks of pregnancy, or as soon as a home test confirms it — this lets us date the pregnancy accurately and start folic acid/essential screening early.",
      },
      {
        q: "Is painless labour safe?",
        a: "Yes. Epidural analgesia is a well-established, safe method used worldwide to manage labour pain without affecting the baby, administered by an anaesthetist alongside the delivery team.",
      },
      {
        q: "How often will I need scans?",
        a: "Typically once each trimester for routine pregnancies (dating scan, anomaly scan, growth scan), with additional scans added if any risk factors are identified.",
      },
    ],
  },
  {
    slug: "cosmetic-gynaecology",
    icon: "🌿",
    title: "Cosmetic Gynaecology",
    shortDescription:
      "Vaginal rejuvenation, HIFU and pelvic floor rehabilitation for comfort and confidence.",
    gradient: "linear-gradient(135deg,#93A87E,#74905C)",
    overview: [
      "Cosmetic gynaecology covers non-surgical and minimally invasive treatments aimed at comfort and function — commonly sought after childbirth, with age, or for recurring discomfort.",
      "Every treatment plan starts with a full evaluation of anatomy and goals; nothing is offered as a one-size-fits-all package.",
    ],
    procedures: [
      "HIFU (High-Intensity Focused Ultrasound) vaginal rejuvenation",
      "Pelvic floor rehabilitation with biofeedback",
      "Post-childbirth laxity treatment",
      "Labiaplasty consultation and referral where indicated",
    ],
    whoItsFor: [
      "Women experiencing pelvic floor weakness after childbirth",
      "Those seeking non-surgical vaginal rejuvenation",
      "Anyone with recurring discomfort affecting daily comfort or intimacy",
    ],
    faqs: [
      {
        q: "Is HIFU painful or does it require downtime?",
        a: "Most patients describe mild warmth during the session. It's non-surgical, typically done in short sessions, with no significant downtime — you can resume normal activity the same day.",
      },
      {
        q: "How many sessions are usually needed?",
        a: "This varies by individual, but most treatment plans involve a short series of sessions spaced a few weeks apart, assessed and adjusted at each visit.",
      },
    ],
  },
  {
    slug: "fertility-reproductive-health",
    icon: "🌼",
    title: "Fertility & Reproductive Health",
    shortDescription:
      "Ovulation tracking, hormonal evaluation and structured infertility work-ups.",
    gradient: "linear-gradient(135deg,#C9A66B,#A9677A)",
    overview: [
      "Fertility evaluation starts with understanding your cycle, hormonal profile and any underlying conditions like PCOS, before recommending treatment — starting with the least invasive option that fits your situation.",
      "For couples trying to conceive, both partners' evaluations are coordinated so time isn't lost chasing one half of the picture.",
    ],
    procedures: [
      "Ovulation tracking and hormonal panels",
      "PCOS evaluation and management",
      "Structured infertility work-up",
      "Ovulation induction for those trying to conceive",
      "Referral coordination for IUI/IVF where needed",
    ],
    whoItsFor: [
      "Couples trying to conceive for 6-12 months without success",
      "Women with irregular cycles or suspected PCOS",
      "Anyone wanting a fertility health check before planning a pregnancy",
    ],
    faqs: [
      {
        q: "When should we seek a fertility evaluation?",
        a: "Generally after 12 months of trying without success (or 6 months if you're over 35), though an earlier check is reasonable if your cycles are irregular or you have a known condition like PCOS.",
      },
      {
        q: "Does PCOS mean I can't get pregnant naturally?",
        a: "Not necessarily. Many women with PCOS conceive naturally once ovulation is regulated through lifestyle changes and, where needed, medication — it's rarely an all-or-nothing situation.",
      },
    ],
  },
  {
    slug: "laparoscopic-surgery",
    icon: "🍃",
    title: "Laparoscopic Surgery",
    shortDescription:
      "Minimally invasive treatment for fibroids, cysts and endometriosis.",
    gradient: "linear-gradient(135deg,#74905C,#5B3242)",
    overview: [
      "Laparoscopic (keyhole) surgery is recommended for fibroids, ovarian cysts and endometriosis that don't resolve with medication — using small incisions for faster recovery compared to open surgery.",
      "Before any procedure, imaging results and options are discussed in detail so the decision is made together, not handed down.",
    ],
    procedures: [
      "Laparoscopic myomectomy (fibroid removal)",
      "Ovarian cystectomy",
      "Endometriosis excision",
      "Diagnostic laparoscopy for unexplained pelvic pain",
    ],
    whoItsFor: [
      "Women with fibroids or cysts causing pain or heavy bleeding",
      "Those diagnosed with or suspected of having endometriosis",
      "Anyone advised open surgery elsewhere who wants a minimally-invasive opinion",
    ],
    faqs: [
      {
        q: "How long is recovery after laparoscopic surgery?",
        a: "Most patients go home within 1-2 days and return to normal light activity within a week to ten days — significantly faster than open surgery, though this varies by procedure complexity.",
      },
      {
        q: "Will I still need medication after surgery?",
        a: "Sometimes, particularly for endometriosis, short-term hormonal therapy may be recommended afterward to reduce recurrence — this is discussed case by case.",
      },
    ],
  },
];

export function getSpecialization(slug: string) {
  return specializations.find((s) => s.slug === slug);
}
