import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Industries } from '@/components/Industries';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Industries />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
