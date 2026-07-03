import { FileText, Users, Building, ShieldCheck, Scale, ScrollText } from "lucide-react";
import { StatusBadge, StatusLegend, type StatusLevel } from "@/components/status-badge";

export default function Transparency() {
  const sections: { title: string; icon: React.ReactNode; items: { name: string; status: StatusLevel }[] }[] = [
    {
      title: "Governance & Board",
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: "Board of Directors", status: "implementation" },
        { name: "Executive Trustees", status: "implementation" },
        { name: "Advisory Council", status: "roadmap" },
      ]
    },
    {
      title: "Financial Integrity",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { name: "Public Financial Statements", status: "roadmap" },
        { name: "Annual Reports", status: "roadmap" },
        { name: "Independent Audits", status: "roadmap" },
      ]
    },
    {
      title: "Institutional Structure",
      icon: <Building className="w-6 h-6" />,
      items: [
        { name: "Corporate Architecture", status: "implementation" },
        { name: "Operating Divisions", status: "vision" },
        { name: "Subsidiary Governance", status: "roadmap" },
      ]
    },
    {
      title: "Charters & Policies",
      icon: <ScrollText className="w-6 h-6" />,
      items: [
        { name: "The Foundation Charter", status: "implementation" },
        { name: "Code of Ethics", status: "implementation" },
        { name: "Sustainability Mandate", status: "roadmap" },
      ]
    },
    {
      title: "Compliance",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        { name: "Regulatory Filings", status: "roadmap" },
        { name: "Global Compliance Standards", status: "roadmap" },
        { name: "Risk Management", status: "implementation" },
      ]
    },
    {
      title: "Legal Framework",
      icon: <Scale className="w-6 h-6" />,
      items: [
        { name: "Trust Deeds", status: "implementation" },
        { name: "Perpetual Trust Structure", status: "roadmap" },
        { name: "Beneficiary Rights", status: "implementation" },
      ]
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
          <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
            A 200-year institution must be built on unwavering trust. Confidence comes from precision, not
            exaggeration — every item below is labeled according to its true, current status.
          </p>
          <StatusLegend />
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
                    <li key={j} className="flex items-center justify-between gap-3 group">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors font-light tracking-wide">{item.name}</span>
                      <StatusBadge status={item.status} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 border border-primary/20 glass-card text-center max-w-3xl mx-auto">
             <h3 className="font-serif text-2xl text-foreground mb-4">The Guardian Mandate</h3>
             <p className="text-muted-foreground font-light leading-relaxed">
               Upon reaching the age of 21, Easaan is intended to assume the role of Guardian and Chairman. This
               planned transfer of authority will be bound by the Foundation Charter, currently under development,
               with the intention that the institution's future wealth and influence be perpetually directed
               toward the betterment of humanity, guided by Kindness, Integrity, and Compassion.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
