import React from "react";
import ButtonLink from "../components/ButtonLink";

function About() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/aboutUs/about_us_falcon.jpg"
          alt="Fitnesswork Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[50vh]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-white text-4xl sm:text-7xl">IGNITE YOUR FIRE</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl text-center my-8 text-blue-primary">
        <h1 className="text-color-red text-5xl py-4">FALCON FITNESS BOX</h1>
        <p className="text-color-red">
          Discover a tech-driven workout experience <br></br> Dive into music &
          rythm<br></br>
          #Igniteyourfire
        </p>
      </div>

      <div className="relative w-full h-[600px] md:h-96 flex items-center bg-[#530202]">
        {/* Container untuk teks */}
        <div className="relative z-10 text-white w-full md:w-1/2 px-12 py-16 flex flex-col justify-center">
          <p className="text-3xl font-bold mb-6">WHAT IS FALCON?</p>
          <p className="text-lg leading-relaxed mb-6">
            Introducing Falcon Fitness Box, where science meets nightlife
            for an unparalleled workout experience.
            Our cutting-edge fitness studio leverages unique heart rate
            tracking technology to ensure you achieve faster, safer results.
          </p>
          <p className="text-lg leading-relaxed">
            Imagine breaking a sweat under dynamic lighting effects
            and heart-pumping music, all set within a vibrant nightclub
            atmosphere. Perfect for fitness enthusiasts and tech-savvy
            individuals alike, our innovative approach not only makes
            working out effective but also incredibly fun.
            Join us at Falcon Fitness Box to transform your fitness journey
            with the perfect blend of science and excitement.
          </p>
        </div>

        {/* Gambar dengan overlay merah */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#530202]/100 via-[#530202]/40 to-transparent"
          ></div>
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('image/aboutUs/nav_about.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Top row with two items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full overflow-hidden w-64 h-64 bg-red-600 mb-6">
              <img
                src="image/aboutUs/cutting_edge.png"
                alt="Heart rate tracking"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold uppercase max-w-xs text-[#4A0404]">
              CUTTING-EDGE FITNESS STUDIO WITH HEART RATE TRACKING TECHNOLOGY.
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full overflow-hidden w-64 h-64 bg-red-600 mb-6">
              <img
                src="image/aboutUs/red_box.png"
                alt="Red box"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold uppercase max-w-xs text-[#4A0404]">
              RED BOX: DYNAMIC LIGHTING EFFECTS & FIBRANT NIGHTCLUB ATMOSPHERE
            </h3>
          </div>
        </div>

        {/* Bottom row with single centered item */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full overflow-hidden w-64 h-64 bg-red-600 mb-6">
              <img
                src="image/aboutUs/sauna.png"
                alt="Infrared sauna"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold uppercase max-w-xs text-[#4A0404]">
              RECOVERY AREA: INFRARED SAUNA
            </h3>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center my-4 lg:container mx-auto">
        <div>
          <img
            src="/image/falcon/falcon-app.png"
            alt="Mobile App Fitness Works"
            className="max-w-lg mx-auto"
          />
        </div>
        <div className="container mx-auto lg:mx-0 text-blue-primary py-8 lg:max-w-2xl">
          <h2 className="text-color-red font-BebasNeue font-black text-4xl mb-4">
            DOWNLOAD NOW!
          </h2>
          <div className="text-color-red">
            <p>
              Our great new features ensure you’re able to manage your
              membership from the palm of your hand.
            </p>
            <br />
            <p>- Contactless entry to the gym through the app</p>
            <p>- Book Into your favourite classes</p>
            <p>
              - Manage your membership from changing your gym to updating
              payment details
            </p>
            <p>
              - Access to your training journey, challenges, class schedules,
              and community platform
            </p>
          </div>
          <button className="mt-4 border py-1">
            <img
              src="/image/aboutUs/button-google-play.png"
              alt="Mobile App Fitness Works"
              className="h-12 mx-2"
            />
          </button>
          <button className="mt-4 border py-1">
            <img
              src="/image/aboutUs/button-app-store.png"
              alt="Mobile App Fitness Works"
              className="h-12 mx-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
