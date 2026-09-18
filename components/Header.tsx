"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sectionLinks = [
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Meet the Doctor", hash: "doctor" },
  { label: "Testimonials", hash: "testimonials" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // On the homepage, section links are plain in-page anchors. On any other
  // page (gallery, blog, ...) they need to route back to "/" first.
  const sectionHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <>
      <div className="announce">
        Caring for every stage of a woman&apos;s journey — evidence-based, empathetic gynaecology in Hyderabad.
      </div>
      <header>
        <div className="nav">
          <Link href="/" className="brand">
            <span className="mark" />
            Dr. Bethapudi <span>Sowjanya</span>
          </Link>

          <nav>
            <ul className="navlinks">
              <li>
                <a href={sectionHref("about")}>About</a>
              </li>
              <li>
                <Link href="/specializations" className={pathname?.startsWith("/specializations") ? "navlink-active" : ""}>
                  Specializations
                </Link>
              </li>
              {sectionLinks.slice(1).map((l) => (
                <li key={l.hash}>
                  <a href={sectionHref(l.hash)}>{l.label}</a>
                </li>
              ))}
              <li>
                <Link href="/gallery" className={pathname === "/gallery" ? "navlink-active" : ""}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className={pathname?.startsWith("/blog") ? "navlink-active" : ""}>
                  Blog
                </Link>
              </li>
              <li>
                <a href={sectionHref("contact")}>Contact</a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a href={sectionHref("contact")} className="btn btn-primary">Book a Visit</a>
            <button
              className={`nav-toggle${open ? " open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu${open ? " open" : ""}`}>
          <ul>
            <li>
              <a href={sectionHref("about")} onClick={() => setOpen(false)}>About</a>
            </li>
            <li>
              <Link href="/specializations" onClick={() => setOpen(false)}>Specializations</Link>
            </li>
            {sectionLinks.slice(1).map((l) => (
              <li key={l.hash}>
                <a href={sectionHref(l.hash)} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            </li>
            <li>
              <a href={sectionHref("contact")} onClick={() => setOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
