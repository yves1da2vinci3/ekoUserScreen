import React, {useRef,useState} from 'react'
import  VideoUrl  from '../public/video/video.mp4'
import {BsPlayFill,BsFillPauseFill} from 'react-icons/bs'
function Header() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
      if(playing) {
          videoRef.current.pause();
          setPlaying(false)
      } else {
          videoRef.current.play();
          setPlaying(true)
      }
  }
  return (
    <div className="py-20 md:py-28">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap xl:items-center -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
          {/* <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl">
            Header
          </span> */}
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
          <span className='text-blue-700'>
           Eko services  
           </span>
           , 
           <span  className='text-yellow-500'> Amenageur  Foncier.</span>
          
          </h1>
          {/* <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
            We’re different. Flex is the only saas business platform that lets you
            run your business on one platform, seamlessly across all digital
            channels.
          </p> */}
          <div className="flex flex-wrap mt-2">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4 cursor-pointer">
              <div  onClick={onVideoPress}
                className="inline-block py-5 px-7 text-yellow-300 w-full text-base md:text-lg leading-4 font-medium text-center bg-blue-700 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
          
              >
                {playing ? "mettre pause"  : ' visualiser la démo'}
             
              </div>
            </div>
       
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="relative mx-auto md:mr-0 max-w-max">
            { playing ? "" :   <div       className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer  w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center'  >
             <BsPlayFill   size={36}  color='white'/> 
   
 </div> }

            <div className="relative overflow-hidden rounded-[0.5rem] ">
              <img src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg" />
              <video
              ref={videoRef}
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none"
                poster="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
                muted=""
          
              >
                <source
                  src={VideoUrl}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Header