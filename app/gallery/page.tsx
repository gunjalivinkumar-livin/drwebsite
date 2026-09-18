import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Dr. Bethapudi Sowjanya",
  description:
    "A look inside the clinic, patient care moments and the Bloom health-literacy initiative.",
};

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Gallery"
        title="Moments from the clinic & community"
        subtitle="Clinic spaces, patient care and the Bloom initiative — filter by category or tap any photo for a closer look."
      />
      <section>
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>
      <Footer />
    </main>
  );
}
