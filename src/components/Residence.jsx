import React from 'react'
import {MdOutlineBedroomParent,MdOutlineGroups} from 'react-icons/md'
import {GiPapers} from 'react-icons/gi'
import image2 from "../public/images/image2.jpeg"
import {GiMoneyStack} from 'react-icons/gi'
import { Link } from 'react-router-dom'
function Residence({field}) {
  const fieldId = field._id

  const fieldLink ="/field/"+ fieldId
  return (
<Link  to={fieldLink}
 className='bg-gray-100 w-96 h-[30rem] rounded drop-shadow-lg p-2 cursor-pointer transform hover:-translate-y-4 hover:transition duration-300' >
  {/* image et location */}
<div className='w-full relative'>
  {/* image */}
<img src={field.imageUrls[0].FileLink} className='h-72 w-full rounded-lg ' />
{/* location */}

</div>
<h1 className='text-blue-400 leading-6 tracking-tight font-bold mt-2'>{field.Localisation}</h1>
<h1 className='text-black-400 leading-6 tracking-8 font-bold mt-8'>{field.MoreInfoLocalisation} </h1>

<div className='flex  w-full gap-x-12 absolute bottom-2 '>

  <div className='flex gap-x-2 items-center'>
<GiMoneyStack color='green'  size={25}/>
<p className='text-gray-500  font-bold tracking-8 '>
{field.OneTimePrice}
</p>
  </div>
 


</div>

</Link>
  )
}

export default Residence