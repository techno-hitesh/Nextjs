import {adminRoutes} from "../../ApiRoutes"

const apiUrl = process?.env?.NEXT_PUBLIC_API_BASE_URL;


export const getAllCategoryApi = async(token) => {
    try {
      console.log("getAllCategoryApi",token,apiUrl)
      const response = await fetch(`${apiUrl}${adminRoutes.getAllCategory}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}` 
        },
      });
  
       // Check if the response is successful
       if (!response.ok) {
        console.log("getAllCategory---",response)
        // throw new Error('GEt getAllCategory failed');
      }
  
      // // Assuming the response is JSON
      const responseData = await response.json();
      return responseData;
      
    } catch (error) {
          console.log("error",error);
        //   throw new Error('getAllCategory func failed');
    }
}
