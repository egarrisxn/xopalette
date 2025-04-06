export interface ColorShade {
  hex: string;
  shade: number;
  hue: number;
  saturation: number;
  lightness: number;
}

export interface AccessibilityScore {
  background: ColorShade;
  foreground: ColorShade;
  ratio: number;
  level: string;
  pass: boolean;
}

export type SiteConfig = {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  twitterImage: string;
  socialHandle: string;
  links: {
    x: string;
    github: string;
    website: string;
    linkedin: string;
  };
};

export type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};
