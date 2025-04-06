
import React from 'react';
import { BookOpen, Video, Users, Calendar, Star, Clock } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 card-hover">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6 text-primary" />,
      title: "Live Classes",
      description: "Interactive live sessions with real-time doubt solving and personalized attention."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Study Materials",
      description: "Comprehensive study materials designed by expert educators for easy understanding."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Expert Tutors",
      description: "Learn from experienced educators passionate about helping students succeed."
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Scheduled Learning",
      description: "Structured curriculum with planned sessions to ensure complete syllabus coverage."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Practice Tests",
      description: "Regular assessments and mock tests to evaluate progress and improve performance."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all academic queries and technical issues."
    }
  ];

  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">Why Choose Our Platform?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our platform transforms the learning experience with innovative features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
