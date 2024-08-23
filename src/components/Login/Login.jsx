import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";




const Login = () => {

  const navigate = useNavigate();

  const handleLogin = async() => {
    try{
      console.log('auth', auth)
      console.log('provider', googleProvider)
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data)
      toast.success('sign-in successfull, welcome!')
      navigate('/home');
      return data;
    }
    catch(err){
      toast.error('Error during sign in, please try again', err.message);
      console.log(err)
    }
  }
  return (
    <div>
      <h1>login</h1>
      <button className="flex justify-between align-items"
      onClick={handleLogin}>
        <FaGoogle/>
        Continue with Google
      </button>
    </div>
    
   
 
  )
}

export default Login
