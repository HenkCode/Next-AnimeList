"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {

    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

  return (
    <div className="flex justify-between items-center mb-4">
        <button className="text-color-whitee" onClick={handleBack}><ArrowSquareLeft size={32} /></button>
        <h3 className="text-xl text-color-whitee">{title}</h3>
    </div>
  )
}

export default Header