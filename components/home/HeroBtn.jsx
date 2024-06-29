'use client'
import React, { useState } from 'react'
import VideoPopup from '../videopopup/VideoPopup';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteLists } from '@/lib/features/slices';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PlayIcon } from '../PlayBtn';

export default function HeroBtn({ item }) {
    const [showVideo, setShowVideo] = useState(false);
    const dispatch = useDispatch()
    const [videoId, setVideoId] = useState(null);
    const { favoriteLists } = useSelector((state) => state.favorites)
    const isExisted = favoriteLists.some((isEx) => isEx.id === item?.id)
    const hidePopup = () => {
        setShowVideo(false);
        setVideoId(null);
    }
    return (
        <>
            <div className="">
                <button disabled={isExisted} className={`rounded-lg bg-transparent max-md:border md:bg-red-500 px-8 py-3  text-sm font-semibold text-white outline-none flex justify-center items-center transitions-300 focus-visible:ring md:text-base ${isExisted && 'cursor-not-allowed'}`} onClick={() => dispatch(addToFavoriteLists(item))}>
                    {isExisted && <span> <IoIosCheckmarkCircle size={20} /></span>}
                    Add to Favorite</button>

            </div>
            <button onClick={() => { setShowVideo(true), setVideoId(item?.videoId) }} className="md:text-base playbtn inline-block"
            ><PlayIcon /></button>
            <VideoPopup hidePopup={hidePopup} videoId={videoId} showVideo={showVideo} />
        </>
    )
}
