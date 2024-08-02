import Home from "@/components/home";
import app from "@/config/app";
import { Metadata } from "next";

export function generateMetadata({ searchParams }: { searchParams: object }): Metadata {
  const metadata: Metadata = {
    alternates: {
      canonical: app.url,
    },
  }

  if (Object.keys(searchParams).length !== 0) {
    metadata.robots = { index: false, follow: true }
  }

  return metadata;
}

export default function Page() {
  return <Home />;
}