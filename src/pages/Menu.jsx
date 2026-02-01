import React, { useState } from 'react';
import { Utensils, Coffee, IceCream, Wine } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import FoodCard from '../components/shared/FoodCard';
import { menuItems } from '../components/data/restaurantData';

const categories = [
  { id: 'starters', name: 'Starters', icon: Utensils, data: menuItems.starters },
  { id: 'mains', name: 'Main Course', icon: Utensils, data: menuItems.mains },
  { id: 'desserts', name: 'Desserts', icon: IceCream, data: menuItems.desserts },
  { id: 'drinks', name: 'Drinks', icon: Coffee, data: menuItems.drinks },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-medium tracking-wider uppercase text-sm">
            Explore Our
          </span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-4">
            Menu
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with love and the finest ingredients
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-red-700 text-white shadow-lg shadow-red-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={activeCategory === category.id ? 'block' : 'hidden'}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-100 rounded-xl">
                  <category.icon className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <p className="text-gray-500">{category.data.length} items</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.data.map((item) => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-red-100 rounded-xl">
                  <Wine className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Special Dietary Requirements?</h3>
                  <p className="text-gray-600">We cater to vegetarian, vegan, and gluten-free diets</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-red-700 text-white font-semibold rounded-xl hover:bg-red-800 transition-colors whitespace-nowrap">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}