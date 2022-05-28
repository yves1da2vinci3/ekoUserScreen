import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import  ImgLogo   from "../public/images/EkoServices.jpeg"
function FeedBack() {
  return (
    <div className="py-20 bg-blue-700 radius-for-skewed mt-8 bottom-0  absolute w-full">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mb-6 lg:mb-20">
        <div className="mb-6 w-full lg:w-1/5">
          <a className="text-white text-3xl font-bold leading-none" href="#">
            <img
              className="h-12"
              src={ImgLogo}
              alt=""
              width="auto"
            />
          </a>
        </div>
        <div className="mb-5 w-full lg:w-1/5">
          <p className="text-yellow-400 leading-loose">
           votre amenageur foncier
          </p>
        </div>
        <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
            <h5 className="mb-4 font-bold text-gray-50">Bureau</h5>
            <p className="text-yellow-400 leading-loose">
           rivera palmeraie
            </p>
          </div>
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
            <h5 className="mb-4 font-bold text-gray-50">Contacts</h5>
            <p className="text-yellow-400">edithkraba@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-sm text-yellow-400">© 2022. tout droits reservés.</p>
        <div className="flex space-x-2 lg:space-x-4">
          <a href="#">
           <AiOutlineTwitter size={34}  className="text-yellow-600" />
          </a>
          <a href="#">
          <BsFacebook size={34}  className="text-yellow-600" />
          </a>
          <a href="#">
          <AiOutlineInstagram size={34}  className="text-yellow-600" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeedBack