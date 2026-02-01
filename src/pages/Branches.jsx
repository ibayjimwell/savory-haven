import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import BranchCard from '../components/shared/BranchCard';
import { branches } from '../components/data/restaurantData';

export default function Branches() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
            <MapPin className="w-4 h-4" />
            4 Locations Across the City
          </div>
          <h1 className="text-5xl font-bold text-white mt-2 mb-4">
            Our Branches
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find a Savory Haven near you and experience our exceptional dining wherever you are
          </p>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-gray-600">All our locations are easily accessible by public transport</p>
          </div>
          
          <div className="relative bg-gray-200 rounded-3xl overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
                <Navigation className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm">Call us for directions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Finding Us?
          </h2>
          <p className="text-red-100 mb-8">
            Our customer service team is here to help you with directions and reservations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:5551234567"
              className="flex items-center gap-3 px-8 py-4 bg-white text-red-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
            <button className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors">
              <MapPin className="w-5 h-5" />
              Get Directions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}