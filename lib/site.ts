/**
 * Drop files under `public/assets/` using these stems; the first extension
 * that exists wins (see `FallbackImage`). SVGs ship as temporary art direction.
 */
export const SITE = {
  name: "Stillwell Goods",
  tagline: "Furniture, art, props, and gatherings in Long Island City.",
  location: "Long Island City, New York",
  email: "jacquelinerealshop@gmail.com",
  instagram: {
    handle: "@stillwellgoods",
    url: "https://www.instagram.com/stillwellgoods/",
  },
  facebook: {
    label: "Stillwell Secondhand Furniture",
    url: "https://www.facebook.com/search/top?q=Stillwell%20Secondhand%20Furniture",
  },
} as const;

/** Tried in order until one loads — add your file with any of these extensions. */
export const LOGO_SRC_CANDIDATES = [
  "/assets/stillwell_logo.png",
  "/assets/stillwell_logo.jpg",
  "/assets/stillwell_logo.webp",
  "/assets/stillwell_logo.svg",
] as const;

export const SISTERS_SRC_CANDIDATES = [
  "/assets/Stillwell_sisters.jpg",
  "/assets/Stillwell_sisters.jpeg",
  "/assets/Stillwell_sisters.png",
  "/assets/Stillwell_sisters.webp",
  "/assets/Stillwell_sisters.svg",
] as const;
