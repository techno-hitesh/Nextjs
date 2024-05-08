import axios from "axios";
import authConfig from "../configs/auth"

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
});

// const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM4OTFhZmU5OTU4NmNlZDI1MmVkOWMiLCJmdWxsTmFtZSI6ImhpdGVzaCIsImVtYWlsIjoiaGl0ZXNoQGdtYWlsLmNvbSIsInJvbGUiOnsiX2lkIjoiNjYzNGMxMzdjOTA2NTNjZjdhYTFlYTk2Iiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzE1MTQ3ODQ5LCJleHAiOjE3MTUxNTE0NDl9.QSnklC_Uz00t2epB8TV-Xx2xysfRxE32fhP3j6OqeI8`

axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem(authConfig.storageTokenKeyName);
    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      if (typeof window !== "undefined") {
        window.location.replace("/");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;