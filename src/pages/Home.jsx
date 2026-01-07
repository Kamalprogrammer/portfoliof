import ThemeToggle from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { FloatingEmoji } from "../components/FloatingEmoji"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*  theam toggle  */}
        <ThemeToggle />

        {/* backgrund Effects  */}
        <StarBackground />

        {/* Floating love+AI emoji that scrolls with page */}
        <FloatingEmoji />

        <Navbar />

        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            {/* Contact Us */}
            <ContactSection />
        </main>


        {/* footer */}
        <Footer />




    </div>
}