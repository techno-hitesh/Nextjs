"use client"
import { useRouter } from "next/navigation"

export default function orderProduct(){

    const router = useRouter();

    const handleSubmit = () =>{
        console.log("hello clicking me")
        router.push("/");
    }
    return(
        <>
            <h1 className="mt-5"> Order Products </h1>
            <button onClick={handleSubmit} className="bg-blue-500 mt-3 text-white font-bold py-2 px-3 rounded">Place Order</button>
        </>
    )
}