import React ,{useContext,useEffect} from 'react'
// import NavBar from '../components/NavBar'
import Header from '../components/Header'
import {ImSearch,ImUserPlus,ImHome,ImFolder} from 'react-icons/im'
import Residence from '../components/Residence'
import FeedBack from '../Layout/FeedBack'
// import SideBar from '../components/SideBar'
import  {useNavigate } from 'react-router-dom'
import axios from 'axios'
import dns from '../utils/dns'
import { useState } from 'react'
import { SpinnerCircular } from 'spinners-react'

// import NavAtom from '../recoil/Atoms/NavAtom'
function HomeScreen() { 
  
  const [Fields,setFields] = useState([])
  const [loading,SetLoading] = useState(true);
  useEffect(() => {
  
    SetLoading(true)
   const FetchFields = async () => {
    try {
      const {data} = await axios.get(` ${dns}/api/fields`,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setFields(data)
      SetLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
   FetchFields()
    },[])
  const navigate = useNavigate()

  const moveToResidences = () => { 
    navigate("/Fields")
   }
  return (
    <div className=' h-auto relative '  >
      {/* <div   onClick={OpenModal} className=' fixed h-20 w-20 rounded-full  flex justify-center items-center bg-blue-600  bottom-4 right-4 z-50 '>
        <ImHome size={30} color='white'  className='text-current text-white ' />
        </div>  */}
  
    {/* <NavBar />
    {NavState ?     <SideBar /> : '' } */}
 
    <Header />
    {/* a propos de nous */}
    <div className='md:h-auto  min-h-screen flex flex-col   md:grid md:grid-cols-2'>
      <div className='bg-white hidden  h-full md:flex items-center justify-center relative'>
   <div className='h-4/6 w-2/3 rounded-r-[4rem] bg-blue-100 shadow-md absolute left-0 top-4 '>
      {/* fond blue */}
   </div>
   <div className='h-4/6 w-2/3 z-10  '>
<img src='https://www.igc-construction.fr/sites/default/files/2020-11/maison-design-avec-terrasse-en-bois.jpg' className='object-fill h-full rounded-r-[4rem] shadow-lg ' />
   </div>
      </div>
     
{/* long speech */}
<div className='flex flex-col p-4 bg-white justify-center gap-y-6' >
<h1 className='text-blue-700 font-semibold text-[2rem]'>A propos de nous</h1>
<p className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight' >Nous sommes ce que vous recherchez en matiere de <span className='text-blue-500 font-bold'> vente de terrains</span> dans la ville d'abidjan et en dehors.</p>

</div>
    </div>


    {/* les maisons */}
    <div className='min-h-screen mt-4 flex flex-col md:justify-center '> 
    <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-center capitalize'> Voici quelques uns de nos<span className='text-blue-500 font-bold'> terrains</span>  </h1>

<div className='flex flex-wrap px-4 relative gap-3 md:justify-center'>
{ loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : (   Fields.map(field => (
              <Residence key={field._id}  field={field} />
            )))}

</div>

<div  onClick={moveToResidences} className="w-72 self-center mt-8  p-4 cursor-pointer">
              <p
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
  
              >
              Continuer
              </p>
            </div>
    </div>
  
    <div  className='h-screen mt-16'>
      {/* give FeedBack */}

<FeedBack />
    </div>
    </div>
  )
}

export default HomeScreen