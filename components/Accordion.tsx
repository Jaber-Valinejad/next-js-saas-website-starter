"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full rounded-lg overflow-hidden ${
          isOpen ? "bg-black dark:bg-gray-900" : "bg-black dark:bg-gray-900"
        }`}
      >
        <button
          className="w-full text-left p-4 flex justify-between items-center"
          onClick={toggleOpen}
        >
          <span className="text-xl font-semibold text-white dark:text-white">{title}</span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown className="text-2xl text-white" />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="p-4">
            <p className="text-white font-light">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultAccordionItems = [
  {
    title: "Reduce Collaboration Time by 3x",
    content: "Streamline inter-departmental and cross-agency coordination using AI-driven workflows that cut the time required for collaboration to one-third.",
  },
  {
    title: "Increase Collaboration Efficiency by 3x",
    content: "Leverage machine learning analytics to optimize communication channels, ensuring stakeholders achieve more in less time with fewer resources.",
  },
  {
    title: "Lower Energy Consumption by 2.5x",
    content: "Adopt data-driven collaboration tools that minimize the environmental and operational energy footprint while maintaining high productivity.",
  },
  {
    title: "Cut Collaboration Costs by 3x",
    content: "Deploy AI-assisted planning and resource allocation to significantly reduce administrative and operational expenses.",
  },
  {
    title: "Enhance Resilience and Reduce Losses by 5x",
    content: "Predict risks, identify vulnerabilities, and implement proactive strategies to safeguard infrastructure and communities.",
  },
  {
    title: "Promote Sustainability with a 3x Improvement",
    content: "Integrate sustainability metrics into decision-making to triple environmental impact performance.",
  },
  {
    title: "Amplify & Streamline Decision-Making by 10x",
    content: "Use generative AI to rapidly model scenarios, assess outcomes, and deliver decisions with unparalleled speed and precision.",
  },
  {
    title: "Boost Community Efficiency by 5x",
    content: "Apply data science models to optimize public service delivery, resource allocation, and community program execution.",
  },
  {
    title: "Accelerate Community Development by 2x",
    content: "Enhance urban and rural development planning cycles with AI-powered simulations and predictive analytics.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;