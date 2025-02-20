import React, { useState } from "react";
import "../components/styles.css";

function Partnership() {
  const slides = [
    "/image/partnership/slide_1.png", // Ganti dengan URL gambar Anda
    "/image/partnership/slide_2.png", // Ganti dengan URL gambar Anda
    "/image/partnership/slide_3.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/partnership/nav_partnership.png"
          alt="Fitnesswork Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[50vh]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-white text-4xl sm:text-7xl">Partnership</h1>
        </div>
      </div>

      <div className="relative bg-red-falcon">
        <div className="container inset-0 w-[1920px] h-[500px] overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-[60%] h-[80%]">
              {/* Gambar di pojok kanan atas */}
              <img src="/image/partnership/image.png" alt="image" className="absolute top-0 right-0 w-[420px] h-[279px] object-cover" />
              {/* Teks di kiri bawah dengan flexbox */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-between h-full">
                <p className="text-[33px] leading-relaxed mb-5 font-normal">
                  "Owning your own business means wearing a lot of hats. You want to
                  look after your clients, you want to offer more, marketing and
                  programming. I was looking for a solution that aligned with my
                  philosophies, so I could do what I love, looking after my clients
                  training my clients and getting that progress without having to
                  worry about all of those hats"
                </p>
                <p className="text-lg leading-relaxed">
                  Vera & Teddy- Founders, Falcon Training
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slideshow-container">
        <div className="slideshow">
          {slides.map((slide, index) => {
            const position =
              index === currentIndex
                ? "active"
                : index === (currentIndex - 1 + slides.length) % slides.length
                  ? "prev"
                  : index === (currentIndex + 1) % slides.length
                    ? "next"
                    : "hidden";

            return (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index}`}
                className={`slide ${position}`}
              />
            );
          })}
        </div>
      </div>

      {/* Form Section */}
      <div className="relative py-12 bg-gray-100">
        <div className="w-[999px] mx-auto mt-4 relative px-4 mb-12">
          <div className="flex items-center justify-between w-full relative">

            {/* Tombol Prev di kiri */}
            <button onClick={handlePrev} className="prev bg-transparent border-none cursor-pointer p-2 z-10">
              <img src="/image/partnership/kiri.png" alt="Prev" className="w-20" />
            </button>

            <div className="flex-1 border-t-4 border-[#FF0000] mx-6 pointer-events-none"></div>

            {/* Tombol Next di kanan */}
            <button onClick={handleNext} className="next bg-transparent border-none cursor-pointer p-2 z-10">
              <img src="/image/partnership/kanan.png" alt="Next" className="w-20" />
            </button>
          </div>
        </div>

        <div className="container">
          <div className="absolute inset-0 w-full overflow-hidden">
            <img
              src="/image/partnership/bg_invest.png"
              alt="Background"
              className="object-cover w-full h-full opacity-100"
            />
          </div>

          <div className="text-[38px] text-[#530202] mb-12 font-bold text-center">
            INVESTMENT TODAY
          </div>

          <div
            className="w-[809px] h-[910px] mx-auto p-8 px-12 shadow-lg rounded-[30px] backdrop-blur-0 flex flex-col justify-between"
            style={{
              background: "radial-gradient(circle at top right, #B90505 20%, #530202 80%)",
            }}
          >
            <h2 className="text-[12px] font-bold text-white mt-2 mb-6">
              (<span className="text-red-500">*</span>) indicates required fields
            </h2>

            <form className="space-y-4 w-full flex-grow">
              {/* Full Name */}
              <div className="w-full">
                <label className="block text-sm font-normal text-white">Full Name</label>
                <input
                  type="text"
                  className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder=""
                />
              </div>

              {/* Phone */}
              <div className="w-full">
                <label className="block text-sm font-medium text-white">Phone</label>
                <input
                  type="tel"
                  className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder=""
                />
              </div>

              {/* Country & City */}
              <div className="w-full flex space-x-6">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-white">Country</label>
                  <input
                    type="text"
                    className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-white">City</label>
                  <input
                    type="text"
                    className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Company, Job Title & Industry */}
              <div className="w-full flex space-x-6">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-white">Company Name</label>
                  <input
                    type="text"
                    className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                <div className="w-1/3">
                  <label className="block text-sm font-medium text-white">Job Title</label>
                  <input
                    type="text"
                    className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>

                <div className="w-1/3">
                  <label className="block text-sm font-medium text-white">Industry</label>
                  <input
                    type="text"
                    className="w-full h-[64px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Additional Input */}
              <div className="w-full">
                <label className="block text-sm font-medium text-white">How did you hear about Falcon Fitness Box?</label>
                <input
                  type="text"
                  className="w-full h-[128px] p-3 border border-gray-300 rounded-[15px] mt-1 focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder=""
                />
              </div>
            </form>

            {/* Submit Button */}
            <div className="text-center mt-auto mb-4">
              <button className="bg-white text-red-600 border-2 border-red-600 w-[165px] h-[42px] px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all">
                SUBMIT
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Partnership;
