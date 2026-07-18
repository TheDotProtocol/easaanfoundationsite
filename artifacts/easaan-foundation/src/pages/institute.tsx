import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  Compass,
  FlaskConical,
  Globe2,
  GraduationCap,
  HandHeart,
  Heart,
  Landmark,
  Microscope,
  Palette,
  Rocket,
  Scale,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StatusBadge } from "@/components/status-badge";

type RoadmapPhase = "In Development" | "Planned" | "Future";

const manifestoValues = [
  {
    id: "dream",
    title: "Dream Without Fear",
    icon: <Sparkles className="w-6 h-6" />,
    summary:
      "Imagination must never be constrained by circumstance. The Institute exists so that talent may envision futures others dismiss as impossible.",
    detail:
      "We believe the first act of leadership is the courage to imagine. Scholars are encouraged to pursue bold questions, unconventional paths, and ideas that may not yet have a name—without fear of ridicule, exclusion, or financial penalty.",
  },
  {
    id: "build",
    title: "Build With Purpose",
    icon: <Building2 className="w-6 h-6" />,
    summary:
      "Vision alone is insufficient. We cultivate builders who translate ideas into disciplined, lasting contribution.",
    detail:
      "Purpose gives direction to talent. The Institute emphasises execution, craftsmanship, and accountability—teaching that meaningful innovation requires patience, rigour, and a commitment to outcomes that endure beyond individual ambition.",
  },
  {
    id: "lead",
    title: "Lead With Integrity",
    icon: <Scale className="w-6 h-6" />,
    summary:
      "Authority is earned through honesty, accountability, and service—not privilege, position, or performance alone.",
    detail:
      "Leadership at the Institute is defined by moral clarity. We expect scholars to speak truthfully, accept responsibility, and exercise influence with humility—understanding that institutional trust is the foundation of generational impact.",
  },
  {
    id: "learn",
    title: "Learn Forever",
    icon: <BookOpen className="w-6 h-6" />,
    summary:
      "Education does not conclude at graduation. Curiosity and intellectual humility define lifelong leaders.",
    detail:
      "The Institute treats learning as a permanent discipline—not a credential. We prepare individuals to adapt, question, and grow across decades, recognising that the challenges of the future will demand continuous renewal of knowledge and perspective.",
  },
  {
    id: "ladder",
    title: "Leave the Ladder Down",
    icon: <HandHeart className="w-6 h-6" />,
    summary:
      "Success is measured by who you elevate. Every scholar is expected to create pathways for those who follow.",
    detail:
      "Generosity is institutionalised, not optional. We cultivate a culture of mentorship, access, and reciprocity—ensuring that opportunity expands outward and that each generation strengthens the ladder for the next.",
  },
];

const scholarshipQualities = [
  "Curiosity",
  "Courage",
  "Integrity",
  "Leadership",
  "Creativity",
  "Service",
  "Academic Commitment",
  "Entrepreneurial Thinking",
];

const futureInitiatives = [
  {
    name: "Dreamers Fellowship",
    concept: "Immersive fellowship for visionary thinkers pursuing unconventional paths.",
    purpose: "To nurture imagination and intellectual courage at the earliest stages of a career.",
    status: "Future" as RoadmapPhase,
  },
  {
    name: "Builders Fellowship",
    concept: "Structured programme for founders, engineers, and creators building tangible solutions.",
    purpose: "To bridge the gap between vision and execution through mentorship and resources.",
    status: "Future" as RoadmapPhase,
  },
  {
    name: "Innovation Labs",
    concept: "Interdisciplinary research and prototyping environments.",
    purpose: "To accelerate experimentation across science, technology, and design.",
    status: "Planned" as RoadmapPhase,
  },
  {
    name: "Leadership Academy",
    concept: "Executive leadership development for public and private sector leaders.",
    purpose: "To cultivate principled decision-makers capable of stewarding institutions across generations.",
    status: "Planned" as RoadmapPhase,
  },
  {
    name: "Research Grants",
    concept: "Competitive funding for scholars pursuing high-impact research.",
    purpose: "To advance knowledge that serves humanity over the long term.",
    status: "Future" as RoadmapPhase,
  },
  {
    name: "Global Exchange Programme",
    concept: "International academic and cultural exchange between partner institutions.",
    purpose: "To broaden perspective and foster global collaboration among scholars.",
    status: "Future" as RoadmapPhase,
  },
  {
    name: "Mentorship Network",
    concept: "A lifelong network connecting scholars with experienced mentors across disciplines.",
    purpose: "To provide sustained guidance beyond formal programme completion.",
    status: "Planned" as RoadmapPhase,
  },
  {
    name: "Educator Excellence Initiative",
    concept: "Programmes recognising and developing exceptional educators.",
    purpose: "To strengthen the teachers who shape future generations of leaders.",
    status: "Future" as RoadmapPhase,
  },
  {
    name: "Entrepreneur Accelerator",
    concept: "Structured support for mission-driven ventures.",
    purpose: "To help founders build enterprises aligned with institutional values.",
    status: "Planned" as RoadmapPhase,
  },
  {
    name: "Community Impact Fund",
    concept: "Capital for community-led initiatives addressing local and global challenges.",
    purpose: "To extend the Institute's reach through grassroots, service-oriented projects.",
    status: "Future" as RoadmapPhase,
  },
];

