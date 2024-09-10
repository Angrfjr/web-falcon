import React from 'react'

function MembershipForm() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-72">
        <img src="/image/inves/Header_Kemitraan.jpg" alt="Fitnesswork Presentation" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center h-24 bg-white bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-blue-primary">Membership Form</h1>
        </div>
      </div>

      <div className="container text-blue-primary my-6">
        <h1 className="font-judul text-5xl">Membership Form</h1>
        <div className="grid content-center px-4 py-4 z-10 font-Futura" 
          // style={polygon}
        >
          <div className="">
            <form action="" method="">
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">First Name</span>
                  <input name="firstName" type="text"
                  value=""
                  placeholder="First Name"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">Last Name</span>
                  <input name="lastName" type="text"
                  value=""
                  placeholder="Last Name"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">Date of Birth</span>
                  <input name="birth" type="text"
                  value=""
                  placeholder="Date of Birth"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">Email</span>
                  <input name="email" type="text"
                  value=""
                  placeholder="email"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">Mobile Number</span>
                  <input name="number" type="text"
                  value=""
                  placeholder="Mobile Number"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">City</span>
                  <input name="city" type="text"
                  value=""
                  placeholder="City"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">Addres</span>
                  <input name="addres" type="text"
                  value=""
                  placeholder="Addres"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              
              <div className="mx-2 my-8 pt-8 text-center">
                <button className="py-2 px-10 border border-blue-primary hover:bg-yellow-primary transition-all duration-300" type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MembershipForm