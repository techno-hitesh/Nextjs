
import { useRouter } from "next/navigation";
import Login from "./(auth)/login/page";
import auth from "@/configs/auth";
import { getUserRoles } from "@/helpers/common";

const Home = () => {

  // const router = useRouter();

  // let loginUser  = typeof window !== 'undefined' ? localStorage.getItem(auth.storageTokenKeyName) : undefined
  // if(loginUser != undefined){
  //   const userResp = await getUserRoles();
  
  //   console.log("enter in if")
  //   router.push("/user-dashbord")
  // }else{
  //   console.log("enter in else")
  //   router.push("/login")
  // }
  
  return (
    <>
    {/* {checkerVal == undefined  ? 
    
    <Login/>: ""        
          } */}

    </>
  )
}

export default Home;
