/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/layout/HeroSection';
import { CategoryBar } from './components/menu/CategoryBar';
import { ProductCard } from './components/menu/ProductCard';
import { MENU_ITEMS } from './data/menu';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <CategoryBar 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-black text-on-surface uppercase tracking-tight">
              {activeCategory === 'all' ? 'Popular Items' : activeCategory}
            </h2>
            <button className="flex items-center gap-1 text-primary font-bold hover:underline">
              SEE ALL <ChevronRight size={18} />
            </button>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-on-surface-variant text-lg">No items found in this category.</p>
            </div>
          )}
        </section>

        {/* Promotional Banner */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            <div className="z-10 text-white max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-4 leading-tight">
                GET THE MOBILE APP <br />
                FOR EXCLUSIVE OFFERS
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Download our app today and get a free Zinger Burger on your first order over $15.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors">
                  APP STORE
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors">
                  GOOGLE PLAY
                </button>
              </div>
            </div>
            
            <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800"
                alt="App Promo"
                className="w-64 md:w-80 h-auto drop-shadow-2xl rotate-12"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-display text-3xl font-black mb-6 tracking-tighter">KITCHEN</h2>
            <p className="text-white/60 text-sm mb-6">
              Making every meal famous since 2024. Quality ingredients, secret recipes, and a passion for great food.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Main Menu</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Chicken</li>
              <li className="hover:text-white cursor-pointer">Burgers</li>
              <li className="hover:text-white cursor-pointer">Deals</li>
              <li className="hover:text-white cursor-pointer">Promotions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Franchise</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Find a Location</li>
              <li className="hover:text-white cursor-pointer">Accessibility</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 CRISP & BOLD KITCHEN. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
