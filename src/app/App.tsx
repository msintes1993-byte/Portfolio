import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { DesignSystemCaseStudy } from './components/DesignSystemCaseStudy';
import { EcommerceCaseStudy } from './components/EcommerceCaseStudy';
import { AnalyticsCaseStudy } from './components/AnalyticsCaseStudy';

function HomePage() {
  return (
    <>
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
    </>
  );
}

function CaseStudyPage({ projectId }: { projectId: string }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNextProject = (nextId: string) => {
    navigate(`/project/${nextId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Map project IDs to their case study components
  const caseStudyMap: Record<string, JSX.Element> = {
    '03': <EcommerceCaseStudy onBack={handleBack} onNextProject={handleNextProject} />,
    '04': <DesignSystemCaseStudy onBack={handleBack} onNextProject={handleNextProject} />,
    '05': <AnalyticsCaseStudy onBack={handleBack} onNextProject={handleNextProject} />,
    // Add more case studies here as you create them
  };

  return caseStudyMap[projectId] || (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-foreground mb-4">Project Not Found</h1>
        <button
          onClick={handleBack}
          className="px-6 py-3 bg-primary text-primary-foreground border border-foreground"
          style={{ boxShadow: 'var(--elevation-sm)' }}
        >
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full relative">
        <main id="main-scroll-container" className="size-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/project/:projectId"
              element={<CaseStudyPageWrapper />}
            />
          </Routes>
        </main>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

// Wrapper to extract projectId from URL params
function CaseStudyPageWrapper() {
  const navigate = useNavigate();
  const projectId = window.location.pathname.split('/').pop() || '';
  
  return <CaseStudyPage projectId={projectId} />;
}
