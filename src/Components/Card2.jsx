import React from 'react'
import image1 from '../assets/image1.avif'

function Card2() {
  return (
    <div className='w-full h-[120px] bg-red-300 p-2'>
      <div className='w-[60%] h-full bg-slate-200 flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg '>
            <img src={image1} alt="" className='object-cover' />
        </div>
        <div>
            <div className='text-lg text-gray-600 font-semibold'>Pancake</div>
            <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Card2
