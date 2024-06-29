'use client'
import { addToFavoriteLists } from '@/lib/features/slices'
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { BsBookmarkPlusFill, BsBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'

export default function CardButtons({ setShowVideo, setVideoId, item }) {
  const dispatch = useDispatch()
  const { favoriteLists } = useSelector((state) => state.favorites)
  const isExisted = favoriteLists.some((isEx) => isEx.id === item?.id)

  return (
    <>
      <button className='bg-gray-800 rounded-full p-1.5 md:p-2.5 text-xs md:text-sm mr-2' onClick={() => { setShowVideo(true), setVideoId(item?.videoId) }}>
        <span><FaPlay size={25} className='pl-1.5'/></span>
      </button>

      <button disabled={isExisted} className={` flex justify-center text-xs pr-4 md:text-sm gap-2 items-center ${isExisted && 'cursor-not-allowed'}`} onClick={() => dispatch(addToFavoriteLists(item))}>
        {isExisted ? <span><BsBookmarkCheckFill size={30} /></span> : <span><BsBookmarkPlusFill size={30} /></span>}
      </button>
      <button></button>
    </>
  )
}
