"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleVideo = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handleVideo} className="text-color-whitee float-right bg-color-dark px-3 mb-1">X</button>
                <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert("video rusak")}/>
            </div>
        )
    }
    return isOpen ? <Player /> : null
}

export default VideoPlayer;