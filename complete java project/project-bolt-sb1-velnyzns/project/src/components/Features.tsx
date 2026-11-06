import React from 'react';
import { QrCode, Clock, Wallet, Bell, Users, BarChart } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'Instant Booking',
    description: 'Students can scan QR codes to view and book available cabins instantly'
  },
  {
    icon: Clock,
    title: '24-Hour Settlement',
    description: 'Receive payments within 24 hours, ensuring reliable cash flow'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated reminders for renewals and instant booking confirmations'
  },
  {
    icon: Wallet,
    title: 'Secure Payments',
    description: 'Digital payments eliminate cash misuse and ensure transparency'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal follow-up team for payment confirmations and updates'
  },
  {
    icon: BarChart,
    title: 'Business Growth',
    description: 'Promote your study hall to nearby students automatically'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Manage Your Study Hall
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}