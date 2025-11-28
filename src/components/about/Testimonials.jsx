import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { BsQuote } from "react-icons/bs";

function Testimonials() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  const testimonials = [
    {
      text: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning",
      name: "Rachel Bennett",
      role: "Strategy Director",
      img: "/images/person-f-9.webp",
      bg: "bg-white",
      border: "border-gray-300",
    },
    {
      text: "Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.",
      name: "Daniel Morgan",
      role: "Chief Innovation Officer",
      img: "/images/person-m-3.webp",
      bg: "bg-gray-200",
      border: "border-blue-600",
    },
    {
      text: "Strategic partnership has enabled seamless digital transformation and operational excellence.",
      name: "Emma Thompson",
      role: "Digital Lead",
      img: "/images/person-f-7.webp",
      bg: "bg-white",
      border: "border-gray-300",
    },
    {
      text: "Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.",
      name: "Christopher Lee",
      role: "Technical Director",
      img: "/images/person-f-7.webp",
      bg: "bg-white",
      border: "border-gray-300",
    },
    {
      text: "Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.",
      name: "Olivia Carter",
      role: "Product Manager",
      img: "/images/person-m-8.webp",
      bg: "bg-gray-200",
      border: "border-blue-600",
    },
    {
      text: "Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.",
      name: "Nathan Brooks",
      role: "UX Director",
      img: "/images/person-m-5.webp",
      bg: "bg-white",
      border: "border-gray-300",
    },
  ];

  return (
    <div className="bg-white py-12 w-full">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className={`relative p-6 rounded-2xl ${item.bg} border ${item.border} text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2`}
          >
            <div className="absolute p-2 rounded-full text-blue-600 -top-4 left-6 border border-gray-300 bg-transparent">
              <BsQuote />
            </div>

            <p className="pt-6 pb-4 border-b border-gray-300">{item.text}</p>

            <div className="flex items-center gap-4 mt-6">
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="text-blue-950 font-medium">{item.name}</h2>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
