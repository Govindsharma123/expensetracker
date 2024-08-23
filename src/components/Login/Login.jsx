import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import style from '../../Style/login/loginStyle.module.css'



const Login = () => {
  const navigate = useNavigate();


  const handleLogin = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await signInWithPopup(auth, googleProvider);
        console.log(data);
        toast.success('Sign-in successful, welcome!');
        navigate('/home');
        resolve(data);
      } catch (err) {
        toast.error('Error during sign-in, please try again.');
        console.error(err.message);
        reject(err); // Reject the promise with the error
      }
    });
   
  }
  return (
    <div >
      <h2 className={`d-flex justify-content-center align-items-center ${style.typing_animation}`}  style={{height:'calc(100vh - 400px)'}}>
        <span>It's your personal expense tracker...</span>
      </h2>
      <div className="d-flex justify-content-center align-items-center " style={{height:'calc(100vh - 530px)'}}>
         <button className={style.google_btn}  onClick={handleLogin} style={{height:'50px',width:'300px',border:'none',borderRadius:'30px',color:'white'}}>
          <FcGoogle style={{fontSize:'30px'}}/> <b style={{fontSize:'15px'}}>Continue with Google</b>
          </button>
      </div>
    </div>
    
   
 
  )
}
// 

export default Login
