import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blogs";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: `${post.title} | Dr. Bethapudi Sowjanya`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const more = related.length
    ? related
    : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <Header />
      <article className="article">
        <div className="hero-bg-shape" />
        <div className="wrap article-wrap">
          <Reveal>
            <Link href="/blog" className="article-back">← Back to all articles</Link>
            <div className="blog-meta" style={{ marginTop: 18 }}>
              <span className="blog-tag">{post.category}</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="article-title">{post.title}</h1>
          </Reveal>

          <Reveal as="fade" delay={80}>
            <div className="article-cover" style={{ background: post.gradient }} />
          </Reveal>

          <Reveal as="up" delay={120}>
            <div className="article-body">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal as="up" delay={160}>
            <div className="article-cta">
              <div>
                <strong>Have a question about this?</strong>
                <span>Book a consultation with Dr. Bethapudi Sowjanya.</span>
              </div>
              <a href="/#contact" className="btn btn-primary">Book an Appointment</a>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="bg-alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow center">Keep Reading</div>
              <h2>More articles</h2>
            </div>
          </Reveal>
          <div className="blog-grid">
            {more.map((p, i) => (
              <Reveal as="up" delay={i * 90} key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="blog-card">
                  <div className="blog-thumb" style={{ background: p.gradient }} />
                  <div className="body">
                    <div className="blog-meta">
                      <span className="blog-tag">{p.category}</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h4>{p.title}</h4>
                    <p>{p.excerpt}</p>
                    <span className="blog-readmore">Read article →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
