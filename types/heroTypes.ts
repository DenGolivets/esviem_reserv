import { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: string;
  title: string;
  icon: LucideIcon;
  position: { x: string; y: string };
  sectionId: string;
  description: string;
}