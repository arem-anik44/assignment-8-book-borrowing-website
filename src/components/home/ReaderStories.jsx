"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const stories = [
  {
    name: "Ayesha Sultana",
    role: "College Student",
    text: "BiblioLoom made it so easy to find science books for my coursework. I borrowed three titles in one sitting!",
  },
  {
    name: "Rafiq Uddin",
    role: "Software Developer",
    text: "The tech category is a goldmine. I found exactly what I needed to brush up on React and database design.",
  },
  {
    name: "Priya Das",
    role: "High School Teacher",
    text: "My students love the story collection here. The borrowing process is smooth and the interface is clean.",
  },
  {
    name: "Tanvir Hossain",
    role: "Book Enthusiast",
    text: "I have been looking for a simple platform to discover new reads. BiblioLoom is exactly what I needed.",
  },
];

const ReaderStories = () => {
  return (
    <section className="section-padding">
      <div className="container-shell">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
          What Our Readers Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-full">
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{story.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {story.name}
                    </p>
                    <p className="text-xs text-slate-500">{story.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReaderStories;
