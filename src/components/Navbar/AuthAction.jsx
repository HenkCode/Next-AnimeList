import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";


const AuthAction = async() => {
    const user = await authUserSession();

    const actionTabel = user ? "Sign Out" : "Sign In";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <div className=" text-color-whitee flex justify-between gap-2 pt-2">
            {user ? <Link href="/users/dashboard" className="text-md py-1 px-4">Dashboard</Link> : null}
            <Link href={actionURL} className="text-decoration-line: underline py-1 px-4">{actionTabel}</Link>
        </div>
    )
}

export default AuthAction