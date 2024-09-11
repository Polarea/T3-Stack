import { SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";


export default function Schools() {
    const user = useUser();
    const schools = api.schools.getAll.useQuery();
    if (user.isSignedIn)
    return (
        <> 
            
        <div className="flex-col min-w-100 text-center">   
        <button className="text-xl font-serif m-2 float-right"><SignOutButton/></button>   
        <Link href="/" className="text-xl font-serif m-2 float-left">Home</Link> 
            <form className="mb-5 mt-5">
                <input placeholder="Enter school name" className="bg-orange-700 text-white text-center font-serif min-w-40 text-2xl p-2 float-none rounded-s-md"></input>
                <input placeholder="Enter course name" className="bg-amber-950 text-white text-center font-serif min-w-40 text-2xl p-2 rounded-e-md"></input>
            </form>
            <ul>
                {schools.data?.map(school => {
                    return (
                        <>
                  <li key={school.id}  className="bg-orange-700 text-white font-serif min-w-40 text-2xl p-2 float-left">
                    {school.name}
                    </li>
                    <hr />
                    <li key={school.id}  className="bg-amber-950 text-white font-serif min-w-40 text-2xl p-2">
                    {school.courses.map(course => course.name + ', ')}
                  </li>
                  </>
                    );
                 })}
            </ul>            
        </div>
        </>
    )
}