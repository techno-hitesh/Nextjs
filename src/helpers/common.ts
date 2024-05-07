import { getUserApi,getAdminApi } from '@/services/route';
import { useRouter } from 'next/navigation';
//get user role
export const getUserRoles = async () => {
    try {
        // const router = useRouter()
        const token = localStorage.getItem("authToken")
        const user = await getUserApi(token);
        let data
    
        if(user.message === "Invalid token or token has expired"){
            console.log("custom mis")
            // return { redirectTo: "/" };
            // router.replace("/")
            return user.message;
        }
    
        if (user.success === false  && token) {
            const admin = await getAdminApi(token);
            if (admin.status === 200) {
                const { role } = admin.userData.role
                localStorage.setItem('userRole', role)
                data = admin.userData
            }
          
        } else {
          const { role } = user.userData.role
          localStorage.setItem('userRole', role)
          data = user.userData
        }
    
        // console.log("roles",roles)
        return data;
        
    } catch (error) {
        console.log("Common func",error);
        throw new Error('Common func');
    }

}


export const removeStorage = () =>{
    try {
        
        
    } catch (error) {
        console.log("removeStorage func",error);
        throw new Error('removeStorage func');
    }
}

