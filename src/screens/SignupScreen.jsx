import React, {useContext, useRef,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { SpinnerCircular } from 'spinners-react'
import dns from '../utils/dns'
import image2 from "../public/images/image2.jpeg"
import {toast} from 'react-toastify'
import emailjs from '@emailjs/browser';
import {SignupContext} from '../context/SignupContext'
function SignupScreen() {
  const {FieldInfo} =  useContext(SignupContext)
  const Navigate =   useNavigate()
  
  const [IsLoading,setIsLoading] = useState(false)
//   const ResidenceInfo = useRecoilValue(SignupAtom)
//   const  Forfeit  = useRecoilValue(ForfeitAtom)
//   console.log(Forfeit)
  const LastNameInput = useRef(null)
  const FirstNameInput = useRef(null)
  const phoneNumberInput = useRef(null)
  const EmailInput = useRef(null)

  const sexInput = useRef(null)
  const   birthDateInput = useRef(null)
  const submitHandler = async (e) => { 
    e.preventDefault()
    setIsLoading(true)
    const templateParams = {
      to_name : "diomadelacorano@gmail.com",
      name:LastNameInput.current.value,
      email:EmailInput.current.value,
      prenoms:FirstNameInput.current.value,
      phoneNumber:phoneNumberInput.current.value,
      sex: sexInput.current.value,
      message: 'RIA 1 /RIA2 ,Environs du quartier chateau Bonoua',
    };
    emailjs.send('service_w838kjy','template_i4y61f5', templateParams, 'AyFzL0yXEHeNeJXaD')
    .then((response) => {
      setIsLoading(false)
      toast.success(` message envoyé avec succes ,ekoServices vous revient bientot !`         , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        });
        Navigate("/")
    }, (err) => {
      toast.error(` il y a un soucis lors de l'envoi !`         , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        });
    });


   
 

   }
  return (
    <section>
    <div className="flex flex-wrap">
      <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
        <div className="max-w-md mx-auto">
          <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">

          </div>
          <div>
            <div className="mb-6 px-3">
              <span className="text-gray-500">Envoi de la requete</span>
              <h3 className="text-2xl font-bold">Engistrement des informatons</h3>
            </div>
            <form   onSubmit={submitHandler} className='bg-white shadow-lg p-8  w-auto  md:w-[35rem] rounded-lg'>
              <div className="flex flex-wrap">
                <div className="mb-3 w-full lg:w-1/2 px-2">
                  <input ref={FirstNameInput}
                    className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="Prenoms"
                  />
                </div>
                <div className="mb-3 w-full lg:w-1/2 px-2">
                  <input ref={LastNameInput}
                    className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="Nom"
                  />
                </div>
               
                
              </div>
              <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                <input ref={phoneNumberInput}
                  className="w-full text-xs bg-gray-50 outline-none"
                  type="text"
                  placeholder="Numero de telephone"
                />
             
              </div>
              <div className="w-full bg-gray-50  p-3 mb-8 md:mb-2">
          <label
            className="block mb-2 text-gray-800 font-medium leading-6"
            htmlFor=""
          >
           selectioner votre sexe
          </label>
          <select  ref={sexInput}
                className="pl-6 pr-10 py-4 bg-gray-50 font-semibold font-heading text-gray-500 border rounded-md w-full"
        
              >
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Feminin</option>
              </select>
        </div>
          
              <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                <input ref={EmailInput}
                  className="w-full text-xs bg-gray-50 outline-none"
                  type="email"
                  placeholder="name@email.com"
                />
                <svg
                  className="h-6 w-6 ml-4 my-auto text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>

              {/* <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                <input ref={passwordInput} 
                  className="w-full text-xs bg-gray-50 outline-none"
                  type="password"
                  placeholder="mot de passe"
                />
                <button>
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div> */}
              <div className="px-3 text-center">
              { IsLoading ? <div className='bg-blue-500 p-3 rounded flex items-center justify-center ' >
            <SpinnerCircular speed={150} size={30} color='white' />
            </div>  :        <input type='submit'
              className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
    value="  S'enregistrer"
           /> }
             
               
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-full lg:w-1/2">
        <div className="absolute inset-0 bg-gray-800 z-10 opacity-50" />
        <img
          className="absolute inset-0 h-full ml-auto object-cover z-0"
          src={ FieldInfo.imageUrls[0].FileLink}
          alt=""
        />
        <div
          className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
          style={{ zIndex: 10 }}
        >
          <h2 className="mb-2 text-2xl text-white font-bold font-heading">
        {FieldInfo.Localisation}
          </h2>
          <div className="max-w-lg mx-auto mb-6">
            <p className="text-gray-300 leading-loose">
            {FieldInfo.MoreInfoLocalisation}
            </p>
          </div>
          {/* <a
            className="inline-block py-2 px-6 rounded-t-xl leading-loose rounded-l-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200"
            href="#"
          >
Visiter la maison
          </a> */}
        
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative w-screen">
          <img
            className="relative mb-4 w-full object-cover"
            src={image2}       
                 alt=""
          />
      
        </div>
        <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
          <h2 className="mb-2 text-2xl font-bold">
          RIA 1 /RIA2
          </h2>
          <p className="mb-6 text-gray-500 leading-loose">
          Environs du quartier chateau Bonoua
          </p>
          {/* <a
            className="inline-block py-2 px-6 rounded-t-xl rounded-l-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200"
            href="#"
          >
Visiter la maison
          </a> */}
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default SignupScreen