import { StatusBadge, StatusLegend, type StatusLevel } from "@/components/status-badge";

export default function Ecosystem() {
  const divisions: { category: string; items: { name: string; desc: string; status: StatusLevel }[] }[] = [
    {
      category: "Early Life",
      items: [
        { name: "Easaan Baby", desc: "Baby food, formula, diapers, wipes, feeding bottles, skincare, furniture, toys, safety products", status: "vision" },
        { name: "Easaan Kids", desc: "Children's clothing, shoes, bags, accessories, story books, educational toys", status: "vision" }
      ]
    },
    {
      category: "Knowledge & Growth",
      items: [
        { name: "Easaan Education", desc: "Playschools through universities, online learning, AI tutors", status: "roadmap" },
        { name: "Easaan Publishing", desc: "Children's books, educational books, digital books, comics, research", status: "roadmap" }
      ]
    },
    {
      category: "Innovation & Infrastructure",
      items: [
        { name: "Easaan Tech", desc: "Computers, laptops, phones, tablets, smart watches, operating system, AI, robotics, cloud", status: "vision" },
        { name: "Easaan Mobility", desc: "Bicycles, scooters, motorcycles, cars, electric vehicles", status: "vision" }
      ]
    },
    {
      category: "Wellbeing & Environment",
      items: [
        { name: "Easaan Healthcare", desc: "Clinics, children's hospitals, nutrition, vaccination programs, medical research", status: "roadmap" },
        { name: "Easaan Environment", desc: "Wildlife, forests, oceans, climate preservation", status: "vision" },
        { name: "Easaan Agriculture", desc: "Organic farming, sustainable food ecosystems", status: "vision" }
      ]
    },
    {
      category: "Lifestyle & Culture",
      items: [
        { name: "Easaan Living", desc: "Furniture, smart homes, construction, sustainable housing", status: "vision" },
        { name: "Easaan Hospitality", desc: "Hotels, resorts, restaurants, family entertainment", status: "vision" },
        { name: "Easaan Media", desc: "TV, movies, animation, games, music", status: "vision" },
        { name: "Easaan Sports", desc: "Sports academies, equipment, fitness", status: "vision" }
      ]
    },
    {
      category: "Wealth & Impact",
      items: [
        { name: "Easaan Financial", desc: "Bank, digital bank, credit/debit cards, wallet, insurance, investments, family wealth", status: "vision" },
        { name: "Humanitarian Division", desc: "Scholarships, disaster relief, education, food programs, innovation grants, child protection, women's empowerment, global health", status: "roadmap" }
      ]
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ecosystem-bg.png" 
            alt="Abstract network nodes" 
            className="w-full h-full object-cover object-top opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">The Structure</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 text-foreground">
            The <span className="text-gradient-gold">Ecosystem</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
            The Easaan Foundation is designed to govern a portfolio of future enterprises across every stage of life.
            None of the divisions below represent an existing commercial operation, brand, product or revenue stream today —
            each is presented honestly according to its true institutional status.
          </p>
          <StatusLegend />
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((category, i) => (
              <div key={i} className="glass-card p-8 group">
                <h2 className="font-serif text-2xl text-gradient-gold mb-8 pb-4 border-b border-white/10">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.items.map((item, j) => (
                    <div key={j} className="group/item">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-foreground font-medium tracking-wide flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors"></span>
                          {item.name}
                        </h3>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-3.5 border-l border-white/5 group-hover/item:border-primary/30 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest leading-relaxed">
              Divisions marked Strategic Roadmap are near-term institutional priorities under active planning.
              Divisions marked Long-Term Vision represent constitutional aspirations the Foundation intends to
              pursue over future decades, and should not be read as current or imminent commercial activity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
