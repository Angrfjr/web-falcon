import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import { MapPin } from "lucide-react";

function Near() {
  const steps = [
    {
      number: "1/",
      title: "Download the Falcon Fitness Box app",
    },
    {
      number: "2/",
      title: "Join",
    },
    {
      number: "3/",
      title: "Book a class",
    },
    {
      number: "4/",
      title: "Get there 15 minutes early to meet the trainer",
    },
  ];
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/near/nav_near.png"
          alt="Fitnesswork Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[50vh]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-[96px] font-bold whitespace-nowrap">
            FIND A FALCON NEAR YOU
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-24 p-12 max-w-10xl mx-auto">
        {/* Left side - Text content */}
        <div className="flex-1">
          <h1 className="text-red-800 font-bold text-2xl mb-4">
            FAIRWAY NINE MALL SURABAYA
          </h1>
          <p className="text-gray-700 mb-6">
            First Floor, Olen Marc, Pradah Kalikendal, Kec. Dukuh Pakis,
            <br />
            Surabaya, Jawa Timur 60226
          </p>
          <button
            className="flex items-center justify-center space-x-2 bg-white text-red-700 
                     font-semibold py-2 px-6 rounded-full border-2 border-red-700 
                     hover:bg-red-700 hover:text-white transition-colors duration-300"
          >
            <MapPin size={18} />
            <span>VIEW MAPS</span>
          </button>
        </div>

        {/* Right side - Image */}
        <div className="flex-2">
          <div className="rounded-lg overflow-hidden h-64 bg-purple-900">
            <img
              src="/image/near/place.png"
              alt="Mall interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1799px] mx-auto mt-4"> {/* Tambah mt-16 untuk jarak lebih jauh */}
        <div className="border-t-2 border-[#660000]"></div>
      </div>

      <h2 className="text-center text-[64px] font-bold mt-16 mb-6 text-[#660000]"> {/* Tambah mt-16 dan atur mb */}
        CLASS SCHEDULE
      </h2>

      <div className="max-w-[1850px] mx-auto px-8 mt-8">
        <div className="grid grid-cols-8 grid-rows-10 gap-4">
          {/* Time Row */}
          <div className="bg-[#660000] text-white text-[30px] text-center font-bold p-4">Time</div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => (
            <div key={idx} className="bg-[#660000] text-white text-[30px] text-center font-bold p-4">{day}</div>
          ))}

          {/* Time slots for each hour */}
          {[
            {
              time: "06:30 - 07:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "07:30 - 08:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "ENERGIZING", logo: "/image/class/energiz.png", bgColor: "bg-red-800" },
                { name: "SCULPT", logo: "/image/class/sculpt.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "08:30 - 09:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "ENERGIZING", logo: "/image/class/energiz.png", bgColor: "bg-red-800" },
                { name: "SCULPT", logo: "/image/class/sculpt.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "09:30 - 10:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "ENERGIZING", logo: "/image/class/energiz.png", bgColor: "bg-red-800" },
                { name: "SCULPT", logo: "/image/class/sculpt.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "15:00 - 16:00",
              classes: [
                { name: "U2PACE", logo: "/image/class/pace.png", bgColor: "bg-red-800" },
                { name: "U2PACE", logo: "/image/class/pace.png", bgColor: "bg-red-800" },
                { name: "U2PACE", logo: "/image/class/pace.png", bgColor: "bg-red-800" },
                { name: "U2PACE", logo: "/image/class/pace.png", bgColor: "bg-red-800" },
                { name: "U2PACE", logo: "/image/class/pace.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "17:30 - 18:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "18:30 - 19:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
              ],
            },
            {
              time: "19:30 - 20:30",
              classes: [
                { name: "MUSCLE", logo: "/image/class/muscle.png", bgColor: "bg-red-800" },
                { name: "AEROBIC", logo: "/image/class/aerobic.png", bgColor: "bg-red-900" },
                { name: "BULLETPROF", logo: "/image/class/bullet.png", bgColor: "bg-red-800" },
                { name: "UNITY", logo: "/image/class/unity.png", bgColor: "bg-red-900" },
                { name: "POWER", logo: "/image/class/power_flex.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
                { name: "NO CLASS", logo: "/image/class/no_class.png", bgColor: "bg-red-800" },
              ],
            },
            // Tambahkan data waktu lainnya di sini jika ada
          ].map((slot, rowIdx) => (
            <>
              {/* Displaying time in two lines and centering */}
              <div key={rowIdx} className="bg-white text-[#660000] text-[30px] border-2 border-[#660000] flex items-center justify-center p-4 font-semibold">
                <div className="flex flex-col justify-center items-center">
                  <div>{slot.time.split('-')[0]} - </div>
                  <div>{slot.time.split('-')[1]}</div>
                </div>
              </div>

              {/* Mengisi slot berdasarkan hari */}
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, colIdx) => (
                <div key={`${rowIdx}-${colIdx}`} className="p-0">
                  <div className={`flex flex-col items-center ${slot.classes[colIdx].bgColor}`}>
                    {/* Membuat kotak gambar sama besar dengan kotak jam */}
                    <div className="w-full h-full relative">
                      <img
                        src={slot.classes[colIdx].logo}
                        alt={slot.classes[colIdx].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>

      <div className="text-center text-[32px] mt-12 mb-12">
        <button className="bg-white text-red-600 border-2 border-red-600 w-[376px] h-[85px] px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all">
          BOOK NOW
        </button>
      </div>

      <div className="max-w-[1840px] mx-auto px-8 mt-16">
        {/* Pricing Section */}
        <div className="mt-16">
          <h2 className="text-center text-[64px] font-bold mb-2 text-[#660000]">
            PRICING MEMBERSHIP
          </h2>
          <p className="text-center text-[32px] text-[#660000] mb-6">Select to join</p>
          <br></br>
          <div className="grid grid-cols-1 max-w-[1500px] md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
            {[
              {
                price: "  1.100.000",
                myzone: "/image/class/myzone.png",
                months: 1,
                bonus: "Myzone Heart Rate Tracker +Rp. 688.000,-",
              },
              {
                price: "3.288.000",
                myzone: "/image/class/myzone.png",
                months: 3,
                bonus: "Myzone Heart Rate Tracker +Rp. 588.000,-",
              },
              {
                price: "5.088.000",
                myzone: "/image/class/myzone.png",
                months: 6,
                bonus: "Myzone Heart Rate Tracker +Rp. 488.000,-",
              },
              {
                price: "9.488.000",
                myzone: "/image/class/myzone.png",
                months: 12,
                bonus: "Free Myzone Heart Rate Tracker",
              },
            ].map((plan, idx) => {
              return (
                <div key={idx} className="flex flex-col w-full max-w-xs mx-auto">
                  <div className="bg-menyala-falcon text-white p-4 flex flex-col items-start">
                    <div className="flex items-start w-full">
                      <span className="text-[16px] font-medium mt-2 mr-1">Rp.</span>
                      <span className="text-[45px] font-bold">{plan.price}</span>
                    </div>
                    <div className="text-[16px] text-right w-full mt-0">{plan.months}/month</div>
                  </div>
                  <div className="bg-[#F5F5F5] p-6 rounded-lg shadow">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-2xl mr-2 text-[#660000]">&#9745;</span>
                        <span className="text-justify text-[#660000]">Unlimited Class & Infrared Sauna Access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-2xl mr-2 text-[#660000]">&#9745;</span>
                        <span className="text-justify text-[#660000]">Free Falcon T-Shirt</span>
                      </li>
                      <li className="flex justify-center">
                        <img src={plan.myzone} className="w-20 h-20" alt="MyZone" />
                      </li>
                      <li className="flex items-start">
                        <span className="text-2xl mr-2 text-[#660000]">&#9745;</span>
                        <span className="text-justify text-[#660000]">{plan.bonus}</span>
                      </li>
                    </ul>

                    {/* Tombol View More */}
                    <div className="flex justify-center mt-7">
                      <button className="w-fit bg-white text-red-600 px-6 py-2 rounded-full border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
                        VIEW MORE
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <br></br>

      <div className="w-full max-w-[1799px] mx-auto mt-4"> {/* Tambah mt-16 untuk jarak lebih jauh */}
        <div className="border-t-2 border-[#660000]"></div>
      </div>

      <div className="w-full max-w-[1799px] mx-auto py-8">
        <h2 className="text-[64px] font-bold text-center mb-8 text-[#660000]">
          GET STARTED
        </h2>

        <div className="flex justify-center gap-24 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-0 whitespace-nowrap mb-4">
              <span className="text-[#660000] text-[28px] font-bold mr-2">{step.number}</span>
              <span className="text-[#660000] text-[28px]">{step.title}</span>
            </div>
          ))}
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

export default Near;
