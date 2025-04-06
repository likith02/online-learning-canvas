
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CtaSection = () => {
  const benefits = [
    "Access to 500+ quality courses",
    "Personal attention from expert tutors",
    "Interactive live doubt solving sessions",
    "Structured learning paths & progress tracking",
    "Learn at your own pace, anytime, anywhere"
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmExIDEgMCAwMTEgMXYxMmExIDEgMCAwMS0xIDFINDBjLTEuMSAwLTItLjktMi0ydi0xMHoiIG9wYWNpdHk9Ii44Ii8+PHBhdGggZD0iTTE1IDE5YzAtMS4xLjktMiAyLTJoMTJhMSAxIDAgMDExIDF2MTJhMSAxIDAgMDEtMSAxSDE3Yy0xLjEgMC0yLS45LTItMlYxOXoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTAgNGMwLTEuMS45LTIgMi0yaDEyYTEgMSAwIDAxMSAxdjEyYTEgMSAwIDAxLTEgMUgyYy0xLjEgMC0yLS45LTItMlY0eiIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full inline-block mb-6">
              <span className="px-4 py-1 bg-white text-primary rounded-full text-sm font-medium">Starting at $6.99/month</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Learning Journey Today
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Pricing Plans
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md relative animate-float">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-6 bg-secondary/10">
                  <h3 className="text-2xl font-bold text-center text-secondary">Live Classes</h3>
                  <p className="text-center text-gray-600 mt-2">Doubt Solving | Exam Prep | Personal Attention</p>
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold text-primary">$6.99</span>
                      <span className="text-gray-600 mb-1">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Classes 4-10</p>
                    <Button className="mt-6 w-full">Buy Now</Button>
                    <p className="text-xs text-gray-500 mt-4">*7-day free trial available</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements decoration */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
