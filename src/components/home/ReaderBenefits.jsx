import React from "react";
import { FiClock, FiShield, FiFilter } from "react-icons/fi";

const benefits = [
  {
    icon: <FiClock className="text-3xl text-emerald-600" />,
    title: "Quick Discovery",
    description:
      "Search by title or browse categories to find the perfect book in seconds. No more endless scrolling.",
  },
  {
    icon: <FiShield className="text-3xl text-emerald-600" />,
    title: "Secure Profiles",
    description:
      "Your account is protected with secure authentication. Sign in with email or Google and manage your profile safely.",
  },
  {
    icon: <FiFilter className="text-3xl text-emerald-600" />,
    title: "Focused Categories",
    description:
      "Books organized into Story, Tech, and Science so you can jump straight to what interests you most.",
  },
];

const ReaderBenefits = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-shell">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
          Why Readers Love BiblioLoom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReaderBenefits;
