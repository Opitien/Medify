// components/Plans.tsx
import React, { useState } from "react";

const Plans: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const pricing = {
    monthly: {
      starter: 0,
      plus: 15,
      family: 25,
    },
    yearly: {
      starter: 0,
      plus: 150,
      family: 250,
    },
  };

  return (
    <section
      id="plans"
      className="w-full py-20 px-4 md:px-6 bg-gradient-to-br from-red-50 via-rose-100 to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-red-700 animate-fadeIn">
          Medify Subscription Plans
        </h2>

        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border rounded-full p-1 bg-white shadow-md">
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-red-600 text-white"
                  : "text-red-600 hover:bg-red-100"
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-red-600 text-white"
                  : "text-red-600 hover:bg-red-100"
              }`}
              onClick={() => setBilling("yearly")}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Wellness Starter */}
          <div className="bg-white rounded-xl border border-red-200 shadow-md p-6 flex flex-col text-center">
            <h3 className="text-xl font-semibold text-red-700">Wellness Starter</h3>
            <p className="text-4xl font-bold text-red-600 my-4">
              ${pricing[billing].starter}
              {billing === "monthly" ? <span className="text-base font-normal">/mo</span> : <span className="text-base font-normal">/yr</span>}
            </p>
            <ul className="text-red-700 text-sm space-y-2 mb-6">
              <li>Basic health tracking</li>
              <li>Community support</li>
              <li>Access to articles & tips</li>
            </ul>
            <button className="bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition">
              Get Started
            </button>
          </div>

          {/* Medify Plus */}
          <div className="relative bg-white rounded-xl border-2 border-red-500 shadow-lg p-6 flex flex-col text-center">
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
            <h3 className="text-xl font-semibold text-red-700">Medify Plus</h3>
            <p className="text-4xl font-bold text-red-600 my-4">
              ${pricing[billing].plus}
              {billing === "monthly" ? <span className="text-base font-normal">/mo</span> : <span className="text-base font-normal">/yr</span>}
            </p>
            <ul className="text-red-700 text-sm space-y-2 mb-6">
              <li>1-on-1 Medical Chat Support</li>
              <li>Emergency Locator Tools</li>
              <li>Personal Health Reports</li>
              <li>Therapy session access</li>
            </ul>
            <button className="bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition">
              Upgrade Now
            </button>
          </div>

          {/* FamilyCare Pro */}
          <div className="bg-white rounded-xl border border-red-300 shadow-md p-6 flex flex-col text-center">
            <h3 className="text-xl font-semibold text-red-700">FamilyCare Pro</h3>
            <p className="text-4xl font-bold text-red-600 my-4">
              ${pricing[billing].family}
              {billing === "monthly" ? <span className="text-base font-normal">/mo</span> : <span className="text-base font-normal">/yr</span>}
            </p>
            <ul className="text-red-700 text-sm space-y-2 mb-6">
              <li>Up to 5 family members</li>
              <li>Shared appointments & alerts</li>
              <li>Child health monitoring</li>
              <li>Family-wide therapy access</li>
            </ul>
            <button className="bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>

          {/* Medify Enterprise */}
          <div className="bg-white rounded-xl border border-red-300 shadow-md p-6 flex flex-col text-center">
            <h3 className="text-xl font-semibold text-red-700">Medify Enterprise</h3>
            <p className="text-2xl font-bold text-red-600 my-4">Custom Pricing</p>
            <ul className="text-red-700 text-sm space-y-2 mb-6">
              <li>Institutional dashboard</li>
              <li>Unlimited users</li>
              <li>Dedicated support team</li>
              <li>Custom integrations</li>
            </ul>
            <button className="bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
