
"use client";

import dynamic from "next/dynamic";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";



const SplashScreen = dynamic(() => import("./components/SplashScreen"), { ssr: false });

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faqs";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="font-sans">
      <SplashScreen />
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Plans />
      <Footer />
    </main>
  );
}
