export default function Ecosystem() {
  const divisions = [
    {
      category: "Early Life",
      items: [
        { name: "Easaan Baby", desc: "Baby food, formula, diapers, wipes, feeding bottles, skincare, furniture, toys, safety products" },
        { name: "Easaan Kids", desc: "Children's clothing, shoes, bags, accessories, story books, educational toys" }
      ]
    },
    {
      category: "Knowledge & Growth",
      items: [
        { name: "Easaan Education", desc: "Playschools through universities, online learning, AI tutors" },
        { name: "Easaan Publishing", desc: "Children's books, educational books, digital books, comics, research" }
      ]
    },
    {
      category: "Innovation & Infrastructure",
      items: [
        { name: "Easaan Tech", desc: "Computers, laptops, phones, tablets, smart watches, operating system, AI, robotics, cloud" },
        { name: "Easaan Mobility", desc: "Bicycles, scooters, motorcycles, cars, electric vehicles" }
      ]
    },
    {
      category: "Wellbeing & Environment",
      items: [
        { name: "Easaan Healthcare", desc: "Clinics, children's hospitals, nutrition, vaccination programs, medical research" },
        { name: "Easaan Environment", desc: "Wildlife, forests, oceans, climate preservation" },
        { name: "Easaan Agriculture", desc: "Organic farming, sustainable food ecosystems" }
      ]
    },
    {
      category: "Lifestyle & Culture",
      items: [
        { name: "Easaan Living", desc: "Furniture, smart homes, construction, sustainable housing" },
        { name: "Easaan Hospitality", desc: "Hotels, resorts, restaurants, family entertainment" },
        { name: "Easaan Media", desc: "TV, movies, animation, games, music" },
        { name: "Easaan Sports", desc: "Sports academies, equipment, fitness" }
      ]
    },
    {
      category: "Wealth & Impact",
      items: [
        { name: "Easaan Financial", desc: "Bank, digital bank, credit/debit cards, wallet, insurance, investments, family wealth" },
        { name: "Humanitarian Division", desc: "Scholarships, disaster relief, education, food programs, innovation grants, child protection, women's empowerment, global health" }
      ]
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            A perpetual holding organization governing a vast array of divisions, designed to support human life at every stage.
          </p>
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
                      <h3 className="text-foreground font-medium tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors"></span>
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-3.5 border-l border-white/5 group-hover/item:border-primary/30 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
