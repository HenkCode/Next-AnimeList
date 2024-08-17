"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  return (
    <div className="text-color-whitee min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
            <FileSearch size={32}/>
            <h3 className="text-2xl font-bold">NYARI APA? NOT FOUND WAK...</h3>
            <button onClick={() => router.back()} className="text-color-whitee text-xl hover:text-color-bluee transition-all underline">Kembali</button>
        </div>
    </div>
  )
}

export default Page