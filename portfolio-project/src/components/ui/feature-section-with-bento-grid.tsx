import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Skills & Experience</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                UI/UX Designer & Software Developer
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Creative UI/UX & Graphics designer and passionate software developer skilled in .NET, React, TypeScript. Specializing in user-centered designs (Figma) and building scalable applications using Clean Architecture, CQRS, and MediatR.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted dark:bg-card rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Core Skills</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  UI/UX Design (Figma, Canva), Frontend (React, TS, HTML/CSS), Backend (.NET, Node.js, Django), Databases (MySQL, Postgres), Clean Architecture, CQRS.
                </p>
              </div>
            </div>
            {/* Removed Project: KutumbaBhoj section */}
            {/* Removed Experience: DigiPrabhat section */}
            <div className="bg-muted dark:bg-card rounded-md h-full lg:col-span-1 p-6 aspect-square lg:aspect-auto flex justify-between flex-col"> {/* Adjusted span to 1 */}
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Architectural Patterns</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Experienced in Clean Architecture, CQRS, MediatR, and MVC for building scalable and maintainable applications.
                </p>
              </div>
            </div>
            {/* UI/UX Projects from CV */}
            <div className="bg-muted dark:bg-card rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" /> {/* Placeholder Icon */}
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Project: SN Enterprises</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Designed a professional website UI/UX for a pipe bending die manufacturer, including client gallery and contact form.
                </p>
              </div>
            </div>
            <div className="bg-muted dark:bg-card rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" /> {/* Placeholder Icon */}
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Project: KutumbaBhoj</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Designed the complete UI/UX for a food delivery web and mobile platform, focusing on a clean, user-friendly interface.
                </p>
              </div>
            </div>
            <div className="bg-muted dark:bg-card rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" /> {/* Placeholder Icon */}
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Project: Digital Wallet</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Designed a modern and secure UI/UX for a digital wallet app with data visualization features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

