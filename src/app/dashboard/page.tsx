'use client'
import { getUserApi, getAdminApi } from "@/services/route"
import { useEffect, useState } from "react"
import { useCookies } from 'next-client-cookies';
import UserDashboard from "../user-dashboard/page";
import AdminDashboard from "../(admin-dashboard)/page"
import Loading from "../loading";
import { getUserRoles } from "@/helpers/common";

const Dashboard = () => {
  const cookies = useCookies();

  const [userRole, setUserRole] = useState("")
  const [userDetails, setUserDetails] = useState<string | any>("")

  const getUserRole = async () => {
    const token = cookies.get("authToken");

    const user = await getUserApi(token);

    if (user.success === false) {

      const admin = await getAdminApi(token);
      if (admin.status === 200) {
        // console.log("admin000000",admin.status)
        setUserDetails(admin.userData)
        const { role } = admin.userData.role
        // console.log("admin",role)
        cookies.set('userRole', role)
        setUserRole(role)
      }

    } else {
      setUserDetails(user.userData)
      const { role } = user.userData.role
      cookies.set('userRole', role)
      setUserRole(role)
    }
  }

  useEffect(() => {
    const token = cookies.get("authToken");
    getUserRole()
    // getUserRoles()
  }, [])
  return (
    <>
      {userRole != "" && userRole == "user"
        ?
        <UserDashboard  />

        :
        userRole == "admin" ?
          <AdminDashboard userDetails={userDetails} /> : <Loading />
      }

    </>
  )
}

export default Dashboard