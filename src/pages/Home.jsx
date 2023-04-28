import Footer from "@/components/Footer";
import Galeri from "@/components/Galeri";
import Hero from "@/components/Hero";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Lokasi from "@/components/Lokasi";
import Mempelai from "@/components/Mempelai";
import Tanggal from "@/components/Tanggal";
import Words from "@/components/Words";

/**
 * Home page
 *
 * @returns React.ReactElement
 */
const Home = () => {
  return (
    <GuestLayout>
      <section id="hero">
        <Hero />
      </section>

      <section id="words">
        <Words />
      </section>

      <section id="mempelai">
        <Mempelai />
      </section>

      <section id="tanggal">
        <Tanggal />
      </section>

      <section id="lokasi">
        <Lokasi />
      </section>

      <section id="galeri">
        <Galeri />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </GuestLayout>
  );
};

export default Home;
