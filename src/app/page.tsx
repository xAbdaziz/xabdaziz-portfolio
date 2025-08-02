"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import { FlickeringGridBackground } from "@/components/magicui/flickering-grid";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <FlickeringGridBackground
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="gray"
          maxOpacity={0.3}
        />
      </div>

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
