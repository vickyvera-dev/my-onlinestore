import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contactmap() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 px-4 lg:px-4" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-xl" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0861883701905!2d3.3518028470978285!3d6.636218105286323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b76bb4f36f%3A0xb0f14aa9165d2a9f!2sIJAN%20AFRICA!5e0!3m2!1sen!2sng!4v1757069438248!5m2!1sen!2sng"
            className="w-full h-[400px] md:h-[500px] rounded-xl border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
          <form className="space-y-8 flex flex-col w-full">
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="name"
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                autoComplete="email"
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            />

            <textarea
              placeholder="Message"
              rows="8"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactmap;
