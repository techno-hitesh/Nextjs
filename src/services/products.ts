export const apiUrl = process?.env?.NEXT_DB_URL || "https://cart-app-ibuu.onrender.com";
export const version = process?.env?.NEXT_VERSION || "/api/v1"; 
const PrivateKey = "sdfsdf4vsdfsf234rfc344sdfsdf"

export const getAllProducts = async(token:any|{}) => {
    try {
      // console.log("admin-sdsd",token)
      const response = await fetch(`${apiUrl}${version}/admin/get-all-products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}` 
        },
      });
  
       // Check if the response is successful
       if (!response.ok) {
        console.log("getAllProducts---",response)
        throw new Error('GEt getAllProducts failed');
      }
  
      // // Assuming the response is JSON
      const responseData = await response.json();
      return responseData;
      
    } catch (error) {
          console.log("error",error);
          throw new Error('getAllProducts func failed');
    }
  }