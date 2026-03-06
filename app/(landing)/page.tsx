
import Posts from "@/components/Posts"
import HeroSection from "./HeroSection"
import RecentProjectsSection from "./RecentProjectsSection"
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import LandingLayout from "./LandingLayout"

export default function Home() {
  return (
    <>
      <LandingLayout>
        <HeroSection />
        <RecentProjectsSection />
        <AboutSection />
        <ContactSection />
        <Posts />
      </LandingLayout>
    </>
  )
}