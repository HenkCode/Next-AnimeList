import Link from "next/link";
import InputSearch from "./InputSearch";
import AuthAction from "./AuthAction";

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="bg-color-bluee flex md:flex-row flex-col justify-between md:items-center p-2 gap-1">
            <Link href="/" className="text-color-whitee text-xl font-bold">HenkCode.</Link>
            <InputSearch />
            <AuthAction />
        </div>
    </header>
  )
}

export default Navbar;