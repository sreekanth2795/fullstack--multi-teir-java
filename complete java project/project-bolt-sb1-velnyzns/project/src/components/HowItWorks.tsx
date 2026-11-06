import React from 'react';
import { Smartphone, CheckCircle, RefreshCw } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">How Paymento Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="bg-purple-100 p-4 rounded-full mb-6">
              <Smartphone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Scan & Book</h3>
            <p className="text-gray-600">
              Students scan the QR code, view available cabins, and book instantly
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="bg-purple-100 p-4 rounded-full mb-6">
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Instant Confirmation</h3>
            <p className="text-gray-600">
              Receive immediate notifications and cabin allocation upon payment
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="bg-purple-100 p-4 rounded-full mb-6">
              <RefreshCw className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Renewals</h3>
            <p className="text-gray-600">
              Automated reminders and simple renewal process for continued bookings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}