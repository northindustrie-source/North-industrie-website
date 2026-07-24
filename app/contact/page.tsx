import type { Metadata } from "next";
import { SiteContent } from "../components/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with North Industrie for OSS demos and partnerships.",
};

export default function ContactPage() {
  return <SiteContent page="home" />;
}
