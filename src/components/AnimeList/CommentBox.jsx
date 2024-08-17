import React from "react"
import prisma from "@/libs/prisma"

const CommentBox = async ({anime_mal_id}) => {
    const comments = await prisma.comment.findMany({ where: {anime_mal_id} });
  return (
    <div className="overflow-auto h-40 grid gap-3 py-2 px-4">
        {comments.map((comment => {
            return (
                <div key={comment.id} className=" shadow-2xl border-2 rounded border-color-bluee px-2 py-2">
                    <p className="">{comment.username} :</p>
                    <p className="italic">{comment.comment}</p>
                </div>
            )
        }))}
    </div>
  )
}

export default CommentBox