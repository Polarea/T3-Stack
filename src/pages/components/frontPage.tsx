import Link from "next/link"

export const FrontPage = () => {
    return (
    <>    
     <div className="w-full flex justify-evenly">
        <Link href="/schools" className="bg-white rounded-full p-3 shadow-lg shadow-black w-72">
            <div className="text-center text-4xl font-extrabold font-serif">Schools</div>
        </Link>
        <Link href="/courses" className="bg-white rounded-full p-3 shadow-lg shadow-black w-72">
            <div className="text-center text-4xl font-extrabold font-serif">Courses</div>
        </Link>
        <Link href= "/instructors" className="bg-white rounded-full p-3 shadow-lg shadow-black w-72">
            <div className="text-center text-4xl font-extrabold font-serif">Instructors</div>
        </Link>
    </div>
    </>
)}