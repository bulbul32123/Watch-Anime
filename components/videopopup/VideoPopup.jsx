import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function VideoPopup({ showVideo, hidePopup, videoId }) {
    return (
        <>
            <div className={`videoPopup ${showVideo ? "visible" : " hidden"}`}>
                <button onClick={hidePopup} className="opacityLayer" ></button>
                {/* onClick={hidePopup} */}
                <div className="videoPlayer">
                    <button onClick={hidePopup} className="closeBtn" >
                        {/* onClick={hidePopup} */}
                        Close
                    </button>

                    {showVideo && <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        controls
                        width="100%"
                        height="100%"
                        playing={true}
                    />}
                </div>
            </div>
        </>
    )
}
