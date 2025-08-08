import React from "react";

const Contact: React.FC = () => {
  return (
    <section 
      id="contact"
      className="container mx-auto py-24 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8 text-center">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl font-light text-gray-700 dark:text-gray-300 mb-8">
          125 Western Avenue, Allston, Massachusetts 02134, United States<br />
          <a href="mailto:info@communitycomput.ai" className="underline">
            info@communitycomput.io
          </a>
        </p>
        {/* Optional: Embed a form below if needed */}
      </div>
    </section >
  );
};

export default Contact;