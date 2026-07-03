import { FileText, Users, Building, ShieldCheck, Scale, ScrollText } from "lucide-react";

export default function Transparency() {
  const sections = [
    {
      title: "Governance & Board",
      icon: <Users className="w-6 h-6" />,
      items: ["Board of Directors", "Executive Trustees", "Advisory Council"]
    },
    {
      title: "Financial Integrity",
      icon: <FileText className="w-6 h-6" />,
      items: ["Public Financial Statements", "Annual Reports", "Independent Audits"]
    },
    {
      title: "Institutional Structure",
      icon: <Building className="w-6 h-6" />,
      items: ["Corporate Architecture", "Operating Divisions", "Subsidiary Governance"]
    },
    {
      title: "Charters & Policies",
      icon: <ScrollText className="w-6 h-6" />,
      items: ["The Foundation Charter", "Code of Ethics", "Sustainability Mandate"]
    },
    {
      title: "Compliance",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: ["Regulatory Filings", "Global Compliance Standards", "Risk Management"]
    },
    {
      title: "Legal Framework",
      icon: <Scale className="w-6 h-6" />,
      items: ["Trust Deeds", "Perpetual Trust Structure", "Beneficiary Rights"]
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src="/transparency-bg.png" 
            alt="Monumental columns representing structure" 
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">Institutional Trust</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 text-foreground">
            Transparency & <span className="text-gradient-gold">Governance</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            A 200-year institution must be built on unwavering trust. We operate with radical transparency, governed by a charter that preserves our core values across generations.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, i) => (
              <div key={i} className="glass border border-white/5 p-8 hover:border-primary/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-primary p-3 bg-primary/10 rounded-sm">
                    {section.icon}
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">{section.title}</h2>
                </div>
                
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center justify-between group cursor-not-allowed">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors font-light tracking-wide">{item}</span>
                      <span className="text-[10px] uppercase tracking-widest text-primary/40 border border-primary/20 px-2 py-1 rounded-sm">Confidential</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 border border-primary/20 glass-card text-center max-w-3xl mx-auto">
             <h3 className="font-serif text-2xl text-foreground mb-4">The Guardian Mandate</h3>
             <p className="text-muted-foreground font-light leading-relaxed">
               Upon reaching the age of 21, Easaan assumes the role of Guardian and Chairman. This transfer of authority is bound by the Foundation Charter, ensuring that the institution's wealth and influence are perpetually directed toward the betterment of humanity, guided by Kindness, Integrity, and Compassion.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
