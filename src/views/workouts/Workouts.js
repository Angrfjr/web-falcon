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
        <h1 className="font-judul text-7xl">CARDIO WORKOUTS</h1>
        <div className="my-4 lg:flex lg:justify-between lg:items-center  lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">MUSCLE FORGE</h2>
              <h2 className="text-2xl font-judul">35 / 25 / 2 / 2</h2>
              <h2 className="text-2xl font-judul">Monday</h2>
              <div className="my-4">
                <p>
                  The primary focus is on building strength, muscle mass, and
                  endurance through targeted resistance training exercises.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK ACCESS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_556.png"
              alt="Fitnesswork"
              className="w-full h-[320px] object-cover object-center"
            />
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">Aerobic Accelerator </h2>
              <h2 className="text-2xl font-judul">
                Lap 1 - 20 / 10 / 3, Lap 2 - 40 / 20 / 1, Lap 3 - 60 / 30 / 1
              </h2>
              <h2 className="text-2xl font-judul">TUESDAY</h2>
              <div className="my-4">
                <p>
                  Segment focused on increasing heart rate and improving
                  cardiovascular endurance through aerobic exercise. In a gym
                  class context, an aerobic accelerator session might involve
                  activities like jumping jacks, high knees, butt kicks,
                  mountain climber and etc, performed in quick succesion with
                  minimal rest periods. The goal is to elevate heat rate, boost
                  metabolism, and enchance overall cardiovascular fitness.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_557.png"
              alt="Fitnesswork"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">Bulletproof</h2>
              <h2 className="text-2xl font-judul">45 / 15 / 1 / 4</h2>
              <h2 className="text-2xl font-judul">Wednesday</h2>
              <div className="my-4">
                <p>
                  Focus on resilience and durability, it aims to make members
                  feel strong, empowered, and capable of handling whatever
                  challenges come their way.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_558.png"
              alt="Fitnesswork"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">Unity</h2>
              <h2 className="text-2xl font-judul">-</h2>
              <h2 className="text-2xl font-judul">Thursday</h2>
              <div className="my-4">
                <p>
                  Workout class is designed to foster cooperation,
                  communication, and camaraderie among members while engaging
                  physical activity. The class also focus on encouraging mutual
                  supports, and achieving common goals through synchronized
                  actions and shared efforts. Overall, it aims to strengthen
                  bonds among members while improving fitness levels.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_559.png"
              alt="Fitnesswork"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">Power Flex Train</h2>
              <h2 className="text-2xl font-judul">40 / 20 / 2 / 2</h2>
              <h2 className="text-2xl font-judul">Friday</h2>
              <div className="my-4">
                <p>
                  The focus is on developing both power and flexibility,
                  resulting in a balanced and functional workout that targets
                  multiple aspects of physical fitness.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_560.png"
              alt="Fitnesswork"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">Energize & Tone</h2>
              <h2 className="text-2xl font-judul">20 / 10 / 4 / 2</h2>
              <h2 className="text-2xl font-judul">Saturday</h2>
              <div className="my-4">
                <p>
                  A combination of cardiovascular exercises to boost energy
                  levels and strength training movement to scupt and define
                  muscles. The class may incorporate dynamic movements,
                  bodyweight exercises, and light resistance training to
                  increase heart rate, burn calories and improve overall muscle
                  tone.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_561.png"
              alt="Fitnesswork"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse transition-all duration-300">
          <div className="px-4 py-4 grid items-center mx-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-judul">Sculpt & Burn</h2>
              <h2 className="text-2xl font-judul">
                Set 1 - 45 work, 15 rest. Set 2 - 40 work, 20 rest. Set 3 - 35
                work, 25 rest. Set 4 - 30 work, 30 rest.
              </h2>
              <h2 className="text-2xl font-judul">Sunday</h2>
              <div className="my-4">
                <p>
                  Focuses on toning muscles while burning & Burn, split in
                  calories to promote overall body sculpting and fat loss.
                  Members will have challenging workout that aims to sculpt
                  their physique while burning calories for a leaner and more
                  toned appereance.
                </p>
              </div>
              <div className="flex justify-center">
                <ButtonLink text="BOOK A CLASS" link="/virtual-class" />
              </div>
            </div>
          </div>
          <div className="lg:max-w-[50%]">
            <img
              src="/image/workouts/Group_562.png"
              alt="Fitnesswork"
              className="w-full object-cover object-center"
            />
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
