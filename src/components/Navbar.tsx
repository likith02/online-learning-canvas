
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
    <nav className="bg-blue-500 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">XYZ Academy</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 rounded"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="secondary" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="secondary" className="hidden sm:inline-flex">Sign In</Button>
            <Button variant="default" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
