import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

type NavLink = {
  name: string;
  path: string;
  subtitle?: string;
};

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

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/story" },
    { name: "Easaan Institute", path: "/institute", subtitle: "Dreamers & Builders" },
    { name: "Leadership", path: "/founders" },
    { name: "Portfolio", path: "/ecosystem" },
    { name: "Global Impact", path: "/impact" },
    { name: "Governance", path: "/transparency" },
  ];

  const footerNavLinks: NavLink[] = [
    { name: "About", path: "/story" },
    { name: "Easaan Institute", path: "/institute" },
    { name: "Leadership & Governance", path: "/founders" },
    { name: "Institutional Charter", path: "/transparency" },
    { name: "Portfolio", path: "/ecosystem" },
    { name: "Impact", path: "/impact" },
    { name: "Transparency", path: "/transparency" },
    { name: "News", path: "/story" },
    { name: "Careers", path: "/founders" },
    { name: "Privacy Policy", path: "/transparency" },
    { name: "Terms of Use", path: "/transparency" },
    { name: "Accessibility", path: "/transparency" },
    { name: "Contact", path: "/transparency" },
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
          <Link href="/" className="flex items-center gap-3">
            <img src="/easaan-logo.png" alt="Easaan Foundation" className="h-10 w-auto object-contain" />
            <span className="flex flex-col">
              <span className="font-serif text-xl tracking-widest text-gradient-gold font-semibold uppercase leading-tight">EASAAN</span>
              <span className="text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">Foundation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`group relative flex flex-col items-center text-sm uppercase tracking-widest transition-colors duration-300 hover:text-primary ${
                  location === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span>{link.name}</span>
                {link.subtitle && (
                  <span className="absolute top-full mt-1 whitespace-nowrap text-[9px] normal-case tracking-[0.2em] text-primary/80 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    {link.subtitle}
                  </span>
                )}
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
              className={`flex flex-col items-center transition-colors duration-300 ${
                location === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              <span className="font-serif text-2xl tracking-widest uppercase">{link.name}</span>
              {link.subtitle && (
                <span className="text-xs tracking-[0.25em] text-primary/70 mt-2 normal-case">
                  {link.subtitle}
                </span>
              )}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            {/* Left */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <img src="/easaan-logo.png" alt="Easaan Foundation" className="h-10 w-auto object-contain" />
                <span className="flex flex-col">
                  <span className="font-serif text-xl tracking-widest text-gradient-gold font-semibold uppercase leading-tight">EASAAN</span>
                  <span className="text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">Foundation</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                &copy; {new Date().getFullYear()} Easaan Foundation.<br />
                A Perpetual Stewardship Institution.<br />
                A Unit of AR Holdings Group Corporation.
              </p>
            </div>

            {/* Middle */}
            <div>
              <h4 className="text-foreground font-serif tracking-widest uppercase text-sm mb-6">Official Headquarters</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                1075 Terra Bella Avenue<br />
                Mountain View<br />
                California 94043<br />
                United States
              </p>
            </div>

            {/* Right */}
            <div>
              <h4 className="text-foreground font-serif tracking-widest uppercase text-sm mb-6">Official Contact</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                1-800-EASAAN<br />
                contact@easaanfoundation.com
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start">
            {footerNavLinks.map((link, i) => (
              <Link
                key={`${link.path}-${i}`}
                href={link.path}
                className="text-muted-foreground hover:text-primary text-xs uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Disclaimer */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-muted-foreground/60 text-xs leading-relaxed max-w-4xl">
              The Easaan Foundation operates as a perpetual stewardship institution within the AR Holdings Group
              ecosystem. The Foundation provides long-term strategic stewardship, institutional governance and
              responsible oversight for designated enterprises and humanitarian initiatives while preserving its
              mission of advancing innovation, education, healthcare, sustainability and long-term societal impact.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
