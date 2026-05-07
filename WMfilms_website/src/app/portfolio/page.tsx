import type { Metadata } from "next";
import { PortfolioPageContent } from "@/components/sections/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio - WMfilms",
  description:
    "Preview portfolio dokumentasi sport, wedding, dan event dari WMfilms.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
