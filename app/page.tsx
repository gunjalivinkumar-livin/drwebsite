import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Specializations from "@/components/Specializations";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider />
      <About />
      <Stats />
      <Specializations />
      <Services />
      <DoctorProfile />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
