import { Asterisk } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  speed?: "normal" | "slow";
  className?: string;
  icon?: LucideIcon;
  iconClass?: string;
};

/**
 * Pure-CSS infinite marquee. The track is duplicated so the -50% keyframe
 * loops seamlessly. Animation is disabled under prefers-reduced-motion.
 */
export function Marquee({
  items,
  reverse = false,
  speed = "normal",
  className = "",
  icon: Icon = Asterisk,
  iconClass = "text-acid",
}: MarqueeProps) {
  const anim = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  const track = [...items, ...items];

  return (
    <div className={`mask-fade-x overflow-hidden ${className}`} aria-hidden="true">
      <div className={`flex w-max ${anim}`}>
        {track.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-6 sm:px-10">{item}</span>
            <Icon className={`h-5 w-5 shrink-0 sm:h-7 sm:w-7 ${iconClass}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
