import './App.css';
import { BeamsBackground } from './components/ui/beams-background';
import { Feature } from './components/ui/feature-section-with-bento-grid'; // Import Feature component
import { motion } from 'framer-motion'; // Import motion
import { ThemeSwitch } from './components/ui/theme-switch-button'; // Import ThemeSwitch
import { Footer } from './components/ui/footer'; // Import Footer
import ExperienceSection from './components/ui/experience'; // Import ExperienceSection
import { Code, Github, Linkedin } from 'lucide-react'; // Import Lucide icons

function App() {
  // Animation variants for fading in on scroll
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen"> {/* Add relative positioning and ensure min height */}
      <ThemeSwitch className="fixed top-4 right-4 z-50" /> {/* Changed to fixed positioning */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible, only once
        variants={fadeIn}
      >
        <BeamsBackground />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible, only once
        variants={fadeIn}
      >
        <Feature /> {/* Add Feature component */}
      </motion.div>

      <motion.div // Add motion div for ExperienceSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
        variants={fadeIn}
      >
        <ExperienceSection /> {/* Add ExperienceSection component */}
      </motion.div>

      <motion.div // Keep Footer in its own motion div or combine if preferred
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        {/* Add Footer component */}
        <Footer
        logo={<Code className="h-6 w-6" />} // Use Lucide Code icon for logo
        brandName="Sandesha's Portfolio"
        socialLinks={[
          { icon: <Github className="h-4 w-4" />, href: "https://github.com/sandeshapokhrel", label: "GitHub" }, // Use Lucide icon
          { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/sandesha-pokhrel/", label: "LinkedIn" } // Use Lucide icon
        ]}
        mainLinks={[
          { href: "#", label: "Portfolio" },
          { href: "/CV.pdf", label: "Resume" }, // Updated href for Resume
          { href: "#", label: "Contact" }
        ]}
        legalLinks={[
          { href: "#", label: "Source Code" }
        ]}
      />
      </motion.div>
    </div>
  );
}

export default App;
