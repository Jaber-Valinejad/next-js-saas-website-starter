import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "AI-Powered Policy Impact Simulation",
      description:
        "Leverage Generative AI and predictive modeling to evaluate the impact of newly implemented policies on communities and infrastructure—quantifying both short- and long-term socio-technical effects with evidence-based metrics.",
    },
    {
      icon: FaReact,
      title: "Machine Learning Risk Intelligence",
      description:
        "Identify risks, vulnerabilities, and potential loss events using advanced ML models trained on historical and real-time civic data, delivering early-warning signals and probability-based risk scores to decision-makers.",
    },
    {
      icon: FaDatabase,
      title: "Data-Driven Extreme Event Prediction",
      description:
        "Predict system behavior under extreme conditions—natural disasters, economic shocks, or infrastructure failures—through multi-variable simulations enriched with AI scenario generation and big data integration.",
    },
    {
      icon: SiNextdotjs,
      title: "Generative What-If Scenario Analysis",
      description:
        "Run AI-assisted what-if analyses to test policy options, urban planning scenarios, and protection strategies. Automatically generate alternative pathways and compare their economic, social, and environmental trade-offs.",
    },
    {
      icon: SiTailwindcss,
      title: "Resilience Optimization & Response Modeling",
      description:
        "Optimize response and recovery efforts using simulation and ML-based optimization algorithms, enabling leaders to strengthen weak points, improve resilience, and allocate resources effectively.",
    },
    {
      icon: SiStripe,
      title: "Interconnected Systems & Risk Mitigation Insights",
      description:
        "Model the interdependencies between events, risks, and vulnerabilities to reveal cascading effects. Use AI-driven analytics to produce actionable recommendations for risk mitigation and long-term resilience planning.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            AI-Driven Capabilities for Policy & Resilience
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto">
            CommunityComput integrates Generative AI, machine learning, and advanced simulation to help governments, municipalities, and infrastructure leaders evaluate policies, predict risks, and strengthen community resilience—delivering faster, data-backed decisions with measurable outcomes.
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