import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, CheckCircle, Utensils } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Helmet } from "react-helmet-async";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservationDetails(formData);
    setIsSubmitted(true);
  };

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  if (isSubmitted && reservationDetails) {
    return (
      <div className="min-h-screen bg-stone-50">

        <Helmet>
          <title>Savory Haven | Reservation</title>
          <meta
            name="description"
            content="Reservation page for Savory Haven - sample restaurant website created by Jimwell Ibay."
          />
          <meta name="keywords" content="Savory Haven, Reservation, Sample Website, Jimwell Ibay" />
          <link rel="canonical" href="https://savory-haven-website.vercel.app/reservation" />

          <meta property="og:title" content="Savory Haven | Reservation" />
          <meta property="og:description" content="Reservation page for Savory Haven - sample website by Jimwell Ibay." />
          <meta property="og:url" content="https://savory-haven-website.vercel.app/reservation" />
          <meta property="og:image" content="https://savory-haven-website.vercel.app/logo-with-bg.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Savory Haven | Reservation" />
          <meta name="twitter:description" content="Reservation page for Savory Haven - sample website by Jimwell Ibay." />
          <meta name="twitter:image" content="https://savory-haven-website.vercel.app/logo-with-bg.png" />
      </Helmet>


        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Reservation Confirmed!
              </h1>
              <p className="text-gray-600 mb-8">
                Thank you for choosing Savory Haven. We look forward to serving you!
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h2 className="font-semibold text-gray-900 mb-4">Reservation Details</h2>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-500 text-sm">Name</p>
                    <p className="font-medium text-gray-900">{reservationDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="font-medium text-gray-900">{reservationDetails.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Date</p>
                    <p className="font-medium text-gray-900">{reservationDetails.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Time</p>
                    <p className="font-medium text-gray-900">{reservationDetails.time}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500 text-sm">Number of Guests</p>
                    <p className="font-medium text-gray-900">{reservationDetails.guests} {reservationDetails.guests === '1' ? 'Guest' : 'Guests'}</p>
                  </div>
                  {reservationDetails.specialRequests && (
                    <div className="col-span-2">
                      <p className="text-gray-500 text-sm">Special Requests</p>
                      <p className="font-medium text-gray-900">{reservationDetails.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                A confirmation SMS will be sent to your phone number.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    guests: '2',
                    date: '',
                    time: '',
                    specialRequests: ''
                  });
                }}
                className="px-8 py-3 bg-red-700 text-white font-semibold rounded-xl hover:bg-red-800 transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
            <Utensils className="w-4 h-4" />
            Reserve Your Experience
          </div>
          <h1 className="text-5xl font-bold text-white mt-2 mb-4">
            Make a Reservation
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Secure your table and prepare for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all appearance-none bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ Guests (Call for arrangements)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any dietary restrictions, special occasions, or seating preferences?"
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-200"
              >
                Confirm Reservation
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              For parties larger than 10, please call us at{' '}
              <a href="tel:5551234567" className="text-red-600 font-medium hover:underline">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}