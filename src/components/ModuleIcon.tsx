import {
  Network,
  Router,
  Layers,
  GitBranch,
  Waypoints,
  Cable,
  Share2,
  Building2,
  Globe,
  History,
  Globe2,
  Terminal,
  Video,
  ShieldCheck,
  ShieldAlert,
  type LucideProps,
} from "lucide-react";
import type { IconKey } from "../data/modules";

const map: Record<IconKey, React.ComponentType<LucideProps>> = {
  network: Network,
  hub: Router,
  layers: Layers,
  types: GitBranch,
  structure: Waypoints,
  cable: Cable,
  topology: Share2,
  intranet: Building2,
  globe: Globe2,
  history: History,
  sitemap: Globe,
  protocol: Terminal,
  video: Video,
  "shield-lock": ShieldCheck,
  firewall: ShieldAlert,
};

export default function ModuleIcon({
  icon,
  className,
}: {
  icon: IconKey;
  className?: string;
}) {
  const Icon = map[icon];
  return <Icon className={className} />;
}
