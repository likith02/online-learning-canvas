
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Solid background color */}
      <div className="absolute inset-0 bg-blue-500 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Learn Without <span className="text-primary-foreground underline decoration-secondary underline-offset-8">Limits</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
              Unlock your potential with our interactive online courses designed for students at every level.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-md">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="text-md bg-white/20 border-white/40 text-white hover:bg-white/30">
                Free Trial
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/80">500+ Courses</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/80">Expert Tutors</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/80">Flexible Learning</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Book a Free Session</h3>
              <p className="text-gray-600 mb-6 text-center">Learn from the best teachers</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex gap-4 mb-4">
                    <Button variant="outline" className="flex-1 bg-primary/10 text-primary border-primary/20">Online</Button>
                    <Button variant="outline" className="flex-1">Offline</Button>
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Student's Name" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <input type="tel" placeholder="Mobile Number" className="flex-1 p-3 border rounded-md" />
                    <Button className="whitespace-nowrap">Get OTP</Button>
                  </div>
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <select className="w-full p-3 border rounded-md bg-white" defaultValue="">
                    <option value="" disabled>Select Grade</option>
                    <option value="grade-1">Grade 1</option>
                    <option value="grade-2">Grade 2</option>
                    <option value="grade-3">Grade 3</option>
                    <option value="grade-4">Grade 4</option>
                    <option value="grade-5">Grade 5</option>
                  </select>
                </div>
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
