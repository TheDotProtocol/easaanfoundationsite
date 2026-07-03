import { useEffect, useState } from "react";
import { Globe, Users, TreePine, Utensils, BookOpen, Building2, HeartPulse, Droplets, Cpu, FlaskConical } from "lucide-react";

// Animated counter component
function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Impact() {
  const metrics = [
    { label: "Countries Served", value: 142, icon: <Globe className="w-5 h-5" /> },
    { label: "Children Helped", value: 2500000, suffix: "+", icon: <Users className="w-5 h-5" /> },
    { label: "Trees Planted", value: 10000000, suffix: "+", icon: <TreePine className="w-5 h-5" /> },
    { label: "Meals Served", value: 50000000, suffix: "+", icon: <Utensils className="w-5 h-5" /> },
    { label: "Scholarships", value: 150000, icon: <BookOpen className="w-5 h-5" /> },
    { label: "Schools Built", value: 1200, icon: <Building2 className="w-5 h-5" /> },
    { label: "Hospitals Supported", value: 450, icon: <HeartPulse className="w-5 h-5" /> },
    { label: "Water Projects", value: 3400, icon: <Droplets className="w-5 h-5" /> },
    { label: "Technology Donated", value: 850000, icon: <Cpu className="w-5 h-5" /> },
    { label: "Research Projects", value: 620, icon: <FlaskConical className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/impact-bg.png" 
            alt="Global impact network" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">Real-Time Dashboard</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 text-foreground">
            Global <span className="text-gradient-gold">Impact</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Measuring our commitment to humanity. Numbers that represent lives changed, futures secured, and a planet preserved.
          </p>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="glass-card p-8 flex flex-col justify-between group hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                    <Counter end={metric.value} suffix={metric.suffix} />
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
               * Illustrative metrics demonstrating the scale of the Foundation's perpetual vision.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
