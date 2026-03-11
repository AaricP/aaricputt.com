
import Posts from "@/components/Posts"
import HeroSection from "./HeroSection"
import RecentProjectsSection from "./RecentProjectsSection"
import ContactSection from "./ContactSection"

export default function Home() {
  return (
    <>
        <HeroSection />
        <RecentProjectsSection />
        <ContactSection />
        {/* <Posts /> */}
    </>
  )
}