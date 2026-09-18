import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/** Small banner used at the top of secondary pages (Gallery, Blog, ...). */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-bg-shape" />
      <div className="wrap">
        <Reveal>
          <div className="section-head" style={{ margin: "0 auto" }}>
            <div className="eyebrow center">{eyebrow}</div>
            <h1 className="page-hero-title">{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
