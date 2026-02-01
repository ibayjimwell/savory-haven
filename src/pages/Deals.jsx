import React from 'react';
import { Tag, Clock, Sparkles } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import DealCard from '../components/shared/DealCard';
import { deals } from '../components/data/restaurantData';

export default function Deals() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-800 via-red-700 to-red-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time Offers
          </div>
          <h1 className="text-5xl font-bold text-white mt-2 mb-4">
            Special Deals
          </h1>
          <p className="text-red-100 max-w-2xl mx-auto">
            Enjoy exclusive discounts and combo meals. Save big while enjoying your favorite dishes!
          </p>
        </div>
      </section>

      {/* Timer Banner */}
      <section className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-white">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="font-medium">Weekend deals available until Sunday midnight!</span>
            <Tag className="w-5 h-5 text-red-400" />
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-red-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Looking for Custom Catering?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Planning a special event? We offer customized catering packages for corporate events, 
                  private parties, and celebrations. Contact us for personalized quotes and menus.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Corporate Events
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Private Parties
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Wedding Receptions
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-500 mb-2">Call us for custom orders</p>
                <p className="text-3xl font-bold text-red-700">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}