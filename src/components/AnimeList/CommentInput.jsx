"use client"

import { useState } from "react"

const CommentInput = ({anime_mal_id, user_email, username, anime_title}) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()
        console.log(comment)

        const data = {anime_mal_id, user_email, comment, username, anime_title}

        const response = await fetch("/api/v1/comment" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
        }
        return
    }

    return (
        <div className="px-4 py-2 flex flex-col gap-2 text-color-whitee">
            {isCreated && <p className="text-color-whitee">Komentar Terkirim...</p>}
            <textarea onChange={handleInput} value={comment} placeholder="komentar..." className="w-full h-32 rounded bg-color-dark shadow-2xl border-2 border-color-bluee text-xl"/>
            <button onClick={handlePosting} className="bg-color-bluee w-20 h-10 rounded">Kirim</button>
        </div>
    )
}

export default CommentInput