"use client";

import ReactFullpage from "@fullpage/react-fullpage";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen dark" style={{ backgroundColor: '#242424' }}>
      {/* Full Page Scroll Container */}
      <ReactFullpage
        licenseKey="gplv3-license"
        credits={{ enabled: false }}
        scrollingSpeed={400}
        navigation
        navigationPosition="right"
        keyboardScrolling
        touchSensitivity={15}
        render={() => (
          <ReactFullpage.Wrapper>
            <HeroSection />
            <ProjectsSection />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>

  );
}
