import React, {useRef,useState,useEffect,useContext} from 'react'
import {BsPlayFill,BsFillPauseFill} from 'react-icons/bs'
import {SignupContext} from '../context/SignupContext'
import {MdLocationPin} from 'react-icons/md'
import {BiLeftArrowAlt} from 'react-icons/bi'
import axios from 'axios'
import dns from '../utils/dns'
import {FaEye} from 'react-icons/fa'
import {Link, useParams} from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import {useNavigate} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {ImCross} from 'react-icons/im'

  

function FieldScreen() {
   const {setFieldInfo} =  useContext(SignupContext)
    //     const  setResidenceInfo = useSetRecoilState(SignupAtom)
//   const  setForfeit = useSetRecoilState(ForfeitAtom)
  //parametrage du carousel
  const [imageIndex, setImageIndex] = useState(0);
  var settings = {
    dots : true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const Navigate = useNavigate()
  const [VisualState,SetVisual] = useState(false)
  const params = useParams()
  const [Field,setField] = useState()
  const [loading,SetLoading] = useState(true);
  const OpenVisual = () =>{
    SetVisual(true)
  } 
  const closeModal = () => { 
    SetVisual(false)
   }
  const moveToSignupPage = () => {

    setFieldInfo(Field)
    // setForfeit(selectInput.current.value)
    Navigate("/signup")
   }
  useEffect(() => {
    SetLoading(true)
   const FetchField = async () => {
    try {
      const {data} = await axios.get(` ${dns}/api/fields/field/${params.IdField}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setField(data)
      console.log(data)
      SetLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
   FetchField()
    },[])
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
  return (<div className='p-2'>
     
  { loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : VisualState ? (
    <div className='h-screen w-screen relative bg-slate-50 flex items-center justify-center'>
  <div className='absolute right-16 top-8 z-50'>
   < ImCross   onClick={closeModal} size={24}  className='hover:text-blue-400 text-current cursor-pointer '  color='text-white'  />
  </div>
  <Slider {...settings}  className='h-[45rem] flex overflow-x-hidden rounded-lg  w-full  z-10' >
  {Field.imageUrls.map( img =>(

  
              <img
              key={img.FileReference}
                className=" rounded-lg  h-[45rem]  w-[27rem] md:w-[32rem] object-contain"
                src={img.FileLink}
              
              />
     
        
       )

       )}
     </Slider>
    </div>
  ): (<div>

   <Link  to="/fields"
     className='bg-blue-500 shadow-md cursor-pointer  hover:bg-blue-800 ml-8 w-16 h-16 rounded-lg flex items-center justify-center mb-3 '>
<BiLeftArrowAlt  size={38} color='white' />
  </Link>
<div className="container mx-auto px-4">
 <div className="flex flex-wrap -mx-4 mb-24">
   <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
     <div className="relative mb-10" style={{ height: 564 }}>
     <div       onClick={onVideoPress} className='absolute top- z-40 cursor-pointer  -bottom-5 -left-5 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center'  >
    { playing ? <BsFillPauseFill   size={24}  color='white'/> :       <BsPlayFill   size={24}  color='white'/> }

</div>
<video
           ref={videoRef}
             className="h-full w-full object-fill"
             poster={Field?.imageUrls[0].FileLink}
             muted=""
       
           >
             <source
               src={Field.videoUrl.FileLink }
               type="video/mp4"
             />
           </video>
 
     </div>
     <div className="flex flex-wrap -mx-2">
       {Field.imageUrls.map( img =>(
            <div key={img.FileReference} className="w-1/2 sm:w-1/4 p-2">
            <a className="block border border-blue-300" >
              <img
                className="w-full h-32 object-cover"
                src={    img.FileLink                 }
              
              />
            </a>
          </div>
       )

       )}
     <div  onClick={OpenVisual} className='flex w-96 h-[4.5rem] self-center bg-white cursor-pointer hover:bg-blue-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
     <FaEye  size={28} color="black" />
     <p className='text-lg tracking-tight font-semibold'>Avoir un apercu</p>
          </div>
   
     </div>
   </div>
   <div className="w-full md:w-1/2 px-4">
     <div className="lg:pl-20">
       <div className="mb-10 pb-10 border-b">
         <div className='flex gap-x-2 items-center'>
         <MdLocationPin size={36} color="red" />
         <span className="text-gray-500 text-lg">{Field.Localisation}</span>
         </div>
         <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading tracking-tighter">
      {Field.MoreInfoLocalisation}
         </h2>
         <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-500">
           <span>   500m2</span> 
         </p>
         

         
     
         <p className="max-w-md text-gray-500 text-lg font-bold">
           prix en une fois  :  {Field.OneTimePrice}
        
         </p>
         <p className="max-w-md text-gray-500 text-lg font-bold">
         prix echeloné :  {Field.StepPrice}
         </p>
       </div>
  
       <div className="flex flex-wrap -mx-4 mb-14 items-center">
         <div className="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
        <div onClick={moveToSignupPage}
             className="block bg-blue-500 cursor-pointer hover:bg-blue-500 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
           >
         Vailder inscription
           </div>  
         
         </div>
                </div>
    
     </div>
   </div>
 </div>
 
</div>
  </div>  )}

</div>

  )
}

export default FieldScreen