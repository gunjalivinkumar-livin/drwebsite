"use client";

import { FormEvent, useState } from "react";

const hours = [
  { day: "Monday", time: "10:30 AM – 1:00 PM, 6 – 9 PM" },
  { day: "Tuesday", time: "10:30 AM – 1:00 PM, 6 – 9 PM" },
  { day: "Wednesday", time: "10:30 AM – 1:00 PM, 6 – 9 PM" },
  { day: "Thursday", time: "10:30 AM – 1:00 PM, 6 – 9 PM" },
  { day: "Friday", time: "10:30 AM – 1:00 PM, 6 – 9 PM" },
  { day: "Saturday", time: "10:30 AM – 1:00 PM, 6 – 9 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your backend or a form service (e.g. Formspree, Resend).
    setSubmitted(true);
  }

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="hours-card">
          <h3>Working Hours</h3>
          {hours.map((h, i) => (
            <div
              className="hours-row"
              key={h.day}
              style={i === hours.length - 1 ? { borderBottom: "none" } : undefined}
            >
              <span>{h.day}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>
        <div className="form-card">
          <h3 style={{ marginBottom: 20 }}>Send a Message</h3>
          {submitted ? (
            <p style={{ color: "var(--text-muted)" }}>
              Thanks — your message has been noted. We&apos;ll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Full name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="How can we help?" required />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
