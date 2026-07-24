import type { Metadata } from "next";
import { SiteContent } from "../components/site-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the OSS platform.",
};

export default function TermsPage() {
  return <SiteContent page="terms" />;
}
