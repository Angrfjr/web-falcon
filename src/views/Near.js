import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import { MapPin } from "lucide-react";

function Near() {
  // Data schedule dengan pola acak
  const scheduleData = [
    {
      time: "06:30 - 07:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "07:30 - 08:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "ENERGIZING",
          logo: "/image/class/energiz.png",
          bgColor: "bg-red-800",
        },
        {
          name: "SCULPT",
          logo: "/image/class/sculpt.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "08:30 - 09:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "ENERGIZING",
          logo: "/image/class/energiz.png",
          bgColor: "bg-red-800",
        },
        {
          name: "SCULPT",
          logo: "/image/class/sculpt.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "09:30 - 10:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "ENERGIZING",
          logo: "/image/class/energiz.png",
          bgColor: "bg-red-800",
        },
        {
          name: "SCULPT",
          logo: "/image/class/sculpt.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "15:00 - 16:00",
      classes: [
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },

        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
      ],
    },
    {
      time: "15:00 - 16:00",
      classes: [
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },
        {
          name: "U2PACE",
          logo: "/image/class/pace.png",
          bgColor: "bg-red-800",
        },

        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "17:30 - 18:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "18:30 - 19:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
      ],
    },

    {
      time: "19:30 - 20:30",
      classes: [
        {
          name: "MUSCLE",
          logo: "/image/class/muscle.png",
          bgColor: "bg-red-800",
        },
        {
          name: "AEROBIC",
          logo: "/image/class/aerobic.png",
          bgColor: "bg-red-900",
        },
        {
          name: "BULLETPROF",
          logo: "/image/class/bullet.png",
          bgColor: "bg-red-800",
        },
        {
          name: "UNITY",
          logo: "/image/class/unity.png",
          bgColor: "bg-red-900",
        },
        {
          name: "POWER",
          logo: "/image/class/power_flex.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
        {
          name: "NO CLASS",
          logo: "/image/class/no_class.png",
          bgColor: "bg-red-800",
        },
      ],
    },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-white text-4xl sm:text-7xl">
            find a falcon near you
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

      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-2xl font-bold mb-8">CLASS SCHEDULE</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max border-collapse">
            <thead>
              <tr>
                <th className="p-2 bg-red-950 text-color-red border border-red-900">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="p-2 bg-red-950 text-color-red border border-red-900"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((slot, idx) => (
                <tr key={idx}>
                  <td className="p-2 bg-red-950 text-color-red border border-red-900">
                    {slot.time}
                  </td>
                  {slot.classes.map((classItem, classIdx) => (
                    <td
                      key={`${idx}-${classIdx}`}
                      className="p-1 border border-red-900"
                    >
                      <div
                        className={`${classItem.bgColor} p-8 min-h-[100px] flex flex-col items-center justify-center rounded`}
                      >
                        {classItem.logo ? (
                          <img
                            src={classItem.logo}
                            alt={classItem.name}
                            className="w-16 h-16 object-contain mb-2"
                          />
                        ) : null}
                        <span className="text-white text-sm font-medium">
                          {classItem.name}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8 mb-12">
          <button className="bg-red-600 text-white px-12 py-2 rounded-full hover:bg-red-700 transition-colors">
            BOOK NOW
          </button>
        </div>

        {/* Pricing Section */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold mb-2">
            PRICING MEMBERSHIP
          </h2>
          <p className="text-center mb-8">Select to join</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                price: "1.100.000",
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
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <div className="text-xl font-bold text-white bg-menyala-falcon">
                  Rp {plan.price}
                  <div className="text-right font-normal">
                    {plan.months}/month
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>• Unlimited Class & Infrared Sauna Access</li>
                  <li>• Free Falcon T-Shirt</li>
                  <li>
                    <img src={plan.myzone} class="center"></img>
                  </li>
                  <li>• {plan.bonus}</li>
                </ul>
                <button className="w-full bg-white text-red-600 px-6 py-2 rounded-full border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
                  VIEW MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#660000]">
          GET STARTED
        </h2>
        <div className="flex flex-wrap justify-between gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-[#660000] font-bold">{step.number}</span>
              <span className="text-[#660000]">{step.title}</span>
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
