import { SignOutButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Schools () {
    return (
            <div className="flex-col min-w-100 text-center">   
                <button className="text-xl font-serif m-2 float-right"><SignOutButton/></button>   
                <Link href="/" className="text-xl font-serif m-2 float-left">Home</Link>
            </div>
    )
}