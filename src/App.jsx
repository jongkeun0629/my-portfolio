import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperiencesSection";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import WritingSection from "./components/WritingSection";
import portfolioData from "./portfolio-data.json";

const App = () => (
  <div>
    <Header profile={portfolioData.profile} />
    <AboutSection profile={portfolioData.profile} />
    <SkillsSection skills={portfolioData.skills} />
    <ProjectsSection projects={portfolioData.projects} />
    <ExperienceSection
      experience={portfolioData.experience}
      education={portfolioData.education}
      certifications={portfolioData.certifications}
    />
    <WritingSection
      writing={portfolioData.writing}
      talks={portfolioData.talks}
      openSource={portfolioData.open_source}
    />
    <footer className="py-8 px-4 text-center">
      <p className="text-sm">
        © 2025 {portfolioData.profile.name}. All right reserved
      </p>
    </footer>
  </div>
);

export default App;
