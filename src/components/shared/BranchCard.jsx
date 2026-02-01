import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function BranchCard({ branch }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={branch.image}
          alt={branch.name}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
          {branch.name}
        </h3>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-red-50 rounded-lg flex-shrink-0">
            <MapPin className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {branch.address}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
            <Phone className="w-5 h-5 text-red-600" />
          </div>
          <a 
            href={`tel:${branch.phone}`}
            className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
          >
            {branch.phone}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-50 rounded-lg flex-shrink-0">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-gray-600 text-sm">
            {branch.hours}
          </p>
        </div>

        <button className="w-full mt-2 py-3 px-4 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" />
          Get Directions
        </button>
      </div>
    </div>
  );
}