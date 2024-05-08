"use client"
import {getAllCategoryApi} from "@/services/admin/category/route"
import { useEffect,useState } from "react";

const Category = () => {

    const [showCat,setShowCat] = useState([])

    const getCategroy =  async() =>{
        const token = localStorage.getItem("authToken")
        if(token){
            const res = await getAllCategoryApi(token);
            if(res.status === 200){
                setShowCat(res.data)
                console.log("res--",res)
            }
          

        }
    }
    useEffect(()=>{

        getCategroy()
    },[])

  return (
    <div>
         <table className="table-fixed">
            <thead>
                <tr>
                <th>CategoryName</th>
                <th>CategoryDescription</th>
                <th>CategoryName</th>
                <th>Actions</th>
                </tr>
            </thead>
    <tbody className="ml-3">
        {showCat.length > 0 && showCat ? 
        showCat.map((dm:any,id:number)=>((
            <tr key={dm._id}>
            <td >{dm.categoryName}</td>
            <td >{dm.categoryDescription}</td>
            <td >{dm.categoryName}</td>
                <button className="ml-2 text-white bg-blue-700 rounded-full">Edit</button>
                <button className="ml-2 text-white bg-red-700 rounded-full">Delete</button>
            </tr>

        ))) 
            

            :"" }

    </tbody>
    </table>

    </div>
  )
}

export default Category