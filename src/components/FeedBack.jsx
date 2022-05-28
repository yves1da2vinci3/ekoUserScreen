import React from 'react'

function FeedBack() {
  return (
    <div className="py-20 bg-gray-900 radius-for-skewed mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mb-6 lg:mb-20">
        <div className="mb-6 w-full lg:w-1/5">
          <a className="text-white text-3xl font-bold leading-none" href="#">
            <img
              className="h-12"
              src="https://cdn.worldvectorlogo.com/logos/behance-1.svg"
              alt=""
              width="auto"
            />
          </a>
        </div>
        <div className="mb-5 w-full lg:w-1/5">
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo.
          </p>
        </div>
        <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
            <h5 className="mb-4 font-bold text-gray-50">Office</h5>
            <p className="text-gray-400 leading-loose">
              359 Hidden Valley Road, NY
            </p>
          </div>
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
            <h5 className="mb-4 font-bold text-gray-50">Contacts</h5>
            <p className="text-gray-400">hello@example.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-sm text-gray-400">© 2021. All rights reserved.</p>
        <div className="flex space-x-2 lg:space-x-4">
          <a href="#">
           <AiOutlineTwitter size={34}  className="text-purple-600" />
          </a>
          <a href="#">
          <BsFacebook size={34}  className="text-purple-600" />
          </a>
          <a href="#">
          <AiOutlineInstagram size={34}  className="text-purple-600" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeedBack