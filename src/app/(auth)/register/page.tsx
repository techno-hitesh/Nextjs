"use client"
import Link from "next/link"
import { useState } from "react"
// import { toast } from 'react-hot-toast';
import {useRouter} from "next/navigation"
import { useJwt } from "react-jwt";
import { isExpired, decodeToken } from "react-jwt";


const token = "randomStringmodeersdfcsdf";

interface Props {
    username:string;
    email:string;
    password : number;
    confirmPass:string;
}
const Register = () => {

  const router = useRouter(); 

  const [value,setValue]  = useState<Props | any>({username:"",email:"",password:"",confirmPassword:""})
  const [formErrors,setFormErrors] = useState<any>({});
  const [isSubmit,setIsSubmit]  = useState<Boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>{
    e.preventDefault()
    let userArray:[]|any=[];
    setFormErrors(validate(value));
    setIsSubmit(true);
    userArray.push(JSON.stringify(value));
    localStorage.setItem("newUsers", JSON.stringify(value));
    const myDecodedToken:any = decodeToken(token);
    localStorage.setItem("token", myDecodedToken);
    router.push("/login")

  }

  const handleChange = (e:any) =>{    
    const {name,value} = e.target;
    setValue((prevProps:any) => ({
      ...prevProps,
      [name]: value
    }));
  }

  const validate = (values:any|{}) =>{
    const errors:Props|any = {};

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    console.log("values",values,regex.test(values.email))

    if(!values.username){
      errors.username = "username is required";
    }
    if(!values.email){
      errors.email = "email is required";

    }else if (regex.test(values.email) == false){
      errors.email = "Please fill valid email...";
    }

    if(values.password !== values.confirmPassword){
      errors.password = "password are not match";
    }

    if(!values.password){
      errors.password = "password is required";
    }else if(values.password.length < 4){
      errors.password = "password length is not less then 4";
    } else if(values.password.length > 10){
      errors.password = "password length is not greater then 10";
    } 

    return errors;
  }


  return (
    <div className="container mx-auto">
    <form
    onSubmit={handleSubmit}
    className='flex flex-col justify-center items-center gap-5 max-w-lg  shadow-2xl shadow-gray-900 h-screen hover:shadow-gray-300  bg-white mx-auto rounded-md text-gray-900 mt-4'>

    <h3 className='text-2xl '>Create New Account! </h3>
    <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Name
        </span>
        <input required type="name" name="username" className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Enter your name" 
         value={value.username}
         onChange={(e)=>handleChange(e)}
        />
         <p className="text-red-500">{formErrors.username}</p>
    </label>

    <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
        </span>
        <input required type="email" name="email" className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email address" 
        value={value.email}
        onChange={(e)=>handleChange(e)}
        />
         <p className="text-red-500">{formErrors.email}</p>
    </label>

    <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Password
        </span>
        <input required type="password" name="password" className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password" 
         value={value.password}
         onChange={(e)=>handleChange(e)}
        />
         <p className="text-red-500">{formErrors.password}</p>
    </label>
    <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Confirm Password
        </span>
        <input required type="password" name="confirmPassword" className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password"         
        value={value.confirmPassword}
        onChange={(e)=>handleChange(e)}/>
        <p className="text-red-500">{formErrors.confirmPassword}</p>
    </label>
    <span className='block w-full mr-auto ml-7'>Already have an Account? <Link className='text-blue-700 font-bold' href="/login">Log In</Link></span>
    <button className='bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]' type="submit">Sign Up</button>
    {/* <button  className='bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]' >Continue With Google</button> */}
</form>
</div>
  )
}

export default Register