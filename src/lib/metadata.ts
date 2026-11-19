import type { Metadata } from "next";

export const siteUrl = new URL("https://vidhun-prasad.vercel.app");

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const image = {
    url: "/images/social-preview.png",
    width: 531,
    height: 531,
    alt: "Gold pixel-art gorilla pendant on a black background — Vidhun Prasad Portfolio",
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Vidhun Prasad — Portfolio",
      title,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
    },
  };
}
