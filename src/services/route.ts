// All API functions
import { json } from 'stream/consumers';
import jwt from "jsonwebtoken";



export const apiUrl = process?.env?.NEXT_DB_URL || "https://cart-app-ibuu.onrender.com";
export const version = process?.env?.NEXT_VERSION || "/api/v1"; 
const PrivateKey = "sdfsdf4vsdfsf234rfc344sdfsdf"


export const registerApi = async(formVal:any|{}) => {
  try {
    const response = await fetch(`${apiUrl}${version}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formVal,
    });

    if (!response.ok) {
      
      const errData = await response.json();
      console.log("Register error",errData)
      return errData;
    }

    // Assuming the response is JSON
    const responseData = await response;

    return responseData;
    
  } catch (error) {
        console.log("error",error);
        throw new Error('Registration failed');
  }
}

export const loginApi = async(formVal:any|{}) => {
  try {
    const response = await fetch(`${apiUrl}${version}/login/user-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formVal,
    });

     // Check if the response is successful
     if (!response.ok) {
      
      const errData = await response.json();
      console.log("loginApi error",errData)
      return errData;
      throw new Error('Login failed');
    }

    // Assuming the response is JSON
    const responseData = await response.json();

    return responseData;
    
  } catch (error) {
        console.log("error",error);
        throw new Error('loginApi func failed');
  }
}

export const getUserApi = async(token:any|{}) => {
  try {
    // console.log("user-sdsd",token)
    const response = await fetch(`${apiUrl}${version}/user/get-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}` 
      },
    });

     // Check if the response is successful
     if (!response.ok) {
      const errData = await response.json();
      console.log("getUserApi error",errData)
      return errData;
      throw new Error('Login failed');
    }

    // // Assuming the response is JSON
    const responseData = await response.json();
    return responseData;
    
  } catch (error) {
        console.log("error",error);
        throw new Error('loginApi failed');
  }
}

export const getAdminApi = async(token:any|{}) => {
  try {
    // console.log("admin-sdsd",token)
    const response = await fetch(`${apiUrl}${version}/admin/get-admin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}` 
      },
    });

     // Check if the response is successful
     if (!response.ok) {
      console.log("getAdminApi---",response)
      throw new Error('GEt ADmin Login failed');
    }

    // // Assuming the response is JSON
    const responseData = await response.json();
    return responseData;
    
  } catch (error) {
        console.log("error",error);
        throw new Error('getAdminApi func failed');
  }
}

