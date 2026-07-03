import {
  Landmark,
  ShieldCheck,
  Scale,
  TrendingUp,
  Users,
  Building2,
  FileCheck2,
  Briefcase,
} from "lucide-react";

export default function LeadershipGovernance() {
  const governanceBodies = [
    {
      name: "Executive Office",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Provides day-to-day institutional direction and coordinates strategic execution across the Foundation's governance functions.",
    },
    {
      name: "Board of Trustees",
      icon: <Landmark className="w-6 h-6" />,
      desc: "Holds ultimate fiduciary responsibility for the Foundation's constitutional purpose, long-term strategy and institutional integrity.",
    },
    {
      name: "Strategic Advisory Council",
      icon: <Users className="w-6 h-6" />,
      desc: "Advises on portfolio direction, sector strategy and long-term positioning across the Foundation's areas of interest.",
    },
    {
      name: "Audit & Risk Committee",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Oversees financial integrity, internal controls and enterprise risk management across the institution.",
    },
    {
      name: "Compliance & Ethics Office",
      icon: <Scale className="w-6 h-6" />,
      desc: "Maintains adherence to regulatory obligations, ethical standards and the Foundation's Code of Ethics.",
    },
    {
      name: "Investment Committee",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "Evaluates capital allocation decisions and stewards the Foundation's long-term financial sustainability.",
    },
    {
      name: "Institutional Secretariat",
      icon: <FileCheck2 className="w-6 h-6" />,
      desc: "Maintains institutional records, governance documentation and the administration of Board proceedings.",
    },
    {
      name: "Corporate Affairs",
      icon: <Building2 className="w-6 h-6" />,
      desc: "Manages the Foundation's external relations, institutional communications and stakeholder engagement.",
    },
  ];

  const governancePrinciplesA = [
    "Governance",
    "Accountability",
    "Transparency",
    "Risk Management",
    "Long-Term Planning",
    "Ethical Leadership",
    "Institutional Continuity",
  ];

  const stewardshipAreas = [
    "Innovation",
    "Operational Excellence",
    "Capital Allocation",
    "Portfolio Oversight",
    "Research",
    "Technology",
    "Education",
    "Healthcare",
    "Consumer Products",
    "Environmental Sustainability",
    "Community Development",
  ];

  const institutionalPrinciples = [
    "Integrity",
    "Transparency",
    "Innovation",
    "Responsible Stewardship",
    "Operational Excellence",
    "Sustainability",
    "Long-Term Thinking",
    "Global Citizenship",
    "Human-Centric Innovation",
    "Intergenerational Responsibility",
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero / Introduction */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/founders-bg.png"
            alt="Abstract glowing rings representing institutional structure"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
            Institutional Governance
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 text-foreground">
            Leadership & <span className="text-gradient-gold">Governance</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            The Easaan Foundation is governed through a long-term stewardship framework designed to preserve
            institutional integrity, strategic continuity and responsible leadership across generations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light mt-6">
            Operating within the AR Holdings Group ecosystem, the Foundation provides governance, oversight and
            strategic direction for an expanding portfolio of purpose-driven enterprises. Its governance model is
            founded upon principles of transparency, accountability, disciplined execution, ethical leadership and
            long-term value creation.
          </p>
        </div>
      </section>

      {/* Institutional Governance */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">
            Institutional Governance
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-14">
            The Foundation follows internationally recognised principles of governance through clearly defined
            leadership responsibilities, oversight mechanisms and strategic planning frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {governancePrinciplesA.map((item, i) => (
              <span
                key={i}
                className="px-5 py-3 glass border border-white/10 text-sm uppercase tracking-widest text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Stewardship */}
      <section className="py-20 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">
            Strategic Stewardship
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-14">
            The Foundation is responsible for ensuring that every enterprise within its portfolio remains aligned
            with the institution's constitutional purpose.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stewardshipAreas.map((item, i) => (
              <div
                key={i}
                className="glass-card p-5 text-center text-sm uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">
            Governance Framework
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-14">
            The Foundation's governance functions are structured as follows. Formal appointments are made as the
            institution's governance framework is established.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceBodies.map((body, i) => (
              <div key={i} className="glass-card p-8 group hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-6 text-primary bg-black/50 group-hover:border-primary/50 transition-colors">
                  {body.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">{body.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{body.desc}</p>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 border border-white/10 px-2 py-1 rounded-sm">
                  Appointment Pending
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Principles */}
      <section className="py-20 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14">
            Institutional Principles
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-muted-foreground/70 text-sm tracking-[0.2em] uppercase font-semibold">
            {institutionalPrinciples.map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                {item}
                {i < institutionalPrinciples.length - 1 && (
                  <span className="text-primary/40 -ml-6">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Commitment */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Institutional Commitment</h2>
          <blockquote className="text-lg text-muted-foreground leading-relaxed font-light italic">
            "The Easaan Foundation is committed to responsible governance, disciplined execution and the long-term
            stewardship of enterprises that contribute meaningfully to society. Its institutional framework is
            designed to preserve purpose, strengthen accountability and enable sustainable growth for generations
            to come."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
