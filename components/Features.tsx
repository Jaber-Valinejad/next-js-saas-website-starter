import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

const Features = () => {
 const features = [
  {
    icon: FaShieldAlt,
    title: "Policy Simulation",
    description: "Assess and visualize the effect of socio-technical decisions on communities.",
  },
  {
    icon: FaReact,
    title: "What-if Analysis",
    description: "Explore alternative futures with social, economic, and environmental variations.",
  },
  {
    icon: FaDatabase,
    title: "Integrated Data",
    description: "Use social, physical, cyber, and environmental sensing for accurate insights.",
  },
  {
    icon: SiNextdotjs,
    title: "Community Typing",
    description: "Simulate planning across diverse scales — from rural to multi-continental.",
  },
  {
    icon: SiTailwindcss,
    title: "Dynamic Reports",
    description: "Generate system vulnerability, recovery efficiency, and resilience dashboards.",
  },
  {
    icon: SiStripe,
    title: "Collaboration Tools",
    description: "Foster civic engagement and cross-sector collaboration for policy planning.",
  },
];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Features</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
              Discover how CommunityComput empowers urban and rural communities through advanced simulation, data integration, and resilience modeling — all designed to support sustainable, inclusive, and informed decision-making.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
