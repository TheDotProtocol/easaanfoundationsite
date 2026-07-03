import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force dark mode on body
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Story", path: "/story" },
    { name: "Founders", path: "/founders" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "Global Impact", path: "/impact" },
    { name: "Governance", path: "/transparency" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      {/* Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled ? "glass border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl tracking-widest text-gradient-gold font-semibold uppercase">EASAAN</span>
            <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">Foundation</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-primary ${
                  location === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-2xl tracking-widest uppercase transition-colors duration-300 ${
                location === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-16 mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex flex-col mb-6">
                <span className="font-serif text-2xl tracking-widest text-gradient-gold font-semibold uppercase">EASAAN</span>
                <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">Foundation</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                We don't build companies. We build a lifetime.<br/><br/>
                The Foundation exists to ensure one child grows into a leader who improves the lives of millions, designed to preserve values, innovation, family, compassion and responsibility across generations for 200+ years.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-serif tracking-widest uppercase text-sm mb-6">Explore</h4>
              <ul className="space-y-4">
                {navLinks.slice(0, 4).map(link => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-muted-foreground hover:text-primary text-sm transition-colors uppercase tracking-wider">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-serif tracking-widest uppercase text-sm mb-6">Institution</h4>
              <ul className="space-y-4">
                {navLinks.slice(4).map(link => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-muted-foreground hover:text-primary text-sm transition-colors uppercase tracking-wider">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} The Easaan Foundation. A Perpetual Legacy.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground uppercase tracking-widest">
              <span>Kindness</span>
              <span className="text-primary">•</span>
              <span>Integrity</span>
              <span className="text-primary">•</span>
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
