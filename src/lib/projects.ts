export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  label?: string;
  externalUrl?: string;
  category: string;
  description: string;
  details?: {
    summary?: string;
    client?: string;
    year?: string;
    platform?: string;
    timeline?: string;
    images?: ProjectImage[];
  };
};

// Add a details object to a project below to fill its inner page.
// Image paths are relative to public, e.g. /images/projects/finlot/01.png.
// The images array controls the gallery length; there is no fixed image count.
export const projects: Project[] = [
  {
    slug: "prime-estates",
    name: "Prime Estates",
    label: "Prime Estate",
    externalUrl: "https://www.prime-estates.com/en",
    category: "UI/UX",
    description: "Real estate website displayed on a desktop monitor",
  },
  {
    slug: "finlot",
    name: "Finlot",
    category: "UI/UX",
    description: "Savings app on a lime green background",
    details: {
      summary: "A mobile lot app designed for clarity and control.",
      client: "Finlot",
      year: "2026",
      platform: "iOS & Android",
      timeline: "4 weeks",
      images: [
        {
          src: "/images/projects/finlot/finlot_1.png",
          alt: "Finlot overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/finlot/finlot_2.png",
          alt: "Finlot interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/finlot/finlot_3.png",
          alt: "Finlot screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "fiinder",
    name: "Fiinder",
    category: "UI/UX",
    description:
      "Local discovery app on a phone held against a purple background",
    details: {
      summary:
        "A mobile app designed for offers, deals & discounts from nearby store",
      client: "Fiinder",
      year: "2026",
      platform: "iOS & Android",
      timeline: "4 weeks",
      images: [
        {
          src: "/images/projects/fiinder/fiinder_1.png",
          alt: "Fiinder overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/fiinder/fiinder_2.png",
          alt: "Fiinder interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/fiinder/fiinder_3.png",
          alt: "Fiinder screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "packaging",
    name: "Cult casino",
    category: "Branding",
    description: "Black packaging with a bold red and white identity",
    details: {
      summary: "Logo with Branding for Cult casino communilty.",
      client: "Commmunity",
      year: "2026",
      platform: "Branding",
      timeline: "1 week",
      images: [
        {
          src: "/images/projects/cult-casino/cult-casino-1.png",
          alt: "Cult casino overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/cult-casino/cult-casino-2.png",
          alt: "Cult casino interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/cult-casino/cult-casino-3.png",
          alt: "Cult casino screens",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/cult-casino/cult-casino-4.png",
          alt: "Cult casino screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "what",
    name: "What Clothing",
    category: "Branding",
    description: "Lime typography over the Statue of Liberty",
    details: {
      summary: "Logo with Branding for Clothing company.",
      client: "What",
      year: "2026",
      platform: "Branding",
      timeline: "1 week",
      images: [
        {
          src: "/images/projects/what/what-1.png",
          alt: "What Clothing overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/what/what-2.png",
          alt: "What Clothing interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/what/what-3.png",
          alt: "What Clothing screens",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/what/what-4.png",
          alt: "What Clothing screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "scent-bowl",
    name: "Scent Bowl",
    category: "Branding",
    description: "Black and gold perfume bottle resting on rocks",
  },
  {
    slug: "lume",
    name: "Lumé",
    category: "Branding",
    description: "Burgundy business cards with an embossed gold identity",
    details: {
      summary: "Logo with Branding for luxury Restaurant.",
      client: "Lumé",
      year: "2026",
      platform: "Branding",
      timeline: "1 week",
      images: [
        {
          src: "/images/projects/lume/lume_1.png",
          alt: "Lumé overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/lume/lume_2.png",
          alt: "Lumé interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/lume/lume_3.png",
          alt: "Lumé screens",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/lume/lume_4.png",
          alt: "Lumé screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "bulk",
    name: "Bulk",
    category: "Branding",
    description: "Three colorful fashion identity cards",
    details: {
      summary: "Logo with Branding for Clothing company.",
      client: "Bulk",
      year: "2026",
      platform: "Branding",
      timeline: "1 week",
      images: [
        {
          src: "/images/projects/bulk/bulk-1.png",
          alt: "Bulk overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/bulk/bulk-2.png",
          alt: "Bulk interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/bulk/bulk-3.png",
          alt: "Bulk screens",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/bulk/bulk-4.png",
          alt: "Bulk screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "travel-tech",
    name: "Travel Tech",
    category: "Branding",
    description: "Blue brand identity on a subway billboard",
    details: {
      summary: "Logo with Branding for Travel agency company.",
      client: "Travel agency",
      year: "2026",
      platform: "Branding",
      timeline: "1 week",
      images: [
        {
          src: "/images/projects/travel-tech/travel-tech-1.png",
          alt: "Travel Tech overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/travel-tech/travel-tech-2.png",
          alt: "Travel Tech interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/travel-tech/travel-tech-3.png",
          alt: "Travel Tech screens",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/travel-tech/travel-tech-4.png",
          alt: "Travel Tech screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
  {
    slug: "breathing-app",
    name: "Uply",
    category: "UI/UX",
    description: "A guided breathing exercise on a handheld phone",
  },
  {
    slug: "shipping-logistics",
    name: "Starmark",
    externalUrl: "https://www.starmarkco.com/",
    category: "UI/UX",
    description: "Container shipping website on a blue desktop mockup",
  },
  {
    slug: "rice-soup",
    name: "Ricesoup",
    category: "Branding",
    description: "Playful white lettering on a red background",
    details: {
      summary: "Logo with Branding for Ricesoup youtube channel.",
      client: "Rice soup Youtube channel",
      year: "2025",
      platform: "Branding",
      timeline: "2 weeks",
      images: [
        {
          src: "/images/projects/rice-soup/rice-soup_1.png",
          alt: "Ricesoup overview",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/rice-soup/rice-soup_2.png",
          alt: "Ricesoup interface",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/rice-soup/rice-soup_3.png",
          alt: "Ricesoup screens",
          width: 1400,
          height: 1120,
        },
        {
          src: "/images/projects/rice-soup/rice-soup_4.png",
          alt: "Ricesoup screens",
          width: 1400,
          height: 1120,
        },
      ],
    },
  },
];
