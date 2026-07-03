import { useState } from "react";
import { CheckCircle2, Wrench, Map, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatusLevel = "operational" | "implementation" | "roadmap" | "vision";

export const STATUS_CONFIG: Record<
  StatusLevel,
  { label: string; short: string; color: string; dot: string; icon: React.ReactNode; description: string }
> = {
  operational: {
    label: "Currently Operational",
    short: "Operational",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    dot: "bg-emerald-400",
    icon: <CheckCircle2 className="w-3 h-3" />,
    description: "An established institutional asset that exists today and is active.",
  },
  implementation: {
    label: "Under Implementation",
    short: "Implementation",
    color: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    dot: "bg-sky-400",
    icon: <Wrench className="w-3 h-3" />,
    description: "A real initiative presently in active development, engineering, or regulatory process.",
  },
  roadmap: {
    label: "Strategic Roadmap",
    short: "Roadmap",
    color: "text-primary border-primary/30 bg-primary/10",
    dot: "bg-primary",
    icon: <Map className="w-3 h-3" />,
    description: "A future enterprise approved within the Foundation's long-term institutional strategy.",
  },
  vision: {
    label: "Long-Term Vision",
    short: "Vision",
    color: "text-violet-300 border-violet-300/30 bg-violet-300/10",
    dot: "bg-violet-300",
    icon: <Sparkles className="w-3 h-3" />,
    description: "Part of the Foundation's constitutional, multi-decade vision rather than near-term execution.",
  },
};

export function StatusBadge({ status, className }: { status: StatusLevel; className?: string }) {
  const [open, setOpen] = useState(false);
  const config = STATUS_CONFIG[status];

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-widest cursor-help",
          config.color,
          className
        )}
      >
        <span className={cn("w-1.5 h-1.5 rounded-full", config.dot)} />
        {config.short}
      </span>
      {open && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-md glass-card text-[11px] normal-case tracking-normal font-normal text-muted-foreground leading-relaxed shadow-xl">
          <span className="block text-foreground font-semibold text-[11px] uppercase tracking-widest mb-1">
            {config.label}
          </span>
          {config.description}
        </span>
      )}
    </span>
  );
}

export function StatusLegend() {
  const order: StatusLevel[] = ["operational", "implementation", "roadmap", "vision"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {order.map((key) => (
        <StatusBadge key={key} status={key} />
      ))}
    </div>
  );
}
