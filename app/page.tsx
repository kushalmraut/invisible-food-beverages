"use client";

import React, { useState } from 'react';

export default function AppRouterSimulation() {
  // This state simulates your Next.js file-based routing
  const [currentView, setCurrentView] = useState('home');

  return (
    <>
      {currentView === 'home' && <HomePage setView={setCurrentView} />}
      {currentView === 'products' && <ProductsPage setView={setCurrentView} />}
    </>
  );
}

function HomePage({ setView }: { setView: (view: string) => void }) {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div onClick={() => setView('home')} className="flex items-center gap-3 cursor-pointer group">
              <svg width="33" height="33" viewBox="0 0 33 33" className="text-green-500 group-hover:text-green-400 transition-colors">
                <path d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z" fill="currentColor"></path>
              </svg>
              <span className="font-bold text-xl tracking-wide uppercase">Invisible Food & Beverages</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              
              {/* Mega Menu Dropdown */}
              <div 
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsProductMenuOpen(true)}
                onMouseLeave={() => setIsProductMenuOpen(false)}
              >
                <button onClick={() => setView('products')} className="flex items-center gap-1 hover:text-green-400 transition-colors">
                  Products
                  <svg className={`w-4 h-4 transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isProductMenuOpen && (
                  <div className="absolute top-20 -left-24 w-screen max-w-2xl bg-white text-gray-900 shadow-2xl rounded-b-lg p-6 grid grid-cols-3 gap-6 border-t-4 border-green-500">
                    
                    {/* Grains Category */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Grains</h4>
                      <ul className="space-y-3">
                        <li>
                          <div onClick={() => setView('products')} className="cursor-pointer block hover:bg-gray-50 p-2 rounded-md transition text-gray-900">
                            <strong className="block text-sm">White Rice</strong>
                            <span className="text-xs text-gray-500">Premium long-grain for export.</span>
                          </div>
                        </li>
                        <li>
                          <div onClick={() => setView('products')} className="cursor-pointer block hover:bg-gray-50 p-2 rounded-md transition text-gray-900">
                            <strong className="block text-sm">Brown Rice</strong>
                            <span className="text-xs text-gray-500">Whole grain, high-quality.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Lentils Category */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Lentils</h4>
                      <ul className="space-y-3">
                        <li>
                          <div onClick={() => setView('products')} className="cursor-pointer block hover:bg-gray-50 p-2 rounded-md transition text-gray-900">
                            <strong className="block text-sm">Moong Dal</strong>
                            <span className="text-xs text-gray-500">High-protein, split yellow.</span>
                          </div>
                        </li>
                        <li>
                          <div onClick={() => setView('products')} className="cursor-pointer block hover:bg-gray-50 p-2 rounded-md transition text-gray-900">
                            <strong className="block text-sm">Toor Dal</strong>
                            <span className="text-xs text-gray-500">Premium split pigeon peas.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Quick CTA */}
                    <div className="bg-gray-900 text-white p-4 rounded-lg flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-sm mb-2">Global shipping.</h4>
                        <p className="text-xs text-gray-400">Efficient logistics and compliance with international standards.</p>
                      </div>
                      <button className="mt-4 text-xs bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition text-center">
                        Contact Sales
                      </button>
                    </div>

                  </div>
                )}
              </div>

              <span className="cursor-pointer hover:text-green-400 transition-colors">About Us</span>
              <span className="cursor-pointer hover:text-green-400 transition-colors">Export Capabilities</span>
              
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-lg shadow-green-900/20">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
            alt="Agricultural Export Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Premium Agricultural Products Catalog</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Quality Crops.<br/>Trusted Worldwide.
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Certified grains, spices, coffee, tea, and lentils shipped globally with consistency and reliability for international buyers.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setView('products')} className="bg-green-600 text-white px-8 py-3 rounded-md font-bold hover:bg-green-500 transition shadow-lg shadow-green-900/50">
              Browse Catalog
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Grains Card */}
            <div onClick={() => setView('products')} className="group cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                  alt="Grains" 
                />
              </div>
              <div className="p-8">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold uppercase px-3 py-1 rounded-full">Grains</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Rice and Wheat Selection</h3>
                <p className="text-gray-600 mb-6">Premium long-grain and specialty grains ready for export markets.</p>
                <span className="text-green-600 font-semibold flex items-center gap-2 group-hover:text-green-700">
                  View Details <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </div>

            {/* Spices Card */}
            <div onClick={() => setView('products')} className="group cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                  alt="Spices" 
                />
              </div>
              <div className="p-8">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold uppercase px-3 py-1 rounded-full">Spices</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Masala & Spice Blends</h3>
                <p className="text-gray-600 mb-6">Expertly processed, sorted, and milled pure spices.</p>
                <span className="text-green-600 font-semibold flex items-center gap-2 group-hover:text-green-700">
                  View Details <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

function ProductsPage({ setView }: { setView: (view: string) => void }) {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Grains');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-gray-900 text-white shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div onClick={() => setView('home')} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-colors">
                <svg width="100%" height="100%" viewBox="0 0 33 33" preserveAspectRatio="xMidYMid meet">
                  <path d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-widest uppercase">Invisible Food & Beverages</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 items-center">
              
              {/* Mega Menu Dropdown */}
              <div 
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsProductMenuOpen(true)}
                onMouseLeave={() => setIsProductMenuOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-green-400 transition-colors">
                  Products
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isProductMenuOpen && (
                  <div className="absolute top-20 -left-48 w-screen max-w-4xl bg-white text-gray-900 shadow-2xl rounded-b-xl border-t-4 border-green-500 p-8 grid grid-cols-4 gap-8">
                    
                    {/* Grains Column */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Grains</h4>
                      <ul className="space-y-4">
                        <li>
                          <div className="group block cursor-pointer">
                            <span className="block text-sm font-bold group-hover:text-green-600 transition-colors">White Rice</span>
                            <span className="text-xs text-gray-500">Premium long-grain export.</span>
                          </div>
                        </li>
                        <li>
                          <div className="group block cursor-pointer">
                            <span className="block text-sm font-bold group-hover:text-green-600 transition-colors">Brown Rice</span>
                            <span className="text-xs text-gray-500">Whole grain, high-quality.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Lentils Column */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Lentils</h4>
                      <ul className="space-y-4">
                        <li>
                          <div className="group block cursor-pointer">
                            <span className="block text-sm font-bold group-hover:text-green-600 transition-colors">Moong Dal</span>
                            <span className="text-xs text-gray-500">High-protein, split yellow.</span>
                          </div>
                        </li>
                        <li>
                          <div className="group block cursor-pointer">
                            <span className="block text-sm font-bold group-hover:text-green-600 transition-colors">Toor Dal</span>
                            <span className="text-xs text-gray-500">Premium split pigeon peas.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Spices Column */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Spices</h4>
                      <ul className="space-y-4">
                        <li>
                          <div className="group block cursor-pointer">
                            <span className="block text-sm font-bold group-hover:text-green-600 transition-colors">Whole Spices</span>
                            <span className="text-xs text-gray-500">Sourced whole, export ready.</span>
                          </div>
                        </li>
                        <li>
                          <div className="group block cursor-pointer">
                            <span className="block text-sm font-bold group-hover:text-green-600 transition-colors">Ground Spices</span>
                            <span className="text-xs text-gray-500">Finely milled, pure blends.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Promo Card */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Global shipping.</h4>
                        <p className="text-xs text-gray-500">Efficient logistics, global reach, and compliance with international standards.</p>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-600 cursor-pointer hover:text-green-700 transition-colors">
                        Contact Sales <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              <span className="text-sm font-medium hover:text-green-400 transition-colors cursor-pointer">About</span>
              <span className="text-sm font-medium hover:text-green-400 transition-colors cursor-pointer">Insights</span>
              
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-green-900/20">
                Request quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
            alt="Agricultural Export Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Premium agricultural products catalog
          </h1>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Global quality. Trusted supply.</h2>
            <p className="text-xl text-gray-500">
              Discover certified grains, spices, coffee, tea, and lentils—delivered with consistency and reliability for international buyers.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Tab Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {['Grains', 'Spices', 'Lentils'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-8 py-6 rounded-xl transition-all duration-200 ${
                    activeTab === tab 
                      ? 'bg-white shadow-lg border-l-4 border-green-500 text-gray-900' 
                      : 'hover:bg-gray-100 text-gray-500 border-l-4 border-transparent'
                  }`}
                >
                  <span className={`block text-xl font-bold ${activeTab === tab ? 'text-green-600' : ''}`}>
                    {tab}
                  </span>
                  <span className="text-sm mt-1 block">
                    {tab === 'Grains' && 'Rice and specialty grains, certified for export.'}
                    {tab === 'Spices' && 'Whole and ground spices, premium grade.'}
                    {tab === 'Lentils' && 'Lentils, cleaned and export-ready.'}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              
              {activeTab === 'Grains' && (
                <div className="animate-fade-in transition-all">
                  <div className="h-80 md:h-[450px] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1200&auto=format&fit=crop" 
                      alt="Grains Field" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                      <h3 className="text-3xl font-bold text-white">Rice and specialty grains, certified for export</h3>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Spices' && (
                <div className="animate-fade-in transition-all">
                  <div className="h-80 md:h-[450px] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" 
                      alt="Spices Setup" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                      <h3 className="text-3xl font-bold text-white">Whole and ground spices, premium grade</h3>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Lentils' && (
                <div className="animate-fade-in transition-all">
                  <div className="h-80 md:h-[450px] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop" 
                      alt="Lentils Sorting" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                      <h3 className="text-3xl font-bold text-white">Lentils, cleaned and export-ready</h3>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-green-500 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Invisible Food and Beverages. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}