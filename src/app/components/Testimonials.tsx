"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/assets/img/testimonials/client-1.jpg",
    name: "David Johnson",
    title: "Fitness Coach ",
    quote:
      "Medify's health tracking feature has been a game changer. I can easily monitor my vitals and stay on top of my wellness goals. It’s like having a personal health assistant in my pocket!",
  },
  {
    image: "/assets/img/testimonials/client-2.jpg",
    name: "David Walker",
    title: "Veteran",
    quote:
      "I was amazed at how quickly I got a medical loan through Medify when my wife needed urgent surgery. The process was smooth, transparent, and truly life-saving.",
  },
  {
    image: "/assets/img/testimonials/client-3.jpg",
    name: "Amanda Ijeoma",
    title: "University Student",
    quote:
      "When I had a panic attack during exams, Medify connected me to a certified therapist in minutes. The session was helpful and completely private. I can’t recommend it enough!",
  },
  {
    image: "/assets/img/testimonials/client-4.jpg",
    name: "Chinedu Okeke",
    title: "Delivery Driver",
    quote:
      "During an accident, Medify's emergency locator helped first responders find me quickly. That feature literally saved my life. Every driver should have this app.",
  },
  {
    image: "/assets/img/testimonials/client-5.jpg",
    name: "Mrs. Ngozi Chukwu",
    title: "Mother of Two",
    quote:
      "My baby had a high fever in the middle of the night, and I didn’t know what to do. Medify helped me find the nearest hospital instantly. The fast response made all the difference. I’m so grateful for this app!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-100" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Real Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Our Users Say About Medify
          </h2>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={25}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-6 rounded-xl shadow-md min-h-[300px]">
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <span className="text-sm text-gray-500">{t.title}</span>
                  </div>
                </div>
                <div className="text-gray-600 relative">
                  <span className="text-primary text-2xl absolute -top-2 left-0">“</span>
                  <p className="pl-6">{t.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