const inspireCards = [
  { title: "Dreamers", desc: "Those who imagine what does not yet exist—and possess the courage to pursue it.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Builders", desc: "Those who transform vision into structures, systems, and solutions that endure.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Scientists", desc: "Those who seek truth through rigorous inquiry and disciplined experimentation.", icon: <FlaskConical className="w-5 h-5" /> },
  { title: "Artists", desc: "Those who express humanity's deepest truths through creativity and craft.", icon: <Palette className="w-5 h-5" /> },
  { title: "Engineers", desc: "Those who design the infrastructure of tomorrow with precision and purpose.", icon: <Compass className="w-5 h-5" /> },
  { title: "Entrepreneurs", desc: "Those who build enterprises that create opportunity and lasting value.", icon: <Rocket className="w-5 h-5" /> },
  { title: "Researchers", desc: "Those who advance knowledge at the frontier of human understanding.", icon: <Microscope className="w-5 h-5" /> },
  { title: "Educators", desc: "Those who shape minds and character with patience, wisdom, and dedication.", icon: <GraduationCap className="w-5 h-5" /> },
  { title: "Doctors", desc: "Those who heal, protect, and advance the science of human wellbeing.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Public Servants", desc: "Those who dedicate their lives to institutions that serve the common good.", icon: <Landmark className="w-5 h-5" /> },
  { title: "Community Leaders", desc: "Those who mobilise people and resources to strengthen the fabric of society.", icon: <Users className="w-5 h-5" /> },
  { title: "Environmental Stewards", desc: "Those who protect the planet for generations yet unborn.", icon: <Globe2 className="w-5 h-5" /> },
  { title: "Compassionate Leaders", desc: "Those who lead with empathy, humility, and an unwavering commitment to others.", icon: <Heart className="w-5 h-5" /> },
  { title: "Technologists", desc: "Those who harness innovation responsibly to expand human capability.", icon: <Brain className="w-5 h-5" /> },
];

const institutionalRoadmap = [
  { phase: "Foundation Development", desc: "Establishing the institutional architecture, legal framework, and operational foundations of the Institute.", status: "In Development" as RoadmapPhase },
  { phase: "Institutional Governance", desc: "Designing governance structures, advisory bodies, and ethical frameworks for long-term stewardship.", status: "In Development" as RoadmapPhase },
  { phase: "Strategic Partnerships", desc: "Building relationships with universities, foundations, and mission-aligned organisations.", status: "Planned" as RoadmapPhase },
  { phase: "Scholarship Launch", desc: "Opening the Easaan Scholarship following completion of operational readiness.", status: "Planned" as RoadmapPhase },
  { phase: "Leadership Programmes", desc: "Introducing structured fellowships and leadership development initiatives.", status: "Planned" as RoadmapPhase },
  { phase: "International Expansion", desc: "Extending programmes and partnerships across global regions.", status: "Future" as RoadmapPhase },
  { phase: "Research Initiatives", desc: "Funding and supporting high-impact research across disciplines.", status: "Future" as RoadmapPhase },
  { phase: "Centres of Excellence", desc: "Establishing dedicated centres for innovation, leadership, and interdisciplinary study.", status: "Future" as RoadmapPhase },
  { phase: "Global Alumni Network", desc: "Connecting generations of scholars through mentorship, collaboration, and lifelong learning.", status: "Future" as RoadmapPhase },
];

