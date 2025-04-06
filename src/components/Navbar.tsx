
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Search } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Courses', href: '#courses' },
    { name: 'Resources', href: '#resources' },
    { name: 'Tutors', href: '#tutors' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">EduLearn</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
