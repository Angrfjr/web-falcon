import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

function Home() {
  return (
    <div>
      {/* <div className="flex justify-center lg:max-h-screen overflow-hidden">
        <video
          className="object-cover object-right min-w-min lg:min-w-full"
          loop
          autoPlay
          muted
        >
          <source src="/video/VideoBannerUA.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/falcon/bg-home-about.png"
          alt="Falcon Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30"></div>
        <div className="container absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-7xl mx-auto text-white text-center">
          <img
            src="./image/falcon/logo-falcon-home-video.png"
            alt="Falcon"
            className="w-full max-w-3xl"
          />
          <br></br>
          <p className="text-2xl">
            Introducing Falcon Fitness Box, where science meets nightlife for an
            unparalleled workout experience. Our cutting-edge fitness studio
            leverages unique heart rate tracking technology to ensure you
            achieve faster, safer results.
          </p>
          <br></br>
          <p className="text-2xl">
            Imagine breaking a sweat under dynamic lighting effects and
            heart-pumping music, all set within a vibrant nightclub atmosphere.
            Perfect for fitness enthusiasts and tech-savvy individuals alike,
            our innovative approach not only makes working out effective but
            also incredibly fun. Join us at Falcon Fitness Box to transform your
            fitness journey with the perfect blend of science and excitement.
          </p>

          <button className="border  px-4 py-1 my-4">VIEW MORE</button>
        </div>
      </div>
      <div className="3xl:container bg-red-falcon px-0 md:max-h-96 relative overflow-hidden object-fill md:flex">
        <div className="text-white w-full max-w-xl min-h-[13rem] relative md:static">
          <div className="absolute mx-8 xl:ml-12 z-20 grid items-center h-full">
            <div className="container">
              <p className="text-5xl">PRE-SALE STARTS OCTOBER 2024</p>
              <div className="text-red-primary my-4">
                <ButtonLink
                  text="MORE INFO"
                  link="/form-free-trial"
                  className="text-color"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-b md:bg-gradient-to-r"></div>
          <img
            src="./image/falcon/bg-home-presale.png"
            alt="falcon"
            className="object-cover object-center w-full h-full md:ml-auto max-w-8xl"
          />
        </div>
      </div>
      {/* <div className="pt-6">
        <h2 className="font-judul text-center text-blue-primary text-5xl my-4">
          OUR PROGRAM
        </h2>
        <div className="bg-ref-falcon flex flex-col max-w-max mx-auto">
          <div className="relative bg-red-falcon">
            <div className="relative h-screen md:h-1/2 xl:h-1/3">
              <img
                src="/image/personal_trainer/PT2.jpg"
                alt="Fitnesswork"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
            </div>
            <div className="xl:absolute top-0 bottom-0 left-0 right-0">
              <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
                <div className="mr-8">
                  <h2 className="font-judul text-2xl text-yellow-primary mb-4">
                    PROFESSIONAL PERSONAL TRAINER
                  </h2>
                  <p>
                    If you want real result, progressive and personalised
                    exercise, we recommend you to choose this program. Our
                    professional Personal Trainer will guide you to your body
                    goals. Want to know more? Click View More
                  </p>
                </div>
                <div className="min-w-fit flex items-end">
                  <ButtonLink text="VIEW MORE" link="/personal-trainer" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-blue-primary">
            <div className="relative h-72 xl:h-full">
              <img
                src="/image/home/Photo_classes.jpg"
                alt="Fitnesswork"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
            </div>
            <div className="xl:absolute top-0 bottom-0 left-0 right-0">
              <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
                <div className="mr-8">
                  <h2 className="font-judul text-2xl text-yellow-primary mb-4">
                    FUN FITNESS CLASS WITH CERTIFIED INSTRUCTOR
                  </h2>
                  <p>
                    If you like group exercise, fun, and various activities then
                    you should booking our class. Know more our classes based on
                    your fitness goals, click link on the right
                  </p>
                </div>
                <div className="min-w-fit flex items-end">
                  <ButtonLink text="VIEW MORE" link="/workouts" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-blue-primary">
            <div className="relative h-72 xl:h-full">
              <img
                src="/image/home/News_Example_2.jpg"
                alt="Fitnesswork"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
            </div>
            <div className="xl:absolute top-0 bottom-0 left-0 right-0">
              <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
                <div className="mr-8">
                  <h2 className="font-judul text-2xl text-yellow-primary mb-4">
                    ONLINE WORKOUTS
                  </h2>
                  <p>
                    Didn’t have access to nearby gym ? Worry no more! With our
                    online class, you can choose exercise You want. Exercise
                    everywhere, stay safe, stay fun and Stay healthy. Get the
                    membership Now !
                  </p>
                </div>
                <div className="min-w-fit flex items-end">
                  <ButtonLink text="VIEW MORE" link="/online-class" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-blue-primary">
            <div className="relative h-72 xl:h-full">
              <img
                src="/image/home/Photo_pt.jpg"
                alt="Fitnesswork"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
            </div>
            <div className="xl:absolute top-0 bottom-0 left-0 right-0">
              <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
                <div className="mr-8">
                  <h2 className="font-judul text-2xl text-yellow-primary mb-4">
                    On-demand Video
                  </h2>
                  <p>
                    Did you have crowded schedule? Need a flexible time to
                    exercise yet still got the progress you want ? subscribe to
                    our online streaming! exercise anytime, anywhere with
                    professional guidance.
                  </p>
                </div>
                <div className="min-w-fit flex items-end">
                  <ButtonLink text="VIEW MORE" link="/on-demand" />
                </div>
              </div>
            </div>
          </div>
      </div>
      </div> */}
      <div className="md:flex md:justify-center md:items-center my-4">
        <div>
          <img
            src="/image/falcon/falcon-app.png"
            alt="Mobile App Fitness Works"
            className="md:max-w-md lg:max-w-lg mx-auto"
          />
        </div>
        <div className="text-center text-blue-primary py-8 md:max-w-3xl">
          <h2 className="text-color-red font-BebasNeue text-4xl mb-4">
            SUPPORTING YOU EVERY STEP OF THE WAY
          </h2>
          <p>
            with contactless entry, access to your training journey, challenges,
            class schedules, community platform and so much more
          </p>
          <div className="flex justify-center">
            <ButtonLink text="VIEW MORE" link="/fitnessworks-apps" />
          </div>
        </div>
        <div>
          <img
            src="/image/falcon/falcon-tv.png"
            alt="Mobile App Fitness Works"
            className="md:max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center my-4">
        <div className="text-center mb-4">
          <p className="text-color-red font-BebasNeue text-4xl mb-4">JOIN TODAY & GET A FREE HEART RATE TRACKER</p>
          <p>
            Find a heart rate monitor that makes your members feel comfortable
            by utilizing live feedback in the gym, Encouraging the Myzone Effort
            Point challenge, and rewarding individuals over the years.
          </p>
        </div>
        <div className="w-full max-w-lg lg:max-w-5xl">
          <img
            src="/image/falcon/falcon-heart-rate-flow.png"
            alt="Mobile App Fitness Works"
            className="w-full"
          />
        </div>
      </div>
      <div className="py-8">
        {/* <div className="relative py-10 text-center text-blue-primary font-BebasNeue font-black">
          <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <h1 className="text-5xl">PRICING PLAN</h1>
          </div>
        </div> */}
        <div className="lg:flex justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-menyala-falcon text-blue-primary text-center">
              <h1 className="text-wite text-4xl py-4 font-BebasNeue tracking-wider">
                PRESALE
              </h1>
            </div>
            <div className="text-color-red bg-neutral-100 p-6">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">
                FREE HEART RATE <br />
                TRACKER (MYZONE)
              </h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">
                START FROM
              </h1>
              <div className="flex pb-4">
                <p>RP</p>
                <p className="text-4xl font-black mx-2">9.488.000</p>
                <p className="mt-auto"> / 12 Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Check in start
                  from 06.00 WIB
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free Access All
                  Class
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Get Gym Bag
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free 3 sessions
                  with <br />
                  Personal Trainer
                </p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-red-falcon text-yellow-primary text-center">
              <h1 className="text-wite text-4xl py-4 font-BebasNeue font-black tracking-wider">
                PRESALE
              </h1>
            </div>
            <div className="text-color-red bg-neutral-100 p-6">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8"></h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">
                START FROM
              </h1>
              <div className="flex pb-4">
                <p>RP</p>
                <p className="text-4xl font-black mx-2">5.088.000</p>
                <p className="mt-auto"> / 6 Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Check in start
                  from 15.00 WIB
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free Access All
                  Class
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Get Gym Bag
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free 3 sessions
                  with <br />
                  Personal Trainer
                </p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-red-falcon text-blue-primary text-center">
              <h1 className="text-wite text-4xl py-4 font-BebasNeue tracking-wider">
                PRESALE
              </h1>
            </div>
            <div className="text-color-red bg-neutral-100 p-6">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8"></h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">
                START FROM
              </h1>
              <div className="flex pb-4">
                <p>RP</p>
                <p className="text-4xl font-black mx-2">3.288.000</p>
                <p className="mt-auto"> / 3 Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Check in start
                  from 06.00 WIB
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free Access All
                  Class
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Get Gym Bag
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free 3 sessions
                  with <br />
                  Personal Trainer
                </p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-red-falcon text-yellow-primary text-center">
              <h1 className="text-wite text-4xl py-4 font-BebasNeue font-black tracking-wider">
                PRESALE
              </h1>
            </div>
            <div className="text-color-red bg-neutral-100 p-6">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8"></h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">
                START FROM
              </h1>
              <div className="flex pb-4">
                <p>RP</p>
                <p className="text-4xl font-black mx-2">1.100.000</p>
                <p className="mt-auto"> / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Check in start
                  from 15.00 WIB
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free Access All
                  Class
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Get Gym Bag
                </p>
                <p className="-indent-8">
                  <span className="text-2xl mr-2">&#9745;</span> Free 3 sessions
                  with <br />
                  Personal Trainer
                </p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-blue-primary">
        <h1 className="font-judul text-center text-6xl">LATEST BLOG POSTS</h1>
        <div className="container mx-auto md:flex md:flex-wrap md:justify-center">
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link to="/article">
              <img
                src="/image/article/news3.png"
                alt="LATEST BLOG POSTS"
                className="object-cover object-center min-w-min mx-auto max-h-72"
              />
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">
                  5 hal yang perlu kamu siapkan sebelum pertama kali pergi ke
                  gym?
                </h2>
                <p className="font-judul">
                  Buat kamu yang pertama kali melakukan sesuatu biasanya
                  mengalami kebingungan dan keraguan. Apalagi ...{" "}
                </p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link to="/article">
              <img
                src="/image/article/news1.png"
                alt="LATEST BLOG POSTS"
                className="object-cover object-center min-w-min mx-auto max-h-72"
              />
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">
                  Apa penyebab lemak perut
                </h2>
                <p className="font-judul">
                  Lemak perut memang menjengkelkan. Apalagi kalau sudah merusak
                  penampilan dan jadi membatasi ruang ...{" "}
                </p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link to="/article">
              <img
                src="/image/article/news5.png"
                alt="LATEST BLOG POSTS"
                className="object-cover object-center min-w-min mx-auto max-h-72"
              />
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">
                  Program diet untuk turunkan berat badan
                </h2>
                <p className="font-judul">
                  Terkadang untuk menurunkan berat badan, olahraga saja tidak
                  cukup. Beberapa orang, mungkin ...{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