const faqs = [
  {
    q: "What is the Easaan Institute?",
    a: "The Easaan Institute for Dreamers & Builders is the educational and leadership development initiative of the Easaan Foundation. It exists to cultivate innovators, educators, researchers, entrepreneurs, and compassionate leaders through opportunity, character, and lifelong learning.",
  },
  {
    q: "What is the Easaan Scholarship?",
    a: "The Easaan Scholarship is the Institute's flagship initiative—designed to recognise potential rather than privilege. It supports individuals who demonstrate curiosity, courage, integrity, leadership, creativity, service, academic commitment, and entrepreneurial thinking.",
  },
  {
    q: "Who can apply?",
    a: "Applications will be open to individuals who embody the Institute's constitutional values and demonstrate the qualities outlined in our scholarship criteria. Eligibility requirements will be published when applications open.",
  },
  {
    q: "How are scholars selected?",
    a: "Selection will be governed by the Institute's constitutional principles—evaluating character, potential, and contribution alongside academic achievement. A formal selection framework is currently under development.",
  },
  {
    q: "Is the Institute operational?",
    a: "The Institute is in institutional development. Governance design, strategic partnerships, and implementation planning are currently underway. Programmes described on this page are distinguished between active development and future roadmap items.",
  },
  {
    q: "How can organisations partner?",
    a: "Mission-aligned universities, foundations, and institutions are invited to express interest through contact@easaanfoundation.com. Partnership frameworks will be established as the Institute's governance structure is finalised.",
  },
  {
    q: "When will applications open?",
    a: "Applications for the Easaan Scholarship will open following completion of the Foundation's operational readiness programme. No application timeline has been announced at this time.",
  },
];

