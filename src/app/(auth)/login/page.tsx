"use client"
import Link from "next/link"
import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../../../redux/slices/userSlicer"
import { useSelector } from "react-redux";
import {useRouter} from "next/navigation"
import { loginApi } from "@/services/route"
import { useCookies } from 'next-client-cookies';
import { getUserApi,getAdminApi } from "@/services/route"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserRoles } from "@/helpers/common"

interface Props {
  email:string;
  password : string|number;
}

const Login = () => {
  // console.log("loginpage---",process?.env?.NEXT_DB_URL)
  const cookies = useCookies();
  const router = useRouter(); 
  let loginUser 
  loginUser = typeof window !== 'undefined' ? localStorage.getItem("newUsers") : undefined

  const dispatch = useDispatch();
  const userData = useSelector((state:any)=>{
    return  state.users;
  })

  const [formValue,setFormValue]  = useState<Props | any>({email:"",password:""})
  const [formErrors,setFormErrors] = useState<any>({});
  const [isSubmit,setIsSubmit]  = useState<Boolean>(false);
  const [valMatch,setValMatch] = useState("")
  const [apiErr,setApiErr] =useState<string|{}|any>("")

  const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) =>{
    e.preventDefault()

    let errForm :{}|"" = validate(formValue);

    if(Object.keys(errForm).length !== 0){
      // setFormErrors(errForm);

    }else{
      const check = await LoginChecker(formValue);
   
      if(check == true){
        setIsSubmit(true);
        dispatch(addUser(formValue));
        // loginApi(formValue);
        const userResp = await getUserRoles();
        const {role} = userResp.role;

        if(role ==="user"){
          cookies.set('userRole', role)
          console.log("role",role);
          router.push("/user-dashboard");
        }else{
          console.log("role",role);
          cookies.set('userRole', role)
          router.push("/admin-dashboard");
        }
        // router.push("/dashboard")
      } 

    }
}

const LoginChecker = async(data:any) =>{

      let isLoginData
       isLoginData = await loginApi(JSON.stringify(data))

      if(isLoginData.status === 200){
        cookies.set('authToken', isLoginData.token)
        localStorage.setItem("authToken",isLoginData.token)
       
        return true;
        
      }else if(isLoginData.status === 400){
        const {message} = isLoginData
        // setApiErr(isLoginData);
        toast.error(message);
        setIsSubmit(false);
        return false;
      }   
  }

  const handleChange = (e:any) =>{    
    const {name,value} = e.target;
    setFormValue((prevProps:any) => ({
      ...prevProps,
      [name]: value
    }));
  }

  useEffect(()=>{
    // console.log("without value",formValue,formErrors);
    if(Object.keys(formErrors).length == 0 && isSubmit){
      console.log(formValue);
    }

  },[formErrors])

  const validate = (values:any|{}) =>{
    const errors:Props|any = {};

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    console.log("values",regex.test(values.email))
    if(!values.email){
      errors.email = "Email cannot be empty.";
      toast.error("Email cannot be empty.");

    }else if (regex.test(values.email) == false){
      errors.email = "Please enter a valid email address.";
      toast.error("Please enter a valid email address.");
    }

    if(!values.password){
      errors.password = "Password is required";
      toast.error("Password is required");
    }else if (values.password.length < 8 || values.password.length > 10) {
      errors.password = "Password must be between 8 and 10 characters long";
      toast.error("Password must be between 8 and 10 characters long");
    }

    return errors;
  }

  return (

  <>
  <ToastContainer autoClose={2000} />

    <form       
        className='flex flex-col justify-center items-center gap-5 max-w-lg shadow-2xl shadow-gray-900 h-screen hover:shadow-gray-300  bg-white mx-auto rounded-md text-gray-900 mt-4'  onSubmit={handleSubmit}>
            <h3 className='text-2xl '>Please Log In! </h3>

            <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                </span>
                <input required type="email" name="email" className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" 
                value={formValue.email}
                onChange={(e)=>handleChange(e)}

                placeholder="Enter your email address" />
                <p className="text-red-500">{formErrors.email}</p>
            </label>

            <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                </span>
                <input required type="password" name="password" className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password"
                 value={formValue.password}
                 onChange={(e)=>handleChange(e)}
                />
                 <p className="text-red-500">{formErrors.password}</p>
            </label>

            {isSubmit ==false && apiErr !="" ?
            <p className="text-red-500">{apiErr.message}</p>
            :""
            }
            <span className='block w-full mr-auto ml-7'>Dont have any Account? <Link className='text-blue-700 font-bold' href="/register">Sign Up</Link></span>
            <button className='bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]' type="submit">Log In</button>
            {/* <button 
            
            className='bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]'
             >Continue With Google</button> */}
        </form>
        </>
  )
}

export default Login