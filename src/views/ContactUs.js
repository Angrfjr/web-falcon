import React from "react";
import InputText from "../components/InputText";

function ContactUs() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-96">
        <img
          src="/image/home/Hero_slide_2.jpg"
          alt="Fitnesswork Contact Us"
          className="object-cover object-center h-full sm:min-w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center h-24 bg-white bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-blue-primary">
            Market Strategy
          </h1>
        </div>
      </div>
      <div>
        <iframe
          title="map"
          src="https://www.google.com/maps/d/u/1/embed?mid=1BLfrcfUk0H2FggTjFXoI0RILoBbTR-o&ehbc=2E312F"
          width="100%"
          height="480"
        />
      </div>

      <div className="container text-blue-primary grid lg:grid-cols-2">
        <div className="my-4 lg:pr-16">
          <div className="py-4 border-b-2 border-neutral-100">
            <h1 className="font-judul text-5xl">FEEL FREE TO ASK US!</h1>
            <p>
              find out more and ask us something to find a solution to your
              problem.
            </p>
          </div>
          <div className="py-4">
          <div className="my-4">
              <div className="inline-flex">
                <i className="icofont-instagram p-2 bg-blue-primary text-white"></i>
                <p className="py-1 px-4 border-2 border-blue-primary">
                <a
                    href="https://www.instagram.com/fitnessworks.id/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                    target="_blank" rel="noreferrer"
                  >
                    fitnessworks.id
                  </a>
                </p>
              </div>
            </div>
            <div className="my-4">
              <div className="inline-flex">
                <i className="icofont-instagram p-2 bg-blue-primary text-white"></i>
                <p className="py-1 px-4 border-2 border-blue-primary">
                  <a
                    href="https://www.instagram.com/fitnessworks.sby.citraland/"
                    target="_blank" rel="noreferrer"
                  >
                    fitnessworks.sby.citraland
                  </a>
                </p>
              </div>
            </div>
            <div className="my-4">
              <div className="inline-flex">
                <i className="icofont-instagram p-2 bg-blue-primary text-white"></i>
                <p className="py-1 px-4 border-2 border-blue-primary">
                  <a
                    href="https://www.instagram.com/fitnessworks.sda.dipo"
                    target="_blank" rel="noreferrer"
                  >
                    fitnessworks.sda.dipo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 py-4">
          <form>
            <div className="grid grid-cols-2 gap-x-4">
              <InputText label="Full Name" type="text" />
              <InputText label="Email" type="email" />
            </div>
            <div className="space-y-6">
              <InputText label="Subject" type="text" />
              <textarea
                className="my-4 p-2 w-full outline-none border border-blue-primary"
                rows="5"
              ></textarea>
              <div className="flex justify-end">
                <button className="border border-blue-primary py-1 px-10 w-1/2 hover:bg-blue-primary hover:text-yellow-primary transition-all duration-300 font-judul tracking-wide">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container border-t-8 border-neutral-100 my-4 py-4 text-blue-primary text-sm">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div>
            <h2 className="font-judul text-2xl">
              Fitnessworks Waterpark Citraland
            </h2>
            <p>
              Kawasan, Jl. Waterpark Boulevard Jl. Citraland Surabaya Lantai LG,
              Made, Sambikerep, Surabaya, East Java 60219
            </p>
            <p>Phone : (031) 99252900</p>
          </div>
          <div>
            <h2 className="font-judul text-2xl">
              Fitnessworks Diponegoro Sidoarjo
            </h2>
            <p>
              Jl. Diponegoro No.85, Kwadengan Timur, Lemahputro, Kec. Sidoarjo,
              Kabupaten Sidoarjo, Jawa Timur 61213
            </p>
            <p>Phone : 087718781888</p>
          </div>
          <div>
            <h2 className="font-judul text-2xl">Fitnessworks Bunder Gresik</h2>
            <p>
              Jln, Banjai Sari, Ambeng Ambeng Watangrejo, Kec. Cerme, Kabupaten
              Gresik, Jawa Timur 61162
            </p>
            <p>Phone : 081334155055</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
