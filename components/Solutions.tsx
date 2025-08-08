"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaCity, FaSitemap, FaChartLine, FaNetworkWired, FaTools } from "react-icons/fa";
import { MdInsights, MdPolicy, MdPublic } from "react-icons/md";

const tabs = [
  { key: "aspects", label: "Aspects", icon: FaShieldAlt },
  { key: "engagement", label: "Engagement Strategy", icon: MdPublic },
  { key: "tools", label: "Analytics & Tools", icon: FaTools },
  { key: "community", label: "Community Levels", icon: FaCity },
  { key: "sectors", label: "Infrastructure Sectors", icon: FaSitemap },
  { key: "resources", label: "Resources & Flows", icon: MdPolicy },
  { key: "outputs", label: "Outputs & Metrics", icon: FaChartLine },
];

const content: Record<string, { title: string; subtitle: string; items?: string[]; detail?: string }>={
  aspects: {
    title: "Aspects",
    subtitle:
      "Resilience and sustainability dimensions your teams can model, benchmark, and govern with AI-generated evidence.",
    items: [
      "Critical Infrastructure Resilience",
      "Community Capital",
      "Wellbeing Resilience",
      "Institutional Resilience",
      "Economic Resilience",
      "Ecological Resilience",
      "Sustainability",
      "Reliability",
      "Revenue",
      "Efficiency",
    ],
  },
  engagement: {
    title: "Engagement Strategy",
    subtitle:
      "Built-in frameworks to align agencies, councils, utilities, and the public around accountable decisions.",
    items: [
      "Blue Ribbon Commission",
      "Deliberative Polling",
      "Collaborative Adaptive Management",
      "Design Charrette",
      "Consensus Building",
      "Participatory Budgeting",
    ],
  },
  tools: {
    title: "Analytics & Tools",
    subtitle:
      "AI-native modeling with transparent, auditable pipelines for policy and operations.",
    items: [
      "Optimization (budget, siting, scheduling)",
      "Deep Learning & Machine Learning",
      "Data Envelopment Analysis (DEA) for efficiency benchmarking",
      "Network Science for interdependency mapping",
      "System Dynamics for long-horizon behavior",
    ],
  },
  community: {
    title: "Community Levels",
    subtitle:
      "Plan once, simulate anywhere—from village to multi-continent programs.",
    items: [
      "Multi Continent",
      "Continent",
      "Multi Country",
      "Country",
      "Multi States/Provinces",
      "State",
      "Multi County/City",
      "County",
      "City",
      "Village",
    ],
  },
  sectors: {
    title: "Infrastructure Sectors",
    subtitle:
      "Cross-sector modeling reveals trade-offs and cascading effects before they happen.",
    items: [
      "Communications",
      "Dams",
      "Emergency Services",
      "Energy (Electricity, Gas, Coal)",
      "Financial Services",
      "Food & Agriculture",
      "Transportation Systems",
      "Water & Wastewater",
      "Government Facilities",
      "Healthcare & Public Health",
      "Information Technology",
      "Custom / New Sector",
    ],
  },
  resources: {
    title: "Resources & Flows",
    subtitle:
      "Quantify imports/exports, migration, and inter-community relationships with policy constraints.",
    items: ["Export", "Import", "Migration", "Relationships with other communities"],
  },
  outputs: {
    title: "Outputs & Metrics",
    subtitle:
      "Executive dashboards with trendlines, caveats, and scenario comparisons—ready for board packets and council briefings.",
    detail:
      "Sample KPIs: Resilience Standing & Growth, Infrastructure Health, Wellbeing Index, Policy Compliance, Reliability Score, Sustainability Index. Actions: Compare, Improvement, Report, Check, Detail, Options.",
  },
};

// Small badge list for items
function Pill({ text }: { text: string }) {
  return (
    <span className="inline-block text-sm bg-white/10 border border-white/20 dark:border-white/10 text-white px-3 py-1 rounded-full">
      {text}
    </span>
  );
}

export default function Solutions() {
  const [active, setActive] = useState<string>("aspects");
  const ActiveIcon = tabs.find(t => t.key === active)?.icon || MdInsights;
  const c = content[active];

  return (
    <section id="solutions" className="relative py-16 bg-gray-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-95" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Solutions for Policy, Planning, and Operations
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto">
            CommunityComput turns data into decisions: Generative AI drafts scenarios and narratives,
            ML predicts risk and outcomes, and simulation validates options—so leaders can move fast
            with accountability.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                active === key
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/20 hover:border-white/40"
              }`}
            >
              <Icon />
              <span className="text-sm sm:text-base">{label}</span>
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left panel: summary */}
          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <ActiveIcon className="text-2xl" />
              <h3 className="text-2xl font-semibold">{c.title}</h3>
            </div>
            <p className="text-gray-300">{c.subtitle}</p>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#request-demo"
                className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
              >
                Request a demo
              </a>
              <a
                href="#contact"
                className="border border-white/30 px-4 py-2 rounded-md hover:bg-white/10"
              >
                Talk to an expert
              </a>
            </div>

            {/* Screenshot slot (optional) */}
            <div className="mt-6 rounded-lg overflow-hidden bg-black/40 aspect-video flex items-center justify-center text-gray-400 text-sm">
              {/* Replace with <Image .../> or <video .../> to show your prototype shot */}
              Add prototype screenshot here
            </div>
          </div>

          {/* Right panel: item grid / details */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            {c.items ? (
              <>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((t) => (
                    <Pill key={t} text={t} />
                  ))}
                </div>

                {/* Value explainer */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold mb-2">How it helps</h4>
                    <p className="text-gray-300">
                      Generative AI drafts plans and stakeholder narratives. ML surfaces risks,
                      sensitivities, and trade-offs. Simulation stress-tests interventions across
                      horizons and scales.
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold mb-2">Where it’s used</h4>
                    <p className="text-gray-300">
                      Budget allocation, capital planning, emergency preparedness, regulatory
                      compliance, and performance reporting to councils/boards.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <p className="text-gray-300">{c.detail}</p>

                {/* Sample KPI cards */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Resilience Standing", value: "Warning", change: "-12%" },
                    { name: "Infrastructure Health", value: "Good", change: "+5%" },
                    { name: "Wellbeing Index", value: "Great", change: "+22%" },
                  ].map((kpi) => (
                    <div key={kpi.name} className="bg-black/30 rounded-xl p-4 border border-white/10">
                      <div className="text-sm text-gray-400">{kpi.name}</div>
                      <div className="mt-1 text-xl font-semibold">{kpi.value}</div>
                      <div className={`text-sm ${kpi.change.startsWith("-") ? "text-red-400" : "text-green-400"}`}>
                        {kpi.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions row */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Compare", "Improvement", "Report", "Check", "Detail", "Options"].map((a) => (
                    <button
                      key={a}
                      className="px-3 py-1.5 text-sm rounded-md bg-white/10 border border-white/20 hover:bg-white/20"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom note for credibility */}
        <div className="mt-10 text-center text-sm text-gray-400">
          Auditable by design: versioned scenarios, policy lineage, and export to your BI stack.
        </div>
      </div>
    </section>
  );
}