'use client'
import React, { useState } from 'react'
import VideoPopup from '../videopopup/VideoPopup'
import CardDetails from './CardDetails';

export default function CardClicks({ item }) {
    const [showVideo, setShowVideo] = useState(false);
    const [showCardDetail, setShowCardDetail] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const hidePopup = () => {
        setShowVideo(false);
        setVideoId(null);
    }
    return (
        <>
            <div className="flexCenterBetween absolute bottom-14 left-0 w-full p-3 Cardbtn">
                <button className='border hover:border-none hover:bg-green-600 hover:text-white transition rounded-sm py-2 px-3 text-sm' onClick={() => setShowCardDetail(true)}>More Details</button>
                <button className={`border  hover:border-none hover:bg-red-600 hover:text-white transition rounded-sm py-2 px-3 text-sm`} onClick={() => { setShowVideo(true), setVideoId(item?.videoId) }}>
                    Play Now</button>
            </div>
            {<VideoPopup hidePopup={hidePopup} videoId={videoId} showVideo={showVideo} />}
            <CardDetails item={item} showCardDetail={showCardDetail} setShowCardDetail={setShowCardDetail} setVideoId={setVideoId} setShowVideo={setShowVideo} />
        </>
    )
}
