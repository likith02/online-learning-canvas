
import React from 'react';
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

const Testimonial = ({ content, name, role, avatarUrl, rating }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 card-hover">
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-slate-300"}`} 
        />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">&quot;{content}&quot;</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 mr-4">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "The courses were incredibly engaging and the instructors were very supportive. I've improved my grades significantly since joining.",
      name: "Sarah Johnson",
      role: "High School Student",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      content: "As a parent, I appreciate how the platform makes learning fun for my children while maintaining educational quality.",
      name: "Michael Chen",
      role: "Parent",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      rating: 5
    },
    {
      content: "The flexible scheduling and personal attention has made a huge difference in my learning experience. Highly recommended!",
      name: "Priya Sharma",
      role: "College Student",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who have transformed their learning experience with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
