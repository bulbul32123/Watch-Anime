import React from 'react'
import CardButtons from './CardButton'
import { formatNumber } from '../home/Number'
export default function CardDetails({ item, setShowVideo, setVideoId, setShowCardDetail, showCardDetail }) {
    const hideCardDetail = () => {
        setShowCardDetail(false)
    }
    return (
        <>
            <div className={`CardDetailPopup ${showCardDetail ? "visible" : " hidden"}`}>
                <div className="opacityLayer" onClick={hideCardDetail}></div>
                <div className="detail relative overflow-x-hidden no-scrollbar">
                    <span className="closeBtn" onClick={hideCardDetail}>
                        Close
                    </span>
                    <div className='flex flex-col gap-2 h-full w-full'>
                        <img src={item?.banner} alt={item?.title[0]} className='w-full h-[13rem] md:h-60 object-cover object-center pointer-events-none select-none' />
                        <div className="flex justify-between pr-4 h-full w-full">
                            <div className="flex items-start flex-col mt-2.5 ml-2 pl-3 h-full w-full">
                                <div className="flex flex-wrap justify-between w-full">
                                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold '>{item?.title[0]}</h1>
                                    <div className="flex items-center">
                                        <CardButtons setShowVideo={setShowVideo} setVideoId={setVideoId} item={item} />
                                    </div>
                                </div>
                                <h3 className='text-sm flex gap-1 items-center flex-wrap text-gray-400 mb-2'>
                                    {item?.title?.slice(1).map((title, index) => (
                                        <span key={index}>
                                            {title + ','}
                                        </span>
                                    ))}
                                </h3>
                                <span className='text-sm md:text-base'>{item?.dateAired}</span>
                                <div className='flex gap-2  items-center text-sm md:text-base flex-wrap md:text-balance mt-1.5'>
                                    <p className='font-medium text-gray-200'>Episodes: <span className='font-normal text-gray-300'>{item?.episodes}</span></p>
                                    <p className='font-medium text-gray-200'>Status: <span className='font-normal text-gray-300'>{item?.status}</span></p>
                                    <p className='font-medium text-gray-200'>Duration: <span className='font-normal text-gray-300'>{item?.duration}</span></p>
                                    <p className='font-medium text-gray-200'>Views:<span className='mx-1 text-gray-200'>{formatNumber(item?.numreviews)}</span></p>
                                    <p className='font-medium text-gray-200'>Scores:<span className='mx-1 text-gray-200'>{formatNumber(item?.rating)}</span></p>
                                </div>
                                <div className="flex gap-2 flex-wrap items-center my-1.5">
                                    {item?.genres?.map((gen, index) => (
                                        <span key={index} className='bg-gray-800 rounded-sm select-none py-1 text-gray-300 px-3 font-light text-xs md:text-sm'>{gen}</span>
                                    ))
                                    }
                                </div>
                                <p className='pt-2 pb-1 text-sm text-red-600 font-bold sm:text-base'>Overview</p>
                                <p className='text-sm font-light text-gray-200 sm:text-base md:text-base'>{item?.description}</p>
                            </div>
                            <img src={item?.poster} className='sm:h-60 sm:w-40 w-32 h-52 shadow-white/55 shadow-lg rounded-md -mt-20 object-cover object-center pointer-events-none select-none' alt={item?.title[0]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
