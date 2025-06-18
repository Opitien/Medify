import React from "react";

const features = [
  {
    icon: "bi bi-heart-pulse",
    title: "Health Monitoring",
    description: "Track your vitals and health metrics in real-time using Medify.",
  },
  {
    icon: "bi bi-chat-dots",
    title: "AI Medical Chat",
    description: "Get instant medical advice from our intelligent chatbot system.",
  },
  {
    icon: "bi bi-geo-alt",
    title: "Emergency Locator",
    description: "Quickly find the nearest hospital or emergency service near you.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Secure Data",
    description: "We prioritize patient privacy and data protection with encryption.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <i className={`${feature.icon} text-red-600 text-4xl mb-4`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
