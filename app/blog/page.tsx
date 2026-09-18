import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog | Dr. Bethapudi Sowjanya",
  description:
    "Plain-language articles on menstrual health, pregnancy, PCOS, menopause and more from Dr. Bethapudi Sowjanya.",
};

export default function BlogIndexPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Blog"
        title="Women's health, explained plainly"
        subtitle="Short, honest articles on the questions patients ask most in the clinic."
      />
      <section>
        <div className="wrap">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <Reveal as="up" delay={(i % 3) * 90} key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-thumb" style={{ background: post.gradient }} />
                  <div className="body">
                    <div className="blog-meta">
                      <span className="blog-tag">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
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
