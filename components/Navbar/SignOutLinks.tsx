"use client"
import { SignOutButton } from "@clerk/nextjs"
import { toast } from "sonner"


const SignOutLinks = () => {

  return (
    
    <SignOutButton redirectUrl="/">
        <button
        className="w-full text-left"
        onClick={() => toast("Logout Successfully!!!")}
        >Logout</button>
    </SignOutButton>
  )
}
export default SignOutLinks