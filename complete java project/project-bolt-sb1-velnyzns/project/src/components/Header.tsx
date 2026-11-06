import React from 'react';
import { QrCode, BookOpen, Clock, Wallet } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <QrCode className="h-8 w-8" />
          <span className="text-2xl font-bold">Paymento</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-purple-200 transition">Features</a>
          <a href="#how-it-works" className="hover:text-purple-200 transition">How it Works</a>
          <a href="#benefits" className="hover:text-purple-200 transition">Benefits</a>
        </div>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}