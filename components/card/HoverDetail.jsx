import React from 'react'

export default function HoverDetail() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 rounded detail">
                        <div className="flex flex-col p-2">
                            <div className="flex flex-col gap-2">
                                <h1 className='pt-2 font-bold'>One Piece <span className='pl-1'>(2023)</span> </h1>
                                <span className='flex gap-0.5 items-center text-sm'> 4.9 <FaStar size={18} color='red' className='mx-1' /> (2.2k) </span>
                                <span className='text-sm'>Episodes: 23</span>
                                <div className='flex justify-between text-sm font-light items-center '>
                                    <span>Status: Current</span>
                                    <span>Type: Tv</span>
                                </div>
                                <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente rerum reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas...</p>
                            </div>
                            <CardClicks item={item} />
                        </div>
                    </div>
    </>
  )
}
