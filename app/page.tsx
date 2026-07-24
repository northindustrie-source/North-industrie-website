import type { Metadata } from "next";
import { SiteContent } from "./components/site-content";

export const metadata: Metadata = {
  title: "North Industrie | Premium OSS for sport and business",
  description: "North Industrie develops OSS, an all-in-one platform for Brazilian Jiu-Jitsu coaches, clubs and students.",
};

export default function HomePage() {
  return <SiteContent page="home" />;
}
