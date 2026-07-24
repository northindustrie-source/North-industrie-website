import type { Metadata } from "next";
import { SiteContent } from "../components/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for North Industrie and the OSS platform.",
};

export default function PrivacyPolicyPage() {
  return <SiteContent page="privacy" />;
}
