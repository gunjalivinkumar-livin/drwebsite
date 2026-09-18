export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  gradient: string;
  content: string[];
};

// Sample articles — replace with real posts any time from this one file.
export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-irregular-periods",
    title: "Irregular Periods: When to Worry and When to Wait",
    category: "Menstrual Health",
    date: "August 12, 2026",
    readTime: "5 min read",
    excerpt:
      "Not every irregular cycle needs medication — but some patterns are your body's way of flagging something worth investigating.",
    gradient: "linear-gradient(135deg,#C48793,#93A87E)",
    content: [
      "It's normal for cycles to vary by a few days from month to month. Stress, travel, sudden weight change and even sleep disruption can all nudge ovulation earlier or later.",
      "What's worth a consultation is a pattern: cycles consistently shorter than 21 days or longer than 35, bleeding that soaks through a pad or tampon every hour for several hours, or periods that stop altogether for three months or more without pregnancy.",
      "These patterns can point to PCOS, thyroid imbalance, or — less commonly — structural causes like fibroids or polyps. A simple hormonal panel and pelvic ultrasound usually gives us the answer within a single visit.",
      "The goal is never to medicate a normal variation. It's to catch the cycles that are trying to tell you something before they turn into a bigger issue.",
    ],
  },
  {
    slug: "pcos-lifestyle-first-approach",
    title: "PCOS: Why We Start with Lifestyle, Not Just Prescriptions",
    category: "Reproductive Health",
    date: "July 28, 2026",
    readTime: "6 min read",
    excerpt:
      "PCOS affects nearly 1 in 5 women in India. Medication has a place — but it works far better alongside a few sustainable habit changes.",
    gradient: "linear-gradient(135deg,#93A87E,#C9A66B)",
    content: [
      "Polycystic Ovary Syndrome is one of the most common reasons women come to see me — and one of the most misunderstood. It isn't caused by having cysts on the ovaries; it's a hormonal and metabolic condition that can affect cycles, skin, weight and fertility.",
      "Because insulin resistance sits at the centre of PCOS for most patients, even a 5-7% reduction in body weight can restore ovulation for some women. That's why the first conversation is usually about food, sleep and movement — not a prescription pad.",
      "Where lifestyle changes aren't enough, medication (metformin, hormonal regulation, or ovulation induction for those trying to conceive) is layered on top — never used as a substitute for the basics.",
      "If you've been told simply to 'lose weight' without a clear plan, that's not a treatment plan — it's a starting point that deserves more support than that.",
    ],
  },
  {
    slug: "eating-well-through-pregnancy",
    title: "Eating Well Through Each Trimester",
    category: "Pregnancy Wellness",
    date: "July 9, 2026",
    readTime: "4 min read",
    excerpt:
      "Pregnancy nutrition isn't about eating for two — it's about eating with intention. A trimester-by-trimester guide.",
    gradient: "linear-gradient(135deg,#5B3242,#C48793)",
    content: [
      "First trimester: focus on folate-rich foods (leafy greens, lentils, citrus) and small, frequent meals if nausea makes large ones difficult.",
      "Second trimester: calcium and iron needs rise. Dairy or fortified alternatives, plus iron-rich foods paired with vitamin C for better absorption, become the priority.",
      "Third trimester: protein and healthy fats support the baby's rapid growth. This is also when heartburn tends to appear — smaller meals and staying upright after eating help.",
      "Throughout: hydration, gentle daily movement and consistent antenatal check-ups matter more than any single 'superfood'. We tailor specifics to your reports at each visit.",
    ],
  },
  {
    slug: "menopause-what-nobody-tells-you",
    title: "Menopause: What Nobody Tells You Beforehand",
    category: "Menopause Care",
    date: "June 21, 2026",
    readTime: "5 min read",
    excerpt:
      "Hot flashes get all the attention. The changes to bone density, heart health and sleep deserve just as much conversation.",
    gradient: "linear-gradient(135deg,#C9A66B,#A9677A)",
    content: [
      "Most women expect hot flashes and mood shifts around menopause. Fewer are told that oestrogen decline also accelerates bone loss and changes cardiovascular risk — both manageable with early attention.",
      "A baseline bone density scan and lipid profile around perimenopause gives us a reference point, so any change afterward is caught early rather than discovered as a fracture or a cardiac event years later.",
      "Hormone replacement therapy isn't right for everyone, but it's also not the risk it was once made out to be for most healthy women within 10 years of menopause onset. It's worth an honest, individualised conversation rather than a blanket yes or no.",
      "Sleep disruption, joint aches and vaginal dryness are also common and very treatable — you don't have to simply 'push through' any of them.",
    ],
  },
  {
    slug: "cosmetic-gynaecology-explained",
    title: "Cosmetic Gynaecology, Explained Without the Jargon",
    category: "Cosmetic Gynaecology",
    date: "June 3, 2026",
    readTime: "4 min read",
    excerpt:
      "From HIFU to pelvic floor rehabilitation — what these procedures actually treat, and who they're for.",
    gradient: "linear-gradient(135deg,#74905C,#5B3242)",
    content: [
      "Cosmetic gynaecology covers a range of non-surgical and minimally invasive treatments aimed at comfort and function, not just appearance — pelvic floor weakness after childbirth, laxity, and recurrent discomfort are common reasons women seek it out.",
      "HIFU (High-Intensity Focused Ultrasound) uses focused energy to stimulate collagen production in vaginal tissue, typically over a series of short, non-surgical sessions with minimal downtime.",
      "Pelvic floor rehabilitation combines targeted exercises with biofeedback to rebuild strength lost during pregnancy, childbirth or with age — often the first line of treatment before anything more invasive is considered.",
      "Every case starts with a proper evaluation. These treatments are tailored to anatomy and goals, not applied as a one-size-fits-all package.",
    ],
  },
  {
    slug: "talking-to-daughters-about-periods",
    title: "Talking to Your Daughter About Her First Period",
    category: "Adolescent Health",
    date: "May 15, 2026",
    readTime: "3 min read",
    excerpt:
      "A few honest, age-appropriate ways to open the conversation — before it happens, not after.",
    gradient: "linear-gradient(135deg,#C48793,#A9677A)",
    content: [
      "Most girls in India get some information about periods from friends or the internet before they hear it from a parent. Getting ahead of that — even briefly — makes a real difference in how a girl feels about her body when the day comes.",
      "You don't need a single 'big talk'. Short, matter-of-fact conversations from around age 9-10 about what a period is and why it happens work better than one long, awkward one.",
      "Keep supplies (pads, a spare pair of underwear) accessible at home and in her school bag well before her first period, so the practical side never becomes a source of panic.",
      "Through our Bloom initiative, we run school workshops covering exactly this — menstrual health, hygiene and hormonal changes — in a comfortable, judgment-free setting for young girls.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
