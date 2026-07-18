export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  products: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "grains",
    name: "Grains",
    summary: "Rice, wheat, and specialty grains prepared for export markets.",
    description:
      "Premium long-grain rice, brown rice, wheat, and specialty grains sourced through trusted agricultural partners and packed for consistent global supply.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1200&auto=format&fit=crop",
    products: ["White Rice", "Brown Rice", "Wheat", "Specialty Grains"],
  },
  {
    slug: "spices",
    name: "Spices",
    summary: "Whole and ground spices with clean processing and dependable grading.",
    description:
      "Whole spices, ground spices, and custom blends processed for aroma, color, purity, and international buyer specifications.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    products: ["Whole Spices", "Ground Spices", "Masala Blends", "Custom Blends"],
  },
  {
    slug: "lentils",
    name: "Lentils",
    summary: "Cleaned, sorted, high-protein lentils ready for retail or bulk channels.",
    description:
      "Moong dal, toor dal, and assorted pulses cleaned, sorted, graded, and prepared for reliable shipment cycles.",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop",
    products: ["Moong Dal", "Toor Dal", "Masoor Dal", "Assorted Pulses"],
  },
];

export function getCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
