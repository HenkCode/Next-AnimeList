import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import prisma from "@/libs/prisma"

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    })
    console.log({collection})
  return (
    <section className="pt-3 gap-2 px-4">
        <Header title={"My Collection"}/>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4r">

            {collection.map((collect, index) => {
                return (
                    <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="shadow-2xl text-color-whitee hover:text-color-bluee scale-75 hover:scale-90 transition-all">
                        <Image src={collect.anime_image} alt={collect.anime_image} width={350} height={350} className="w-full object-cover"/>
                        <div className="font-bold pt-2 md:text-sm text-md p-4">{collect.anime_title}</div>
                    </Link>

                )
            })}

        </div>
    </section>
  )
}

export default Page