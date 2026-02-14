import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full relative">
      {/* Main Content - Fully Responsive Container */}
      <main className="size-full overflow-y-auto">
        <div className="flex flex-col w-full">
          {/* Responsive Padding: Mobile 24px | Tablet 48px | Desktop 80px */}
          {/* Vertical Spacing: Top 40px | Bottom 56px->72px->96px (increases with viewport) */}
          <div className="w-full px-[24px] md:px-[48px] lg:px-[80px] pt-[40px] pb-[56px] md:pb-[72px] lg:pb-[96px]">
            <NavBar />
          </div>
          <div className="flex flex-col w-full">
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
