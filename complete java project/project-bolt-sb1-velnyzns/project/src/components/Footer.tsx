import React from 'react';
import { QrCode, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <QrCode className="h-8 w-8" />
            <span className="text-2xl font-bold">Paymento</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400 transition flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              contact@paymento.com
            </a>
            <a href="#" className="hover:text-purple-400 transition flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              +1 (555) 123-4567
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Paymento. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}