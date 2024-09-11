import { SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";


export default function Instructors() {
    const user = useUser();
    const instructors = api.instructors.getAll.useQuery();
    if (user.isSignedIn)
    return (
        <> 
            
        <div className="flex-col min-w-100 text-center">   
        <button className="text-xl font-serif m-2 float-right"><SignOutButton/></button>   
        <Link href="/" className="text-xl font-serif m-2 float-left">Home</Link> 
            <form className="mb-5 mt-5">
                <input placeholder="Enter name" className="bg-orange-700 text-white text-center font-serif min-w-40 text-2xl p-2 float-none rounded-s-md"></input>
                <input placeholder="Enter qualification" className="bg-amber-950 text-white text-center font-serif min-w-40 text-2xl p-2 rounded-e-md"></input>
            </form>
            <ul>
                {instructors.data?.map(instructor => {
                    return (
                        <>
                  <li key={instructor.id}  className="bg-orange-700 text-white font-serif min-w-40 text-2xl p-2 float-left">
                    {instructor.name}
                    </li>
                    <hr />
                    <li key={instructor.id}  className="bg-amber-950 text-white font-serif min-w-40 text-2xl p-2">
                    {instructor.qualifications?.map(qualification => qualification.name + ', ')}
                  </li>
                  </>
                    );
                 })}
            </ul>            
        </div>
        </>
    )
}