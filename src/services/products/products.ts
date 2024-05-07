import axios from "axios";

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


export const AddToCart = async (val: any,) => {
  try {
    const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM4OTFhZmU5OTU4NmNlZDI1MmVkOWMiLCJmdWxsTmFtZSI6ImhpdGVzaCIsImVtYWlsIjoiaGl0ZXNoQGdtYWlsLmNvbSIsInJvbGUiOnsiX2lkIjoiNjYzNGMxMzdjOTA2NTNjZjdhYTFlYTk2Iiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzE1MDg2NjYwLCJleHAiOjE3MTUwOTAyNjB9.c9FBrcoV6tnRg9cjljrpBkn4mDPJOu3aUorc-Uizs8U`
    const data = JSON.stringify(val);

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${apiUrl}${version}/user/add-to-cart`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    const response = await axios.request(config);
    return response.data;

  } catch (error) {
    console.log("AddToCart", error);
    throw new Error('AddToCart func failed');
  }
}
