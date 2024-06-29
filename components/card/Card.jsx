import React from 'react'
import { FaStar } from 'react-icons/fa'
import CardClicks from './CardClicks'
import dateFormat from "dateformat";
import { formatNumber } from '../home/Number'
import DeleteCardIcon from './DeleteCardIcon'
import Image from 'next/image';

export default function Card({ item, isFavorite }) {
    return (
        <div className='w-64 h-[26rem] p-3 rounded-md'>
            <div className='relative poster'>
                <div className="relative">
                    <DeleteCardIcon isFavorite={isFavorite} item={item} />
                    <Image height={100} width={100} src={item?.poster} alt={item?.title[0]} className='relative img w-full h-[23rem] imgObject imgSelectNone rounded' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 rounded detail">
                        <div className="flex flex-col p-2">
                            <div className="flex flex-col gap-2">
                                <h1 className='pt-2 font-bold'>{item?.title[0]} <span className='pl-1'>({dateFormat(item.date, "yyyy")})</span> </h1>
                                <span className='flex gap-0.5 items-center text-sm'> {item?.rating} <FaStar size={18} color='red' className='mx-1' /> ({formatNumber(item?.numreviews)}) </span>
                                <p className='text-sm font-semibold'>Episodes: <span className='text-green-500 font-light'>{item?.episodes}</span></p>
                                <div className='flex justify-between text-sm font-light items-center '>
                                    <p className='font-semibold'>Status: <span className='text-green-500 font-light'>{item?.status}</span></p>
                                    <p className='font-semibold'>Type: <span className='text-green-500 font-light'>{item?.type}</span></p>
                                </div>
                                <p className='text-sm font-light'>{item.description.slice(0, 150) + '...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CardClicks item={item} />
                <div className="flex flex-col gap-2">
                    <h3 className='py-1.5 flex  pl-1 font-light '>{item?.title[0]}</h3>
                </div>
            </div>
        </div>
    )
}
