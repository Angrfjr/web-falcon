import React, { useState } from 'react'
import InputText from '../InputText'

function LayoutAuth() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function login(el) {
    el.preventDefault()
    console.log(inputs);
  }
  function singup(el) {
    el.preventDefault()
    console.log(inputs);
  }

  function changeForm(params) {
    params.preventDefault();
    var login = document.querySelector('#login');
    var singup = document.querySelector('#singup');
    login.classList.toggle('hidden');
    singup.classList.toggle('hidden');
  }

  return (
    <div>
      <div className="min-h-screen text-blue-primary h-screen flex justify-center relative">
        <img src="/image/inves/Header_Kemitraan.jpg" alt="Login" className="h-full w-full object-cover object-center" />

        <div id='login' className="
          bg-white bg-opacity-80 h-5/6 w-10/12 rounded-md absolute mt-4 p-8
          md:right-0 md:top-0 md:bottom-0 md:rounded-none md:mt-0 md:h-full md:max-w-md
        ">
          <h2 className="font-judul text-4xl text-center">Log in to your Account</h2>
          <div className="my-8">
            <form onSubmit={login}>
              <div className="py-2">
                <InputText label="Email" type="email" name="email" id="email"
                value={inputs.email || ''} 
                onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <InputText label="Password" type="password" name="password" 
                  value={inputs.password || ''} 
                  onChange={handleChange} 
                />
              </div>
              <div className="py-1 flex items-center">
                <input type="checkbox" value="true" className="w-4 h-4"/>
                <label className="text-xs pl-2">I’VE READ AND AGREE TO DATA PRIVACY POLICY.</label>
              </div>
              <div className="my-4">
                <button type='submit' className="border border-blue-primary py-1 w-full hover:bg-yellow-primary transition-all duration-300">Log in</button>
              </div>
              <div className="mt-8 text-sm flex space-x-2">
                <p>Don’t have an account ? </p><button onClick={changeForm}>Sign up</button>
              </div>
            </form>
          </div>
        </div>

        <div id='singup' className="hidden
          bg-white bg-opacity-80 h-5/6 w-10/12 rounded-md absolute mt-4 p-8
          md:right-0 md:top-0 md:bottom-0 md:rounded-none md:mt-0 md:h-full md:max-w-md
        ">
          <h2 className="font-judul text-4xl text-center">Sign Up</h2>
          <div className="my-8">
            <form onSubmit={singup}>
              <div className="py-2">
                <InputText label="Email" type="email" name="email" id="email"
                value={inputs.email || ''} 
                onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <InputText label="Phone" type="phone" name="phone" id="phone"
                value={inputs.phone || ''} 
                onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <InputText label="Password" type="password" name="password" 
                  value={inputs.password || ''} 
                  onChange={handleChange} 
                />
              </div>
              <div className="py-1 flex items-center">
                <input type="checkbox" value="true" className="w-4 h-4"/>
                <label className="text-xs pl-2">I’VE READ AND AGREE TO DATA PRIVACY POLICY.</label>
              </div>
              <div className="my-4">
                <button type='submit' className="border border-blue-primary py-1 w-full hover:bg-yellow-primary transition-all duration-300">Sing Up</button>
              </div>
              <div className="mt-8 text-sm flex space-x-2">
                <p>Don’t have an account ? </p><button onClick={changeForm}>Login</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LayoutAuth