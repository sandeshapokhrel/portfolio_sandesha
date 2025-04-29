import { Briefcase } from 'lucide-react';
import { Badge } from "@/components/ui/badge"; // Import Badge

export default function ExperienceSection() {
  // Removed useState, useEffect, and toggleTheme

  // Experience data based on CV
  const experiences = [
    {
      id: 1,
      title: "UI/UX Designer Intern",
      company: "Kutumba",
      period: "2024/03 – 2024/06",
      description: "Designed the user interface for both a mobile app and website for a food delivery system, enhancing the user experience across platforms. Conducted user research and gathered feedback to improve design prototypes and optimize usability. Created wireframes, user flows, and high-fidelity mockups. Collaborated with developers.",
      skills: ["Figma", "Canva", "Photoshop", "User Research", "Wireframing", "Prototyping"]
    },
    {
      id: 2,
      title: "UI/UX & Graphics Designer",
      company: "DigiPrabhat",
      period: "2022/05 – 2024/02",
      description: "Designed the UI/UX for DigiPrabhat’s website, focusing on clean layouts, intuitive navigation, and responsive design. Created brand-consistent graphics including logos, social media posts, promotional banners, and marketing materials.",
      skills: ["Figma", "Canva", "Picsart", "UI/UX Design", "Graphic Design", "Branding"]
    },
    {
      id: 3,
      title: "UI/UX Design Teacher",
      company: "Hetauda School of Management",
      period: "2024",
      description: "Taught UI/UX design principles, tools, and methodologies. Led a DesignThon where students implemented UI/UX concepts for real-world projects. Guided students through the design process from research to testing.",
      skills: ["Figma", "Teaching", "Mentoring", "UI/UX Principles", "Design Thinking"]
    }
  ];

  return (
    <div className="bg-background text-foreground transition-colors duration-300 w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-5xl tracking-tighter font-regular text-foreground">Professional Experience</h1>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-card text-card-foreground p-6 rounded-md"
            >
              <div className="flex items-start gap-4">
                <div className="bg-muted text-muted-foreground p-2 rounded-full flex-shrink-0">
                  <Briefcase className="w-6 h-6 stroke-1" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl tracking-tight font-bold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-lg font-medium text-primary mb-3">{exp.company}</p>
                  <p className="text-base text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}