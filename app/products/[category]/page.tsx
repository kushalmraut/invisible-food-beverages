"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Centralized theme variables for easy reusability and updates
const theme = {
  bg: "bg-[#091612]",
  surface: "bg-[#132620]", 
  surfaceHover: "hover:bg-[#1A332B]",
  border: "border-white/10",
  borderActive: "border-[#D4FF00]/50",
  textMain: "text-white",
  textMuted: "text-gray-400",
  accentText: "text-[#D4FF00]",
  btnBg: "bg-[#D4FF00]",
  btnBgHover: "hover:bg-[#bce000]",
  btnText: "text-[#091612]",
  btnSecondaryBg: "bg-white/5",
  btnSecondaryHover: "hover:bg-white/10",
  btnSecondaryText: "text-white"
};

// Helper to convert "Aritha Powder" into "aritha-powder" for the URL
const makeSlug = (name: string) => {
  return name.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^\w-]+/g, '');
};

// Comprehensive Data Dictionary for the nested product catalog
const catalogData = [
  {
    id: 'whole-spices',
    name: 'Whole Spices',
    desc: 'Premium sourced whole spices, expertly processed and export ready.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
    items: ['Turmeric', 'Chilli', 'Ginger', 'Nutmeg', 'Cardamom', 'Cinnamon', 'Black Pepper', 'White Pepper', 'Cumin Seeds', 'Fennel Seeds', 'Ajwain Seeds', 'Coriander Seeds']
  },
  {
    id: 'oil-seeds',
    name: 'Oil Seeds',
    desc: 'High-yield, carefully sorted oil seeds for global food and industrial applications.',
    image: 'https://images.unsplash.com/photo-1587049352847-4d4b126a31c5?q=80&w=1200&auto=format&fit=crop',
    items: ['Yellow Mustard Seeds', 'Sesame Seeds', 'Groundnut', 'Soybean']
  },
  {
    id: 'spray-dried',
    name: 'Spray Dried Powders',
    desc: 'Highly soluble, long shelf-life powders retaining natural flavor and color.',
    image: 'https://images.unsplash.com/photo-1615486171448-4fd1ee4ae288?q=80&w=1200&auto=format&fit=crop',
    items: ['Spray Dried Tomato Powder', 'Spray Dried Tamarind Powder', 'Spray Dried Lemon Powder', 'Spray Dried Beetroot Powder']
  },
  {
    id: 'herbs',
    name: 'Herbs',
    desc: 'Pure, medicinal, and culinary herbal powders sourced from pristine environments.',
    image: 'https://images.unsplash.com/photo-1608035411784-fa6d7e29bb63?q=80&w=1200&auto=format&fit=crop',
    items: ['Aritha Powder', 'Moringa Powder', 'Amla Powder', 'Aloe Vera Powder', 'Ashwagandha Powder']
  },
  {
    id: 'dehydrated',
    name: 'Dehydrated Products',
    desc: 'Quality dehydrated ingredients processed to preserve essential nutrients and aroma.',
    image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=1200&auto=format&fit=crop',
    subcategories: [
      {
        name: 'Onion Variants',
        items: ['Onion Flakes/Kibbled', 'Onion Chopped', 'Onion Minced', 'Onion Granules', 'Onion Powder']
      },
      {
        name: 'Garlic Variants',
        items: ['Garlic Flakes/Kibbled', 'Garlic Chopped', 'Garlic Minced', 'Garlic Granules', 'Garlic Powder']
      },
      {
        name: 'Other Dehydrated Items',
        items: ['Ginger Flakes/Powder', 'Potato Flakes/Powder', 'Green Chilli Powder', 'Amchur Powder']
      }
    ]
  },
  {
    id: 'grains-pulses',
    name: 'Grains & Pulses',
    desc: 'Nutrient-rich, thoroughly cleaned pulses and grains for bulk international supply.',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop',
    items: ['Kabuli Chickpeas', 'Desi Chana', 'Toor Dal', 'Chana Dal', 'Urad Dal', 'Moong Dal']
  },
  {
    id: 'ground-spices',
    name: 'Ground Spices',
    desc: 'Finely milled pure spices with authentic, potent flavor profiles.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
    items: ['Cumin Powder', 'Fennel Powder', 'Coriander Powder', 'Curry Powder', 'Turmeric Powder', 'Chilli Powder']
  },
  {
    id: 'premium-rice',
    name: 'Premium Rice',
    desc: 'High-quality, carefully milled rice varieties suitable for diverse culinary applications.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1200&auto=format&fit=crop',
    items: ['Premium Basmati Rice', 'Non-Basmati Rice', 'White Rice', 'Brown Rice', 'Black Rice']
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(catalogData[0].id);
  const activeData = catalogData.find(c => c.id === activeCategory) || catalogData[0];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans`}>
      
      <section id="catalog" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Comprehensive Portfolio</span>
            <h2 className="text-4xl font-bold mb-6">Global quality. Trusted supply.</h2>
            <p className={`text-xl ${theme.textMuted}`}>
              Explore our diverse range of certified agricultural products, organized for your sourcing convenience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Sidebar Navigation */}
            <div className="w-full lg:w-1/4 flex flex-col gap-2 sticky top-24 h-fit">
              {catalogData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-left px-6 py-4 rounded-xl transition-all duration-200 border-l-4 ${
                    activeCategory === category.id 
                      ? `${theme.surface} border-[#D4FF00] text-white shadow-lg` 
                      : `border-transparent ${theme.textMuted} hover:bg-white/5 hover:text-white`
                  }`}
                >
                  <span className="block font-bold text-lg">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Right Dynamic Content Area */}
            <div className="w-full lg:w-3/4">
              
              {/* Category Header Card */}
              <div className={`rounded-2xl overflow-hidden mb-10 ${theme.surface} border ${theme.border}`}>
                <div className="h-64 relative">
                  <img 
                    src={activeData.image} 
                    alt={activeData.name} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#132620] to-transparent`}></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-4xl font-bold text-white mb-2">{activeData.name}</h3>
                    <p className={`text-lg ${theme.textMuted}`}>{activeData.desc}</p>
                  </div>
                </div>
              </div>

              {/* Scenario 1: Subcategories exist (e.g., Dehydrated Products) */}
              {activeData.subcategories && (
                <div className="space-y-12">
                  {activeData.subcategories.map((sub, idx) => (
                    <div key={idx}>
                      <h4 className={`text-xl font-bold mb-6 pb-2 border-b ${theme.border} text-[#D4FF00]`}>
                        {sub.name}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sub.items.map((item, i) => (
                          <Link 
                            key={i} 
                            href={`/products/${activeCategory}/${makeSlug(item)}`}
                            className={`p-5 rounded-xl ${theme.surface} border ${theme.border} ${theme.surfaceHover} transition-colors cursor-pointer group flex justify-between items-center`}
                          >
                            <span className="font-medium text-gray-200 group-hover:text-white">{item}</span>
                            <svg className={`w-4 h-4 ${theme.textMuted} group-hover:text-[#D4FF00] transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Scenario 2: Direct Items array (e.g., Whole Spices, Grains, Herbs) */}
              {activeData.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activeData.items.map((item, i) => (
                    <Link 
                      key={i} 
                      href={`/products/${activeCategory}/${makeSlug(item)}`}
                      className={`p-5 rounded-xl ${theme.surface} border ${theme.border} ${theme.surfaceHover} transition-colors cursor-pointer group flex justify-between items-center`}
                    >
                      <span className="font-medium text-gray-200 group-hover:text-white">{item}</span>
                      <svg className={`w-4 h-4 ${theme.textMuted} group-hover:text-[#D4FF00] transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}