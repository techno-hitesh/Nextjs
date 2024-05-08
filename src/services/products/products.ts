import axios from "axios";
import { apiRoutes } from "../ApiRoutes";
import axiosInstance from "@/axios/axiosInstance";

const apiUrl = process?.env?.NEXT_PUBLIC_API_BASE_URL;

export const getAllProducts = async(token:any|{}) => {
    try {
      // console.log("admin-sdsd",token)
      const response = await fetch(`${apiUrl}${apiRoutes.allGetProducts}`, {
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

    const data = JSON.stringify(val);

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${apiUrl}${apiRoutes.addToCart}`,
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

export const getQuestions = async () =>
  await axiosInstance.get(apiRoutes.getUsers).catch(err => {
    console.log(err?.response?.data?.message || err?.message)
    throw err
  })