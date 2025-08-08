import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/comcom.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 my-32 mx-4">
        <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-md">
          CommunityComput
        </h1>

        {/* Inspirational quote */}
        <p className="text-lg sm:text-xl md:text-2xl italic text-white mb-8 font-light drop-shadow max-w-3xl mx-auto leading-relaxed">
          “Through our choices and actions, we strive not only to preserve the Earth's precious resources, but also to serve as faithful stewards for the generations to come.”
        </p>

     
        <div className="flex justify-center space-x-6">
          <Link
            href="#hero"
            className="bg-white text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            href="#contact"
            className="bg-white text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Optional: Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
    </section>
  );
}