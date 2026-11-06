import React from 'react';
import { QrCode, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Payments,
              <br />
              Minimal Management
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Transform your study hall management with digital payments, real-time updates, and automated notifications.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 text-purple-200">
              <p>🎉 Special Offer: 3 Months FREE SERVICE</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-white/20 rounded-lg blur"></div>
              <div className="relative bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <QrCode className="h-64 w-64" />
                <p className="text-center mt-4 font-medium">Scan & Book Instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}