import Dashboard from "@/components/Dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

const page = () => {
  const {getUser} = getKindeServerSession();
  const user = getUser();
  
  if(!user || !user?.id) redirect('/auth-callback?origin=dashboard')

  return (
    <div><Dashboard /></div>
  )
}

export default page