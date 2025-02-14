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
        <div className="container inset-0 w-full overflow-hidden">
          <p className="text-lg leading-relaxed mb-5 text-white object-cover">
            Owning your own business means wearing a lot of hats. You want to
            look after your clients, you want to offer more, marketing and
            programming. I was looking for a solution that aligned with my
            philosophies, so I could do what I love, looking after my clients
            training my clients and getting that progress without having to
            worry about all of those hats
          </p>
          <p className="text-lg leading-relaxed text-white">
            Vera & Teddy- Founders, Falcon Training
          </p>{" "}
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
        <div className="navigation">
          <button onClick={handlePrev}><img src="/image/partnership/kiri.png"></img></button>
          {/* <div className="line"><img src="/image/partnership/line.png"></img></div> */}
          <button onClick={handleNext}><img src="/image/partnership/kanan.png"></img></button>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative py-12 bg-gray-100">
        <div className="container">
          <div className="absolute inset-0 w-full overflow-hidden">
            <img
              src="/image/partnership/bg_invest.png"
              alt="Background"
              className="object-cover lg:min-w-[200vh] max-h-[57vh] object-cover opacity-1000"
            />
          </div>
          <div className="max-w-md mx-auto bg-red-900 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              INVESTMENT TODAY
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 rounded border"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 rounded border"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-red-900 py-2 px-4 rounded hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
