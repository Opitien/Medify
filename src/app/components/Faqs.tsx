// components/FAQ.tsx
import React from "react";

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="w-full py-24 px-4 md:px-12 xl:px-24 bg-gradient-to-br from-red-50 to-red-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-red-700 animate-fadeIn">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-8">
          {[
            {
              question: "Is Medify free to use?",
              answer:
                "Yes, Medify provides a free version that includes core features such as symptom checking, emergency hospital locator, and mental health journaling. Users can also chat with the AI medical assistant for general health inquiries. For users who want access to premium benefits like direct consultations with human doctors, advanced analytics, or therapy sessions, we offer affordable subscription plans. Our goal is to make healthcare support accessible to everyone regardless of their financial situation.",
            },
            {
              question: "How is my data secured?",
              answer:
                "Your privacy is our top priority. Medify uses end-to-end encryption to safeguard all your personal and medical data. We follow strict global compliance standards including HIPAA (Health Insurance Portability and Accountability Act) and GDPR (General Data Protection Regulation). This means your information is not shared with third parties without your consent. Additionally, all data is stored on secure servers with multiple layers of protection to prevent unauthorized access.",
            },
            {
              question: "Can I use Medify on my phone?",
              answer:
                "Absolutely. Medify is fully optimized for mobile devices and is accessible through both our responsive web app and dedicated Android/iOS mobile apps. Whether you're using a smartphone or tablet, you’ll enjoy a seamless experience. From logging symptoms to finding the nearest hospital or speaking with a healthcare provider, all features are designed to work efficiently on mobile. You can even get real-time notifications for medication reminders and health alerts.",
            },
            {
              question: "Does Medify work without internet?",
              answer:
                "While some core features like real-time consultations and emergency hospital directions require an internet connection, Medify does offer limited offline functionality. You can access saved medical records, past conversations with the chatbot, and use the symptom tracker offline. As soon as you're back online, your data will automatically sync with your account to ensure continuity and backup. We’re continually improving offline support for users in low-connectivity areas.",
            },
            {
              question: "Can I speak to a real doctor through Medify?",
              answer:
                "Yes. Medify partners with licensed and verified medical professionals across various specializations. Through the app, users can book virtual consultations for general health advice, mental health therapy, or follow-ups after treatment. These sessions are conducted over secure video or voice calls. We ensure all professionals on the platform are vetted and comply with international medical standards, so you can trust the care you receive is safe, credible, and confidential.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group border border-red-200 rounded-3xl p-6 md:p-8 bg-white shadow-xl hover:shadow-2xl transition duration-300"
            >
              <summary className="font-semibold text-red-700 cursor-pointer group-open:font-bold text-lg md:text-xl">
                {item.question}
              </summary>
              <p className="mt-4 text-red-800 text-base md:text-lg leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
