export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  desc: string;
  description: string;
  image: string;
  items?: string[];
  subcategories?: { name: string; items: string[] }[];
};

export const makeSlug = (name: string) =>
  name.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^\w-]+/g, '');

const productImages: Record<string, string> = {
  'turmeric': '/products/turmeric.svg',
  'chilli': '/products/chilli.svg',
  'ginger': '/products/ginger.svg',
  'nutmeg': '/products/nutmeg.svg',
  'cardamom': '/products/cardamom.svg',
  'cinnamon': '/products/cinnamon.svg',
  'black-pepper': '/products/black-pepper.svg',
  'white-pepper': '/products/white-pepper.svg',
  'cumin-seeds': '/products/cumin-seeds.svg',
  'fennel-seeds': '/products/fennel-seeds.svg',
  'ajwain-seeds': '/products/ajwain-seeds.svg',
  'coriander-seeds': '/products/coriander-seeds.svg',
  'yellow-mustard-seeds': '/products/yellow-mustard-seeds.svg',
  'sesame-seeds': '/products/sesame-seeds.svg',
  'groundnut': '/products/groundnut.svg',
  'soybean': '/products/soybean.svg',
  'spray-dried-tomato-powder': '/products/spray-dried-tomato-powder.svg',
  'spray-dried-tamarind-powder': '/products/spray-dried-tamarind-powder.svg',
  'spray-dried-lemon-powder': '/products/spray-dried-lemon-powder.svg',
  'spray-dried-beetroot-powder': '/products/spray-dried-beetroot-powder.svg',
  'aritha-powder': '/products/aritha-powder.svg',
  'moringa-powder': '/products/moringa-powder.svg',
  'amla-powder': '/products/amla-powder.svg',
  'aloe-vera-powder': '/products/aloe-vera-powder.svg',
  'ashwagandha-powder': '/products/ashwagandha-powder.svg',
  'onion-flakes-kibbled': '/products/onion-flakes-kibbled.svg',
  'onion-chopped': '/products/onion-chopped.svg',
  'onion-minced': '/products/onion-minced.svg',
  'onion-granules': '/products/onion-granules.svg',
  'onion-powder': '/products/onion-powder.svg',
  'garlic-flakes-kibbled': '/products/garlic-flakes-kibbled.svg',
  'garlic-chopped': '/products/garlic-chopped.svg',
  'garlic-minced': '/products/garlic-minced.svg',
  'garlic-granules': '/products/garlic-granules.svg',
  'garlic-powder': '/products/garlic-powder.svg',
  'ginger-flakes-powder': '/products/ginger-flakes-powder.svg',
  'potato-flakes-powder': '/products/potato-flakes-powder.svg',
  'green-chilli-powder': '/products/green-chilli-powder.svg',
  'amchur-powder': '/products/amchur-powder.svg',
  'kabuli-chickpeas': '/products/kabuli-chickpeas.svg',
  'desi-chana': '/products/desi-chana.svg',
  'toor-dal': '/products/toor-dal.svg',
  'chana-dal': '/products/chana-dal.svg',
  'urad-dal': '/products/urad-dal.svg',
  'moong-dal': '/products/moong-dal.svg',
  'cumin-powder': '/products/cumin-powder.svg',
  'fennel-powder': '/products/fennel-powder.svg',
  'coriander-powder': '/products/coriander-powder.svg',
  'curry-powder': '/products/curry-powder.svg',
  'turmeric-powder': '/products/turmeric-powder.svg',
  'chilli-powder': '/products/chilli-powder.svg',
  'premium-basmati-rice': '/products/premium-basmati-rice.svg',
  'non-basmati-rice': '/products/non-basmati-rice.svg',
  'white-rice': '/products/white-rice.svg',
  'brown-rice': '/products/brown-rice.svg',
  'black-rice': '/products/black-rice.svg',
};

