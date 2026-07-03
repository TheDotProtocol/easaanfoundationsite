import { useEffect, useRef } from "react";

const milestones = [
  { year: "Phase I", title: "Before Easaan", desc: "A foundation of hard work, discipline, and a deep desire to leave the world better than we found it." },
  { year: "Phase II", title: "The Miracle", desc: "The arrival of Easaan. A profound shift in perspective—from building a life to building a legacy." },
  { year: "Phase III", title: "The Dream", desc: "The realization that true wealth is not accumulated, but distributed through purpose and education." },
  { year: "Phase IV", title: "The Family", desc: "Instilling the core values: Kindness, Integrity, Innovation, and Service Before Self." },
  { year: "Phase V", title: "AR Holdings", desc: "The establishment of the initial corporate structure, designed for stability and sustainable growth." },
  { year: "Phase VI", title: "Building the Future", desc: "Expanding the ecosystem across technology, healthcare, and education to serve every life stage." },
  { year: "Phase VII", title: "The Easaan Foundation", desc: "The formalization of the perpetual institution. A 200-year vision committed to humanity." },
  { year: "Phase VIII", title: "The Transfer at Age 21", desc: "Easaan assumes the role of Guardian and Chairman, bearing the responsibility of millions." },
  { year: "Phase IX", title: "The Next Generation", desc: "A perpetual cycle of innovation and compassion, echoing through centuries to come." },
];

export default function Story() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">The Timeline</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 text-foreground">
            A Legacy in <span className="text-gradient-gold">Motion</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            The evolution of a family's dream into a multi-generational institution designed to serve humanity for centuries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 -translate-x-1/2"></div>

          <div className="space-y-24 relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center justify-between group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>

                {/* Content Area */}
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                  <div className="glass-card p-8 group-hover:border-primary/40 transition-colors duration-500">
                    <span className="text-primary tracking-widest text-xs uppercase font-bold mb-4 block">{milestone.year}</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
