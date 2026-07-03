import { Heart } from "lucide-react";

export default function Founders() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/founders-bg.png" 
            alt="Abstract glowing rings" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">The Founders</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 text-foreground">
            Arun & Saleena
          </h1>
          <p className="text-xl text-primary/80 font-serif italic max-w-2xl mx-auto">
            "Mommy Tau & Daddy"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="glass p-12 md:p-16 border-t border-b border-primary/20 relative">
            <Heart className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary bg-background p-1" />
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light text-center">
              <p>
                The Easaan Foundation was not created out of a desire for mere wealth accumulation. It was forged from a profound realization: <strong className="text-foreground font-normal">true wealth is responsibility.</strong>
              </p>
              
              <p>
                When Arun and Saleena welcomed Easaan into the world, their definition of legacy transformed. They resolved to build an institution not so their son would become rich, but so he would become <span className="text-gradient-gold italic">responsible for improving humanity.</span>
              </p>

              <div className="py-8 my-8 border-y border-white/5">
                <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-snug">
                  "We entrust Easaan not with a fortune to spend, but with an engine to serve. He is the Guardian of a vision that must outlast us all."
                </blockquote>
              </div>

              <p>
                Every division, every company, and every initiative within the Foundation is infused with their core values. They built the framework; Easaan, at age 21, will take the helm to steer it toward a brighter, more compassionate future for millions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
