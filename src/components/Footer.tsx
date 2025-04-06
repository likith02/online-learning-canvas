
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and social links */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">XYZ Academy</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-xs">
              Empowering students through interactive online learning experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Teacher Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Study Materials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Practice Tests</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Free Classes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Student Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Parent Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} XYZ Academy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-primary">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
