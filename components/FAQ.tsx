"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What should I bring to my first appointment?",
    a: "Any previous reports, a list of current medications, and your last menstrual cycle dates. If it's a fertility consult, bringing your partner is welcome but not required.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes — video consultations are available for follow-ups, hormonal queries and non-emergency concerns. In-person visits are recommended for physical examinations.",
  },
  {
    q: "How do I know if I need a laparoscopic procedure?",
    a: "It's usually recommended for cysts, fibroids or endometriosis that don't resolve with medication. Dr. Reddy will walk you through imaging results and options before any decision is made.",
  },
  {
    q: "Is cosmetic gynaecology safe?",
    a: "Yes, when performed after a proper evaluation. Treatments like HIFU and pelvic floor therapy are non-surgical and tailored to each patient's anatomy and goals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow center">FAQs</div>
          <h2>Common questions, answered plainly</h2>
        </div>
        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="icon" />
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? 200 : 0 }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
