
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  students: number;
  price: string;
  category: string;
  level: string;
  isBestseller?: boolean;
}

const CourseCard = ({
  image,
  title,
  description,
  rating,
  students,
  price,
  category,
  level,
  isBestseller = false
}: CourseCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm card-hover">
    <div className="relative h-48 w-full bg-slate-200">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      {isBestseller && (
        <Badge className="absolute top-3 left-3 bg-yellow-500 hover:bg-yellow-600">
          Bestseller
        </Badge>
      )}
      <Badge className="absolute top-3 right-3 bg-slate-800/70 hover:bg-slate-800">
        {category}
      </Badge>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-center mb-2">
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
          {level}
        </Badge>
        <div className="flex items-center text-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span>{rating}</span>
          <span className="mx-2 text-slate-300">|</span>
          <Users className="w-4 h-4 text-slate-400 mr-1" />
          <span>{students}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-primary">{price}</span>
        <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
          View Course
        </Button>
      </div>
    </div>
  </div>
);

const CoursesSection = () => {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300",
      title: "Introduction to Computer Science",
      description: "Learn the fundamentals of computer science and programming.",
      rating: 4.8,
      students: 15420,
      price: "$49.99",
      category: "Technology",
      level: "Beginner",
      isBestseller: true
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=300",
      title: "Advanced Mathematics",
      description: "Master complex mathematical concepts and problem-solving techniques.",
      rating: 4.7,
      students: 8245,
      price: "$59.99",
      category: "Mathematics",
      level: "Intermediate"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300",
      title: "Web Development Bootcamp",
      description: "Comprehensive guide to modern web development technologies.",
      rating: 4.9,
      students: 12785,
      price: "$79.99",
      category: "Programming",
      level: "All Levels",
      isBestseller: true
    }
  ];

  return (
    <section id="courses" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">Popular Courses</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Explore our most popular courses and start your learning journey today
            </p>
          </div>
          <Button className="mt-6 md:mt-0">View All Courses</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              rating={course.rating}
              students={course.students}
              price={course.price}
              category={course.category}
              level={course.level}
              isBestseller={course.isBestseller}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mathematics", "Science", "Programming", "Language Arts", "History", "Art", "Music"].map((subject, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/5">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
