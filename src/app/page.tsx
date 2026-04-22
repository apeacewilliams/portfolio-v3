import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";

const NAME = "Peace Williams-Ojomu";
const TAGLINE = "building thoughtful software";

export default function Home() {
  return (
    <div className="max-w-300 mx-auto">
      <NavBar name={NAME} />
      <HeroSection name={NAME} tagline={TAGLINE} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer name={NAME} />
    </div>
  );
}
