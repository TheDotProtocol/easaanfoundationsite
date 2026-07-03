import { Link } from "wouter";
import { ArrowRight, Globe, Shield, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Abstract golden light representing legacy" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">A Perpetual Institution</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 text-foreground">
              One Child.<br />
              <span className="text-gradient-gold">One Legacy.</span><br />
              A Better World.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              The Easaan Foundation is a perpetual institution dedicated to improving humanity through innovation, education, technology and compassion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/story" 
                className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Explore the Legacy
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/impact" 
                className="px-8 py-4 glass text-foreground text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Discover Our Mission
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-pulse">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">
              We don't build companies.<br />
              <span className="text-gradient-gold italic">We build a lifetime.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The Foundation Philosophy is simple: every stage of life should be supported. 
              From the moment a child is born, through their education, their career, 
              their health, and their legacy—we build companies around each stage to ensure 
              humanity thrives. Profits flow back into education, healthcare, technology, 
              and humanitarian causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Birth & Early Years", icon: <Heart className="w-6 h-6 text-primary" />, desc: "Nurturing the most critical years with premium care, nutrition, and safety." },
              { title: "Education & Growth", icon: <Lightbulb className="w-6 h-6 text-primary" />, desc: "Fostering minds from playschools to advanced AI-assisted university learning." },
              { title: "Technology & Future", icon: <Globe className="w-6 h-6 text-primary" />, desc: "Building the infrastructure of tomorrow through robotics, OS, and cloud tech." },
              { title: "Health & Wellbeing", icon: <Shield className="w-6 h-6 text-primary" />, desc: "Advancing human longevity through hospitals, research, and holistic care." },
              { title: "Mobility & Living", icon: <ArrowRight className="w-6 h-6 text-primary" />, desc: "Sustainable transport and smart environments designed for the next century." },
              { title: "Humanitarian Impact", icon: <Globe className="w-6 h-6 text-primary" />, desc: "Global outreach focused on scholarships, relief, and planetary preservation." }
            ].map((pillar, i) => (
              <div key={i} className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary/50 transition-colors bg-black/50">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Marquee / Banner */}
      <section className="py-20 border-y border-white/5 bg-black/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-muted-foreground/60 text-sm tracking-[0.2em] uppercase font-semibold">
            <span>Kindness</span>
            <span className="text-primary/40">•</span>
            <span>Family</span>
            <span className="text-primary/40">•</span>
            <span>Integrity</span>
            <span className="text-primary/40">•</span>
            <span>Innovation</span>
            <span className="text-primary/40">•</span>
            <span>Compassion</span>
            <span className="text-primary/40">•</span>
            <span>Education</span>
            <span className="text-primary/40">•</span>
            <span>Leadership</span>
            <span className="text-primary/40">•</span>
            <span>Sustainability</span>
            <span className="text-primary/40">•</span>
            <span>Transparency</span>
          </div>
        </div>
      </section>
    </div>
  );
}
