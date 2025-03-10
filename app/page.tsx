import Home from "@/components/home";
import app from "@/config/app";
import { Metadata } from "next";

export async function generateMetadata(props: { searchParams: Promise<object> }): Promise<Metadata> {
  const searchParams = await props.searchParams;
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