import { SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";
import type { School } from "~/types/types";


export default function Courses() {
    const user = useUser();
    const courses = api.courses.getAll.useQuery();
    if (user.isSignedIn)
    return (
        <> 
            
        <div className="flex-col min-w-100 text-center">   
        <button className="text-xl font-serif m-2 float-right"><SignOutButton/></button>   
        <Link href="/" className="text-xl font-serif m-2 float-left">Home</Link> 
            <form className="mb-5 mt-5">
                <input placeholder="Enter course name" type="text" className="bg-orange-700 text-white text-center font-serif min-w-40 text-2xl p-2 float-none rounded-s-md"></input>
                <input type="date" className="bg-amber-950 text-white text-center font-serif min-w-40 text-2xl p-2 float-none"></input>
                <input type="date" className="bg-orange-700 text-white text-center font-serif min-w-40 text-2xl p-2 float-none"></input>
                <input placeholder="Enter school name" className=" bg-amber-950 text-white text-center font-serif min-w-40 text-2xl p-2 rounded-e-md"></input>
            </form>
            <ul>
                {courses.data?.map(course => {
                    const schoolArray : School[] = (course.schools) as School[];
                    return (
                        <>
                  <li key={course.id}  className="bg-orange-700 text-white font-serif min-w-40 text-2xl p-2 float-left">
                    {course.name}
                    </li>
                    <hr />
                    <li key={course.id}  className="bg-amber-950 text-white font-serif min-w-40 text-2xl p-2">
                    {schoolArray.map(school => school.name + ', ')}
                  </li>
                  </>
                    );
                 })}
            </ul>            
        </div>
        </>
    )
}