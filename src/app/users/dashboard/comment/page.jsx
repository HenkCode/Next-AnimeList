import React from 'react'
import prisma from '@/libs/prisma'
import { authUserSession } from '@/libs/auth-libs'
import Link from 'next/link'
import Header from '@/components/Dashboard/Header'

const page = async () => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({where: {user_email: user.email}})
    return (
        <>
            <section className="pt-3 gap-2 px-4">
                <Header title={"My Comment"} />
                <div className='grid px-8 py-6 gap-4'>
                    {comments.map((comment) => {
                        return (
                            <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className='bg-color-dark shadow-2xl text-color-whitee rounded border border-color-bluee p-1'>
                                <p className='text-sm'>{comment.anime_title}</p>
                                <p className='italic'>{comment.comment}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default page