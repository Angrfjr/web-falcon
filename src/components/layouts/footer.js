import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  function atas() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="bg-red-900 text-white font-Poppins pt-4 pb-8 text-base">
        <div className="text-center font-BebasNeue tracking-widest text-lg my-2">
          {/* <p><i className="icofont-instagram"></i> Follow US ON @FITNESSWORKS.ID</p> */}
          <p>
            <i className="icofont-instagram"></i>{" "}
            <a
              href="https://www.instagram.com/fitnessworks.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              Follow US ON @FALCON_FITNESSBOX
            </a>
          </p>
        </div>
        <div className="py-4 flex justify-start xl:justify-center overflow-x-auto no-scrollbar">
          <img
            src="/image/Footer/Footer_1.jpg"
            alt="UA Footer"
            className="w-60"
          />
          <img
            src="/image/Footer/Footer_2.jpg"
            alt="UA Footer"
            className="w-60"
          />
          <img
            src="/image/Footer/Footer_3.jpg"
            alt="UA Footer"
            className="w-60"
          />
          <img
            src="/image/Footer/Footer_4.jpg"
            alt="UA Footer"
            className="w-60"
          />
          <img
            src="/image/Footer/Footer_5.jpg"
            alt="UA Footer"
            className="w-60"
          />
          <img
            src="/image/Footer/Footer_6.jpg"
            alt="UA Footer"
            className="w-60"
          />
        </div>
        <div className="container mx-auto font-light">
          <div className="border-b-4 border-white"></div>
          <div className="md:flex md:justify-around items-center lg:items-start">
            <div className="max-w-xs mx-auto md:mx-0 space-y-4 py-4">
              <img
                src="/image/falcon/logo-falcon-footer.png"
                alt="UA Footer"
                className="w-60"
              />
              <p className="text-sm font-extralight">
                Falcon fitness box is a new experience in fitness. We are the
                first Gym & Fitness Centre with technology & time-based
                membership system, in Indonesia. With technology we can provide
                high level facility & activity with low-cost membership plan, so
                everyone can join & begin their fitness journey. it is our
                mission to create fitness for everyone.
              </p>
              <ul className="space-y-4">
                <li>
                  <i className="mr-4 icofont-google-map"></i>View Location
                </li>
                <li>
                  <i className="mr-4 icofont-email"></i> Info@fitnessworks.co.id
                </li>
                <li>
                  <a
                    href="https://wa.me/628179288880"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="mr-4 icofont-brand-whatsapp"></i> 0817 - 9188
                    - 880
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-auto grid md:grid-cols-2 xl:grid-cols-4 md:ml-8 max-w-xs md:max-w-full md:w-full md:mx-0">
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-type  font-black">OUR GYM</h3>
                <p>
                  <Link to="/workouts" onClick={atas}>
                    Workouts
                  </Link>
                </p>
                <p>
                  <Link to="/personal-trainer" onClick={atas}>
                    Personal Trainer
                  </Link>
                </p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-type font-black">COMPANY</h3>
                <p>
                  <Link to="/about" onClick={atas}>
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/fitnessworks-apps" onClick={atas}>
                    Mobile Apps
                  </Link>
                </p>
                <p>
                  <Link to="/" onClick={atas}>
                    Presentation
                  </Link>
                </p>
                <p>
                  <Link to="/#partnership">Partnership</Link>
                </p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-type font-black">STORE</h3>
                <p>
                  <Link to="/fitnessworks-apps" onClick={atas}>
                    Membership
                  </Link>
                </p>
                <p>
                  <Link to="/personal-trainer" onClick={atas}>
                    Training Equipment <br /> & Merchandise
                  </Link>
                </p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-type font-black">GET ASSISTANCE</h3>
                <p>
                  <Link to="/contact-us" onClick={atas}>
                    Help & Contact
                  </Link>
                </p>
                {/* <p>Instagram</p> */}
                <p>
                  <a
                    href="https://www.instagram.com/fitnessworks.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    Instagram
                  </a>{" "}
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100083941751713&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </p>
                <p>Youtube</p>

                <p>
                  <NavLink onClick={scrollToTop} to="/tnc">
                    Term & Condition
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
