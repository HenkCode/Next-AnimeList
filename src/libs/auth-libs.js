import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async() => {
    const sesion = await getServerSession(authOption)
    return sesion?.user;
}