export const catalogData: ProductCategory[] = [
  { id: 'whole-spices', slug: 'whole-spices', name: 'Whole Spices', summary: 'Premium sourced whole spices.', desc: 'Premium sourced whole spices, expertly processed and export ready.', description: 'Whole spices processed for aroma, color, purity, and international buyer specifications.', image: '/whole-spices.png', items: ['Turmeric', 'Chilli', 'Ginger', 'Nutmeg', 'Cardamom', 'Cinnamon', 'Black Pepper', 'White Pepper', 'Cumin Seeds', 'Fennel Seeds', 'Ajwain Seeds', 'Coriander Seeds'] },
  { id: 'oil-seeds', slug: 'oil-seeds', name: 'Oil Seeds', summary: 'High-yield seeds for global use.', desc: 'High-yield, carefully sorted oil seeds for global food and industrial applications.', description: 'Carefully sorted oil seeds for food processors, manufacturers, and bulk distribution.', image: '/oil-seeds.png', items: ['Yellow Mustard Seeds', 'Sesame Seeds', 'Groundnut', 'Soybean'] },
  { id: 'spray-dried', slug: 'spray-dried', name: 'Spray Dried Powders', summary: 'Soluble fruit and vegetable powders.', desc: 'Highly soluble, long shelf-life powders retaining natural flavor and color.', description: 'Spray dried powders designed for food-service, beverage, seasoning, and ingredient applications.', image: '/spray-dried.png', items: ['Spray Dried Tomato Powder', 'Spray Dried Tamarind Powder', 'Spray Dried Lemon Powder', 'Spray Dried Beetroot Powder'] },
  { id: 'herbs', slug: 'herbs', name: 'Herbs', summary: 'Culinary and wellness herb powders.', desc: 'Pure, medicinal, and culinary herbal powders sourced from pristine environments.', description: 'Herbal ingredients selected for clean processing, natural character, and dependable quality.', image: '/herbs.png', items: ['Aritha Powder', 'Moringa Powder', 'Amla Powder', 'Aloe Vera Powder', 'Ashwagandha Powder'] },
  { id: 'dehydrated', slug: 'dehydrated', name: 'Dehydrated Products', summary: 'Shelf-stable dehydrated ingredients.', desc: 'Quality dehydrated ingredients processed to preserve essential nutrients and aroma.', description: 'Dehydrated onion, garlic, and vegetable products packed for reliable global supply.', image: '/dehydrated.png', subcategories: [{ name: 'Onion Variants', items: ['Onion Flakes/Kibbled', 'Onion Chopped', 'Onion Minced', 'Onion Granules', 'Onion Powder'] }, { name: 'Garlic Variants', items: ['Garlic Flakes/Kibbled', 'Garlic Chopped', 'Garlic Minced', 'Garlic Granules', 'Garlic Powder'] }, { name: 'Other Dehydrated Items', items: ['Ginger Flakes/Powder', 'Potato Flakes/Powder', 'Green Chilli Powder', 'Amchur Powder'] }] },
  { id: 'grains-pulses', slug: 'grains-pulses', name: 'Grains & Pulses', summary: 'Clean pulses for bulk channels.', desc: 'Nutrient-rich, thoroughly cleaned pulses and grains for bulk international supply.', description: 'Pulses and grains cleaned, sorted, graded, and prepared for dependable shipment cycles.', image: '/grains-pulses.png', items: ['Kabuli Chickpeas', 'Desi Chana', 'Toor Dal', 'Chana Dal', 'Urad Dal', 'Moong Dal'] },
  { id: 'ground-spices', slug: 'ground-spices', name: 'Ground Spices', summary: 'Finely milled spice powders.', desc: 'Finely milled pure spices with authentic, potent flavor profiles.', description: 'Ground spices and custom blends milled for authentic taste, consistency, and export needs.', image: '/ground-spices.png', items: ['Cumin Powder', 'Fennel Powder', 'Coriander Powder', 'Curry Powder', 'Turmeric Powder', 'Chilli Powder'] },
  { id: 'premium-rice', slug: 'premium-rice', name: 'Premium Rice', summary: 'Premium rice for export markets.', desc: 'High-quality, carefully milled rice varieties suitable for diverse culinary applications.', description: 'Premium rice varieties sourced, milled, inspected, and packed for global buyers.', image: '/premium-rice.png', items: ['Premium Basmati Rice', 'Non-Basmati Rice', 'White Rice', 'Brown Rice', 'Black Rice'] }
];

export const productCategories = catalogData;

export function getCategory(slug: string) {
  return catalogData.find((category) => category.slug === slug || category.id === slug);
}

export const getCategoryProducts = (category: ProductCategory) =>
  category.items ?? category.subcategories?.flatMap((sub) => sub.items) ?? [];

export const getProductImage = (name: string, category: ProductCategory) =>
  productImages[makeSlug(name)] ?? category.image;

export const findProduct = (categoryId: string, productSlug: string): (Product & { category: ProductCategory }) | undefined => {
  const category = catalogData.find((item) => item.id === categoryId || item.slug === categoryId);
  if (!category) return undefined;

  const productName = getCategoryProducts(category).find((item) => makeSlug(item) === productSlug);
  if (!productName) return undefined;

  const isPowder = productName.toLowerCase().includes('powder');
  const isRice = category.id === 'premium-rice';

  return {
    category,
    name: productName,
    slug: productSlug,
    tagline: `${category.name} product prepared for reliable bulk sourcing.`,
    description: `${productName} is sourced, cleaned, processed, and packed for importers, distributors, and food businesses that need dependable Indian agricultural supply with consistent quality and documentation support.`,
    image: getProductImage(productName, category),
    highlights: ['Export-ready sorting and grading', 'Bulk packaging options available', 'Documentation support for international shipments', 'Quality-focused sourcing from trusted suppliers'],
    specs: [
      { label: 'Origin', value: 'India' },
      { label: 'Form', value: isPowder ? 'Fine powder' : isRice ? 'Milled grain' : 'Whole / processed' },
      { label: 'Moisture', value: isRice ? '12% max' : '10% max' },
      { label: 'Packaging', value: 'Custom bulk packs' },
    ],
    applications: isRice ? ['Retail packs', 'Food service', 'Wholesale distribution'] : ['Food manufacturing', 'Spice blending', 'Retail and wholesale packs'],
  };
};
