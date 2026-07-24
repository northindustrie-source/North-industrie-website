import type { Metadata } from "next";
import { SiteContent } from "../components/site-content";

export const metadata: Metadata = {
  title: "Delete account",
  description: "How to request deletion of your data from North Industrie and OSS.",
};

export default function DeleteAccountPage() {
  return <SiteContent page="delete-account" />;
}
