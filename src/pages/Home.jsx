import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Star, ChefHat, Award, Users, Clock, Utensils, MapPin, Quote } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import FoodCard from '../components/shared/FoodCard';
import { featuredDishes, deals, branches, testimonials } from '../components/data/restaurantData';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-red-400 font-medium tracking-wider uppercase text-sm">
                Welcome to Savory Haven
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Where Every Bite
              <span className="block text-red-400">Tells a Story</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the perfect blend of flavors, ambiance, and hospitality. 
              Modern casual dining redefined for memorable moments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl('Menu')}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-900/30 flex items-center gap-2"
              >
                Explore Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl('Reservation')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Book a Table
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-medium">4.9</span>
              </div>
              <div className="text-gray-400">
                <span className="text-white font-bold">2,500+</span> Happy Customers
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-red-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ChefHat, text: "Expert Chefs", sub: "World-class culinary team" },
              { icon: Award, text: "Premium Quality", sub: "Fresh ingredients daily" },
              { icon: Users, text: "Private Events", sub: "Custom catering available" },
              { icon: Clock, text: "Fast Service", sub: "30-minute guarantee" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">{item.text}</p>
                  <p className="text-red-200 text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-medium tracking-wider uppercase text-sm">
              Chef's Selection
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Featured Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved creations, crafted with passion and the finest ingredients
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.id} item={dish} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to={createPageUrl('Menu')}
              className="inline-flex items-center gap-2 px-6 py-3 text-red-700 font-semibold hover:bg-red-50 rounded-xl transition-colors"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-red-400 font-medium tracking-wider uppercase text-sm">
                Special Offers
              </span>
              <h2 className="text-4xl font-bold text-white mt-2">
                Today's Best Deals
              </h2>
            </div>
            <Link
              to={createPageUrl('Deals')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors"
            >
              View All Deals
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.slice(0, 3).map((deal) => (
              <div key={deal.id} className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors">
                <div className="relative overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
                    Save {deal.savings}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-xl mb-2">{deal.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{deal.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-400">${deal.price}</span>
                      <span className="text-gray-500 line-through">${deal.originalPrice}</span>
                    </div>
                    <Link
                      to={createPageUrl('Deals')}
                      className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Get Deal
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=700&fit=crop"
                alt="Chef preparing food"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-red-700 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-red-200">Years of Excellence</p>
              </div>
            </div>

            <div>
              <span className="text-red-600 font-medium tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                A Legacy of Flavor & Passion
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2009, Savory Haven has been a cornerstone of culinary excellence in our community. 
                Our commitment to using only the freshest, locally-sourced ingredients combined with innovative 
                cooking techniques has earned us a reputation as one of the city's finest dining establishments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every dish that leaves our kitchen tells a story of tradition, creativity, and unwavering 
                dedication to quality. Our team of award-winning chefs brings together flavors from around 
                the world to create an unforgettable dining experience.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Menu Items" },
                  { value: "4", label: "Locations" },
                  { value: "25+", label: "Awards Won" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-stone-50 rounded-xl">
                    <p className="text-2xl font-bold text-red-700">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-medium tracking-wider uppercase text-sm">
              What People Say
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Customer Reviews
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <Quote className="w-10 h-10 text-red-100 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-red-600 font-medium tracking-wider uppercase text-sm">
                Visit Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Our Locations
              </h2>
            </div>
            <Link
              to={createPageUrl('Branches')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              View All Branches
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="group relative h-64 rounded-2xl overflow-hidden"
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{branch.name}</h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{branch.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-16 h-16 text-white/20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for an Unforgettable Dining Experience?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Reserve your table now and let us create memories that last a lifetime
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl('Reservation')}
              className="px-8 py-4 bg-white text-red-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Make a Reservation
            </Link>
            <Link
              to={createPageUrl('Contact')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}