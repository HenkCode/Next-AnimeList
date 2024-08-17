import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {

  const user = await authUserSession()

  return (
    
    <div className="mt-8 text-color-whitee flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}...</h5>

      <Image src={user?.image} alt="..." width={250} height={250} className="w-auto py-5 px-5" />

      <div className="py-8 gap-4 flex flex-wrap">
        <Link href="/users/dashboard/collection" className="bg-color-bluee text-color-dark font-bold px-4 py-3">My Collection</Link>
        <Link href="/users/dashboard/comment" className="bg-color-bluee text-color-dark font-bold px-4 py-3">My Comment</Link>
      </div>
    </div>
  )
}

export default Page