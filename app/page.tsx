import Landing from '@/components/sections/Landing';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
