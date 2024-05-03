"use client"
import Link from "next/link"
import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../../../redux/slices/userSlicer"
import { useSelector } from "react-redux";
import {useRouter} from "next/navigation"


interface Props {
  email:string;
  password : string|number;
}

const Login = () => {

  const router = useRouter(); 
  let loginUser 
  loginUser = localStorage.getItem("newUsers") || undefined

  const LoginCheck = async()=>{
    if(loginUser !== undefined){
      await router.push("/")
    }
  }

  useEffect(()=>{
    LoginCheck();
  },[])
 

  const dispatch = useDispatch();
  const userData = useSelector((state:any)=>{
    return  state.users;
  })

  userData.length > 0 ? console.log("login-- data",userData) : ""

  const [formValue,setFormValue]  = useState<Props | any>({email:"",password:""})
  const [formErrors,setFormErrors] = useState<any>({});
  const [isSubmit,setIsSubmit]  = useState<Boolean>(false);
  const [valMatch,setValMatch] = useState("")

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setFormErrors(validate(formValue));
    const check = LoginChecker(formValue);
    console.log("check--",check)
    if(check == true){
      setIsSubmit(true);
      dispatch(addUser(formValue));
      router.push("/")
    }  

  }

  const LoginChecker = (data:any) =>{

    if(loginUser == undefined){
      console.log(loginUser)
        setValMatch("Please register no data found");
        return false;

    }else{

      let checkerVal = JSON.parse(loginUser);
      if(data.email === checkerVal.email && data.password === checkerVal.password){
          return true;
      }else{
        setValMatch("Credentails are not match Please register...");
        return false;
      }

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
      errors.email = "email is required";

    }else if (regex.test(values.email) == false){
      errors.email = "Please fill valid email...";
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

            {isSubmit ==false && valMatch !="" ?
            <p className="text-red-500">{valMatch}</p>
            :""
            }
            <span className='block w-full mr-auto ml-7'>Dont have any Account? <Link className='text-blue-700 font-bold' href="/register">Sign Up</Link></span>
            <button className='bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]' type="submit">Log In</button>
            {/* <button 
            
            className='bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]'
             >Continue With Google</button> */}
        </form>
  )
}

export default Login