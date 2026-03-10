
import Posts from "@/components/Posts"
import HeroSection from "./HeroSection"
import RecentProjectsSection from "./RecentProjectsSection"
import ContactSection from "./ContactSection"
import LandingLayout from "./LandingLayout"

export default function Home() {
  return (
    <>
      <LandingLayout>
        <HeroSection />
        <RecentProjectsSection />
        <ContactSection />
        <Posts />
      </LandingLayout>
    </>
  )
}