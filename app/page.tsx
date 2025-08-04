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

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
  leftHalf={
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
        CommunityComput: Building Stronger, Smarter Communities
      </h2>
      <p className="text-xl font-light">
        CommunityComput helps planners, policy makers, and researchers understand how communities behave under different scenarios and decisions. Evaluate strategies, simulate behaviors, and build a resilient, inclusive, and sustainable future.
      </p>
    </>
  }
  rightHalf={
    <Image src={"/products/software.png"} alt="Community model" width={500} height={100} className="w-1/2 h-auto" />
  }
        />
        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Empowering Smarter, Resilient Communities
              </h2>
              <p className="text-xl font-light">
                 Explore how CommunityComput models policy impact, disaster scenarios, and resilience strategies using dynamic simulations and data-driven insights — all outlined in the accordion.
              </p>
            </div>
          }
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
