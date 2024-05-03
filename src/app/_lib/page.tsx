"use client"
const PrivateFolder = () => {
  try {
    let loginUser 
    loginUser = localStorage.getItem("newUsers") || undefined    
      if(loginUser !== undefined){
        return  loginUser;
      }
    
  } catch (error) {
    console.log("errror",error)
  }

}

export default PrivateFolder