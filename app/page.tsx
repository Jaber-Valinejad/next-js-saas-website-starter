import Header from "components/Header";
import Hero from "components/Hero";
import Contact from "components/Contact";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import Solutions from "components/Solutions"; // ⬅️ add this

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />

        {/* 1) Benefits/ROI */}
        <Features />

        {/* 3) Supporting explainer + product image */}
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                CommunityComput: Building Stronger, Smarter Communities
              </h2>
              <p className="text-xl font-light">
                CommunityComput helps planners, policy makers, and researchers understand how
                communities behave under different scenarios and decisions. Evaluate strategies,
                simulate behaviors, and build a resilient, inclusive, and sustainable future.
              </p>
            </>
          }
          rightHalf={
            <Image
              src={"/products/software.png"}
              alt="Community model"
              width={500}
              height={100}
              className="w-1/2 h-auto"
            />
          }
        />

        {/* 2) Depth / what the platform actually does */}
        <Solutions /> {/* has id="solutions" inside for anchors */}

        <Customers />

        {/* 4) Outcome-focused proof points */}
        <Section
          leftHalf={<Accordion />} // your 3x/5x/10x outcome items
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Empowering Smarter, Resilient Communities
              </h2>
              <p className="text-xl font-light">
                Explore how CommunityComput models policy impact, disaster scenarios, and resilience
                strategies using dynamic simulations and data-driven insights — all outlined in the accordion.
              </p>
            </div>
          }
        />

        {/* 5) Social proof (testimonials) */}
        <Reviews />

       {/* 6) Institutional credibility */}
<section className="py-12 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
      Proudly powered by research and innovation from
    </p>
    <div className="flex flex-wrap justify-center items-center gap-16">
      {/* Harvard */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/logos/harvard.png" // Harvard crest/logo
            alt="Harvard University"
            className="h-14 w-auto relative z-10"
          />
          <img
            src="/flags/us-flag.png" // subtle background US flag
            alt="US Flag"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 h-16 w-auto"
          />
        </div>
        <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
          Harvard University
        </span>
      </div>

      {/* MIT */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/logos/mit.png" // MIT logo
            alt="MIT"
            className="h-14 w-auto relative z-10"
          />
          <img
            src="/flags/us-flag.png"
            alt="US Flag"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 h-16 w-auto"
          />
        </div>
        <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
          Massachusetts Institute of Technology
        </span>
      </div>
    </div>
  </div>
</section>

        {/* 7) Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}