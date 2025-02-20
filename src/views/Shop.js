import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

function Shop() {
  const currency = new Intl.NumberFormat(["id"]);

  const [getDuration] = useState([
    { id: 1, month: "12 Month", rp: 318 },
    { id: 2, month: "6 Month", rp: 318 },
    { id: 3, month: "3 Month", rp: 318 },
    { id: 4, month: "1 Month", rp: 318 },
  ]);

  const [getPt] = useState([
    { id: 1, session: "60", rp: 600000 },
    { id: 2, session: "24", rp: 600000 },
    { id: 3, session: "12", rp: 600000 },
    { id: 4, session: "6", rp: 600000 },
  ]);

  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/home/shop/nav_shop.png"
          alt="Fitnesswork Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[50vh]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-white text-4xl sm:text-7xl">SHOP</h1>
        </div>
      </div>

      {/* <div className="lg:grid lg:grid-cols-2">
        <div className="bg-neutral-100 text-yellow-primary hover:bg-yellow-primary hover:text-blue-primary transition-all duration-300">
          <h2 className="font-judul text-4xl text-center py-4">EARLY RiSER</h2>
        </div>
        <div className="bg-neutral-100 text-blue-primary hover:bg-blue-primary hover:text-yellow-primary transition-all duration-300 border-t-4 lg:border-t-0 border-neutral-400 lg:border-l-4">
          <h2 className="font-judul text-4xl text-center py-4">NIGHT OWL</h2>
        </div>
      </div> */}

      {/* <div className="container grid lg:grid-cols-2 my-4 text-blue-primary">
        <div className="max-w-sm mx-auto my-4 w-full">
          <h2 className="font-judul text-2xl">TIPE MEMBERSHIP</h2>
          <p>Pilih Gym akses membership anda</p>
          <select className="w-full my-2 py-1 px-2">
            <option value="" key="">Akses Gym</option>
            <option value="1" key="1">All Clubs</option>
            <option value="2" key="2">Singel Clubs</option>
          </select>
          <select className="w-full my-2 py-1 px-2">
            <option value="" key="">Clubs</option>
            <option value="1" key="1">Club FW</option>
            <option value="2" key="2">FW Clubs</option>
          </select>
        </div>
        <div></div>
        <div className="max-w-sm mx-auto my-4">
          <h2 className="font-judul text-2xl">KATEGORI MEMBERSHIP</h2>
          <p>Pilih kategori akses gym pada membership anda</p>
          <select className="w-full my-2 py-1 px-2">
            <option value="" key="">Kategory Akses</option>
            <option value="1" key="1">12 Hours / Week</option>
            <option value="2" key="2">24 Hours / Week</option>
            <option value="3" key="3">36 Hours / Week</option>
            <option value="4" key="4">Unlimited</option>
          </select>
        </div>
        <div></div>
      </div> */}

      {/* <div className="container text-blue-primary">
        <div className="py-2">
          <h2 className="font-judul text-2xl">Durasi Membership</h2>
          <p>Pilih jangka waktu membership anda</p>
          <div className="flex my-4 overflow-x-auto no-scrollbar">
            {
              getDuration.map((duration) => {
                return (
                  <div key={duration.id}>
                    <div className="w-44 mx-2">
                      <div className="bg-blue-primary text-yellow-primary text-center py-1">
                        <h3 className="font-judul text-2xl">{duration.month}</h3>
                      </div>
                      <div className="bg-neutral-100">
                        <div className="flex justify-center py-6">
                          <p>RP</p><p className="text-4xl font-black">{duration.rp}.</p><p className="mt-auto">000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="py-2">
          <h2 className="font-judul text-2xl">PERSONAL TRAINER</h2>
          <p>Dapatkan session personal trainer</p>
          <div className="flex my-4 overflow-x-auto no-scrollbar">
            {
              getPt.map((pt) => {
                return (
                  <div key={pt.id}>
                    <div className="w-44 mx-2">
                      <div className="bg-blue-primary text-yellow-primary text-center py-1">
                        <h3 className="font-judul text-2xl">{pt.session} Session</h3>
                      </div>
                      <div className="bg-neutral-100">
                        <div className="grid grid-cols-2 py-6 text-center">
                          <div>
                            <i className="icofont-wall-clock text-3xl"></i><br/>
                            <span>60<br/> Minutes</span>
                          </div>
                          <div>
                            <i className="icofont-list text-3xl"></i><br/>
                            <span>{pt.session}<br/> Session</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-primary text-white py-1 flex justify-center">
                      <p className="text-xs">Rp</p><h3 className="font-judul text-2xl">{currency.format(pt.rp)}</h3>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex justify-center py-4">
          <Link to="/confirm">
            <button className="border-2 border-blue-primary px-10 py-2 hover:bg-yellow-primary transition-all duration-300">CONTINUE</button>
          </Link>
        </div>
      </div>
       */}
      <div className="bg-white">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 container mx-auto my-4">
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/clothes.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              {/* <p className="text-color-red text-center">T-FALCON</p>
              <p className="text-color-red text-center">Rp. 50.000</p>
              <div className="flex justify-center">
                <ButtonLink text="CHECK OUT" link="weight-lost" />
              </div> */}
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  T-FALCON
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/boottle.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  Falcon Drink Bottle
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/tweltll.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  TOWEL
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
              {/* <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div> */}
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/clothes_2.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  Falcon crewneck
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/watch.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  MZ-3 Heart rate monitor
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/myzone.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  MZ-Switch Heart rate monitor
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/bag.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  F-GYM BAG
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img
                src="/image/home/shop/hat.png"
                alt="Shop"
                className="max-w-xs mx-auto"
              />
              <div className="space-y-2 mt-3 mb-4">
                <h3 className="text-[#530202] text-xl font-semibold text-center">
                  Falcon CAP
                </h3>
                <p className="text-red-700 text-lg font-medium text-center">
                  Rp. 50.000
                </p>
              </div>

              <div className="relative">
                <button className="w-full bg-white text-red-700 font-semibold py-2 px-6 rounded-full border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>CHECK OUT</span>
                </button>
              </div>
            </div>
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

export default Shop;
