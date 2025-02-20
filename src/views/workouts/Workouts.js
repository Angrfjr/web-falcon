import React from "react";
import ButtonLink from "../../components/ButtonLink";

function Workouts() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/workouts/header_ourprogram.png"
          alt="Fitnesswork Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[50vh]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-white text-4xl sm:text-7xl">PROGRAMS</h1>
        </div>
      </div>

      <div className="xl:container mx-auto text-blue-primary text-left py-8 text-base">
        <div className="container mx-auto py-8">
          <h1 className="text-7xl font-judul text-blue-primary mb-8">CARDIO WORKOUTS</h1>

          {/* Wrapper untuk 7 kotak */}
          <div className="grid gap-6">
            {[
              {
                title: "MUSCLE FORGE",
                schedule: "35 / 25 / 2 / 2",
                day: "Monday",
                description:
                  "The primary focus is on building strength, muscle mass, and endurance through targeted resistance training exercises.",
                img: "/image/workouts/Group_556.png",
              },
              {
                title: "Aerobic Accelerator",
                schedule: "Lap 1 - 20 / 10 / 3, Lap 2 - 40 / 20 / 1, Lap 3 - 60 / 30 / 1",
                day: "Tuesday",
                description:
                  "In a gym class context, an aerobic accelerator session might involve activities like jumping jacks, high knees, butt kicks, mountain climber and etc, performed in quick succesion with minimal rest periods. The goal is to elevate heat rate, boost metabolism, and enchance overall cardiovascular fitness.",
                img: "/image/workouts/Group_557.png",
              },
              {
                title: "Bulletproof",
                schedule: "45 / 15 / 1 / 4",
                day: "Wednesday",
                description:
                  "Focus on resilience and durability, it aims to make members feel strong, empowered, and capable of handling whatever challenges come their way.",
                img: "/image/workouts/Group_558.png",
              },
              {
                title: "Unity",
                schedule: "-",
                day: "Thursday",
                description:
                  "Workout class is designed to foster cooperation, communication, and camaraderie among members while engaging physical activity. The class also focus on encouraging mutual supports, and achieving common goals through synchronized actions and shared efforts.",
                img: "/image/workouts/Group_559.png",
              },
              {
                title: "Power Flex Train",
                schedule: "40 / 20 / 2 / 2",
                day: "Friday",
                description:
                  "The focus is on developing both power and flexibility, resulting in a balanced and functional workout that targets multiple aspects of physical fitness.",
                img: "/image/workouts/Group_560.png",
              },
              {
                title: "Energize & Tone",
                schedule: "20 / 10 / 4 / 2",
                day: "Saturday",
                description:
                  "A combination of cardiovascular exercises to boost energy levels and strength training movement to scupt and define muscles. The class may incorporate dynamic movements, bodyweight exercises, and light resistance training to increase heart rate, burn calories and improve overall muscle tone.",
                img: "/image/workouts/Group_561.png",
              },
              {
                title: "Sculpt & Burn",
                schedule:
                  "Set 1 - 45 work, 15 rest. Set 2 - 40 work, 20 rest. Set 3 - 35 work, 25 rest. Set 4 - 30 work, 30 rest.",
                day: "Sunday",
                description:
                  "Focuses on toning muscles while burning & Burn, split in calories to promote overall body sculpting and fat loss. Members will have challenging workout that aims to sculpt their physique while burning calories for a leaner and more toned appereance.",
                img: "/image/workouts/Group_562.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white w-auto overflow-hidden items-stretch"
              >
                {/* Bagian Gambar */}
                <div className="w-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Bagian Keterangan */}
                <div className="flex-1 flex flex-col justify-between h-full px-6">
                  <div>
                    <h2 className="text-3xl text-white text-opacity-100 inline-block font-judul mb-4 bg-[#530202] p-4 rounded">
                      {item.title}
                    </h2>

                    <p className="text-lg text-[#530202] mb-4">{item.schedule}</p>
                    <p className="text-lg font-semibold text-[#530202] mb-4">{item.day}</p>
                    <p className="text-gray-600 mt-4">{item.description}</p>
                  </div>

                  {/* Tombol di Bawah */}
                  <div className="mt-auto">
                    <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
                  </div>
                </div>

              </div>




            ))}
          </div>
        </div>

      </div>


      <div className="my-4 lg:flex lg:justify-between lg:items-center transition-all duration-300">
        <div className="px-4 py-4 grid items-center mx-auto">
          <div className="max-w-xl">
            <h2 className="text-4xl font-judul">U2pace academy</h2>
            <div className="my-4">
              <p>
                Experience the thrill of cycling with Falcon Cycling club, where
                every pedal stroke is fueled by excitement and community. We
                welcome cyclists of all levels to join our energetic group rides
                that make every ride memorable. Become part of a supportive
                community that inspires you to ride further, faster, and with
                more joy than ever before.
              </p>
            </div>
            <div className="flex justify-center">
              <ButtonLink text="VIEW MORE" link="/virtual-class" />
            </div>
          </div>
        </div>
        <div className="lg:max-w-[50%]">
          <img
            src="/image/workouts/Group_553.png"
            alt="Fitnesswork"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="my-4 lg:flex lg:justify-between lg:items-center transition-all duration-300">
        <div className="px-4 py-4 grid items-center mx-auto">
          <div className="max-w-xl">
            <h2 className="text-4xl font-judul">Falcon Cycling Club</h2>
            <div className="my-4">
              <p>
                Your ultimate pathway to peak performance and personal
                excellence. Tailored specifically to meet your unique fitness
                goals, our program offers one-on-one coaching sessions designed
                to enhance your strength, agility, and endurance.
              </p>
            </div>
            <div className="flex justify-center">
              <ButtonLink text="VIEW MORE" link="/virtual-class" />
            </div>
          </div>
        </div>
        <div className="lg:max-w-[50%]">
          <img
            src="/image/workouts/Group_554.png"
            alt="Fitnesswork"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="my-4 lg:flex lg:justify-between lg:items-center transition-all duration-300">
        <div className="px-4 py-4 grid items-center mx-auto">
          <div className="max-w-xl">
            <h2 className="text-4xl font-judul">Falcon Running Club</h2>
            <div className="my-4">
              <p>
                Get ready for an exciting group running experience with Falcon
                Run Club! Build your speed, strength, and endurance with our
                guided sessions, no matter your level. From run/walkers to
                seasoned runners, everyone is welcome!
              </p>
            </div>
            <div className="flex justify-center">
              <ButtonLink text="VIEW MORE" link="/virtual-class" />
            </div>
          </div>
        </div>
        <div className="lg:max-w-[50%]">
          <img
            src="/image/workouts/Group_555.png"
            alt="Fitnesswork"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Workouts;