function RoadmapStatus({ status }: { status: RoadmapPhase }) {
  const styles: Record<RoadmapPhase, string> = {
    "In Development": "text-sky-400 border-sky-400/30 bg-sky-400/10",
    Planned: "text-primary border-primary/30 bg-primary/10",
    Future: "text-violet-300 border-violet-300/30 bg-violet-300/10",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-widest ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function Institute() {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/institute-bg.png"
            alt="Students, innovators, and educators in a premium institutional setting"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
            Dreamers &amp; Builders
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-foreground">
            Easaan Institute for{" "}
            <span className="text-gradient-gold">Dreamers &amp; Builders</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Building generations of innovators, educators, scientists, entrepreneurs, artists,
            researchers, public servants and compassionate leaders through opportunity, character
            and lifelong learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#scholarship"
              className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              The Easaan Scholarship
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#manifesto"
              className="px-8 py-4 glass text-foreground text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Read the Manifesto
            </a>
          </div>
        </div>
      </section>

      {/* 1. Why We Exist */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
            Our Purpose
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-10">
            Why We <span className="text-gradient-gold">Exist</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              The Easaan Institute is the educational and leadership development initiative of the
              Easaan Foundation—a perpetual institution dedicated to improving humanity through
              innovation, education, technology, and compassion.
            </p>
            <p>
              We hold that education is not merely the transfer of knowledge. It is the development
              of character, courage, curiosity, and contribution. It is the cultivation of individuals
              capable of leading with integrity, learning without limit, and leaving the world better
              than they found it.
            </p>
            <p>
              The Institute exists because talent should never be limited by circumstance. Our mission
              is to identify potential wherever it resides—to provide opportunity, mentorship, and
              institutional support to those who demonstrate the qualities of dreamers and builders.
            </p>
            <p className="text-foreground/80 font-serif italic text-xl border-l-2 border-primary/40 pl-6">
              To improve humanity by building products, services, education, technology and
              opportunities that positively impact every stage of human life—and to ensure that
              excellence is recognised by character, not privilege.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Easaan Manifesto */}
      <section id="manifesto" className="py-24 bg-black/40 border-y border-white/5 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
              Constitutional Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              The Easaan <span className="text-gradient-gold">Manifesto</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Five constitutional values guide the Institute's governance, programme design,
              partnerships, and scholarship selection. They are not marketing statements—they are
              enduring commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {manifestoValues.map((value, i) => (
              <div
                key={value.id}
                className="glass-card p-8 flex flex-col group hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-6 text-primary bg-black/50 group-hover:border-primary/50 transition-colors">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-4 leading-snug">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {value.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setExpandedValue(expandedValue === value.id ? null : value.id)}
                  className="text-left text-[10px] uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  Read More
                  <ArrowRight size={12} className={expandedValue === value.id ? "rotate-90" : ""} />
                </button>
                {expandedValue === value.id && (
                  <p className="mt-4 pt-4 border-t border-white/10 text-muted-foreground text-sm leading-relaxed animate-in fade-in duration-300">
                    {value.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Easaan Scholarship */}
      <section id="scholarship" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <div>
              <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
                Flagship Initiative
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                The Easaan <span className="text-gradient-gold">Scholarship</span>
              </h2>
            </div>
            <StatusBadge status="implementation" />
          </div>

          <div className="space-y-8 text-muted-foreground text-lg leading-relaxed font-light mb-12">
            <p>
              The Easaan Scholarship recognises potential rather than privilege. It is designed for
              individuals who demonstrate the qualities of dreamers and builders—regardless of
              background, geography, or financial circumstance.
            </p>
            <p>
              Scholarships are one component of a lifelong leadership ecosystem. Recipients will be
              invited into a community of mentors, peers, and institutional partners committed to
              their development across decades—not merely the duration of a degree.
            </p>
          </div>

          <div className="glass-card p-10 mb-12">
            <h3 className="font-serif text-xl text-foreground mb-8">We seek individuals who demonstrate</h3>
            <div className="flex flex-wrap gap-3">
              {scholarshipQualities.map((quality) => (
                <span
                  key={quality}
                  className="px-4 py-2 glass border border-white/10 text-sm text-muted-foreground tracking-wide"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-black/30 p-8 md:p-10">
            <h4 className="font-serif text-sm text-foreground mb-4 uppercase tracking-widest">
              Current Status
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Institutional development, partnerships, governance design and implementation are
              currently underway. Applications will open following completion of the Foundation&apos;s
              operational readiness programme.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Beyond Scholarships */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
              Institutional Roadmap
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Beyond <span className="text-gradient-gold">Scholarships</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              The initiatives below represent the Institute&apos;s long-term vision. They are presented
              as a roadmap—not as active programmes. Status labels indicate planning stage only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureInitiatives.map((item, i) => (
              <div
                key={item.name}
                className="glass-card p-8 group hover:border-primary/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                style={{ animationDelay: `${(i % 4) * 75}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                  <RoadmapStatus status={item.status} />
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-primary block mb-1">
                      Concept
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{item.concept}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-primary block mb-1">
                      Purpose
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{item.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who We Hope To Inspire */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
              Our Constituency
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Who We Hope To <span className="text-gradient-gold">Inspire</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              The Institute exists for individuals who seek to improve humanity—across every
              discipline, profession, and path of service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {inspireCards.map((card, i) => (
              <div
                key={card.title}
                className="glass-card p-6 group hover:-translate-y-2 hover:border-primary/40 transition-all duration-500 cursor-default animate-in fade-in zoom-in-95 fill-mode-both"
                style={{ animationDelay: `${(i % 8) * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center mb-4 text-primary bg-black/50 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Institutional Principles */}
      <section id="principles" className="py-24 bg-black/40 border-y border-white/5 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
              Timeless Commitments
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Institutional <span className="text-gradient-gold">Principles</span>
            </h2>
          </div>

          <div className="space-y-12">
            {manifestoValues.map((value, i) => (
              <div
                key={value.id}
                className="border-b border-white/5 pb-12 last:border-0 last:pb-0 group"
              >
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="font-serif text-3xl text-primary/30 group-hover:text-primary/60 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground">{value.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light pl-0 md:pl-16">
                  {value.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Institutional Roadmap Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-20">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
              Generational Vision
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Institutional <span className="text-gradient-gold">Roadmap</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              A multi-decade path toward a world-class educational institution—presented with
              honesty about what is in development and what remains future vision.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

            <div className="space-y-10">
              {institutionalRoadmap.map((item) => (
                <div key={item.phase} className="relative pl-12 md:pl-20 group">
                  <div className="absolute left-4 md:left-8 w-3 h-3 rounded-full bg-black border-2 border-primary -translate-x-1/2 top-2 group-hover:scale-125 group-hover:bg-primary transition-all duration-500" />
                  <div className="glass-card p-6 md:p-8 group-hover:border-primary/30 transition-colors duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="font-serif text-xl text-foreground">{item.phase}</h3>
                      <RoadmapStatus status={item.status} />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
              Clarity &amp; Transparency
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="font-serif text-base md:text-lg text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. Closing Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
          <Shield className="w-10 h-10 text-primary mx-auto mb-10 opacity-60" />
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-light italic">
            &ldquo;The future belongs to those who dare to imagine it, possess the courage to build
            it, and remain humble enough to leave it better than they found it.&rdquo;
          </blockquote>
          <p className="mt-10 text-muted-foreground text-lg leading-relaxed font-light max-w-3xl mx-auto">
            The Easaan Institute for Dreamers &amp; Builders exists to cultivate those
            individuals—today, tomorrow and for generations to come.
          </p>
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/transparency"
              className="px-8 py-4 glass text-foreground text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
            >
              Institutional Governance
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/story"
              className="px-8 py-4 border border-primary/30 text-primary text-sm tracking-widest uppercase hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              The Foundation Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
