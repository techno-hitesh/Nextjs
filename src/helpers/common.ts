import { getUserApi,getAdminApi } from '@/services/route';

export const authTokens = typeof window !== 'undefined' ? localStorage.getItem('authToken'):null;

//get user role
export const getUserRoles = async () => {
    try {
        // const router = useRouter()
        // console.log("authTokens",authTokens)
        if(authTokens){
            const user = await getUserApi(authTokens);
            let data
        
            if(user.message === "Invalid token or token has expired"){
                // console.log("custom mis")
                return user;                    
            }
        
            if (user.success === false  && authTokens) {
                const admin = await getAdminApi(authTokens);
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
        
            return data;
        }
       
        
    } catch (error) {
        console.log("Common func",error);
        throw new Error('Common func');
    }

}
