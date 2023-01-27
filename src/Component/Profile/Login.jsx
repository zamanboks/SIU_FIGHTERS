import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const Login = () => {
  const[profile,setProfile]= useState(0);
  const[profileDoc,setProfileDoc]= useState(false);
  const[loginpage,setLoginpage]=useState(false)
  const[newUser, setNewUser]=useState({
      username:"",
      password_1:""
   })
   const handleChange=(e)=>{
      const{name,value}=e.target;
      setNewUser({
          ...newUser,
          [name]: value,
      })
      console.log(name,value)
     }
     const userSubmit=(e)=>{
      e.preventDefault();
      const{username,password_1}=newUser;
     
      if(username&&password_1){
          axios.post('http://localhost:5000/Singup/login',newUser )
          .then(res=>((res.data.error)? alert(res.data.error) : (alert(res.data.message), setProfile(true),  sessionStorage.setItem('username', username),sessionStorage.setItem("Token",res.data.access_token),console.log(res))));
     
      }
      else {
        window.confirm('someting is wrong please try again')
      }
   
    }
    useEffect(()=>{
  
      profile && navigate("/Profile", { replace: true });
    },[profile])
    let navigate = useNavigate();
    useEffect(()=>{
      loginpage&& window.confirm("Login Successful")
      loginpage && navigate("/login", { replace: true });
     
    },[loginpage])
    return (
        <div className="SingUpFrom">
        <br /> <br /> <br />
 <br /> 
   <section class="vh-100">
     
   <div class="container h-100">
     <div class="row d-flex justify-content-center align-items-center h-100">
       <div class="col-lg-12 col-xl-11">
         <div class="card text-black">
           <div class="card-body p-md-5">
             <div class="row justify-content-center">
               <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
 
                 <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
 
                 <form class="mx-1 mx-md-4">
 
                   <div class="d-flex flex-row align-items-center mb-4">
                     <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                     <div class="form-outline flex-fill mb-0">
                     <input type="email" id="form3Example3c" class="form-control" name="username"  value={newUser.username}
              onChange={handleChange} 
              required />
                       <label class="form-label" for="form3Example3c">Your Email</label>
                     </div>
                   </div>
 
                   <div class="d-flex flex-row align-items-center mb-4">
                     <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                     <div class="form-outline flex-fill mb-0">
                     <input type="password" id="form3Example4c" class="form-control" 
                            name="password_1"  value={newUser.password_1}
                            onChange={handleChange}
                            required/>
                       <label class="form-label" for="form3Example4c">Password</label>
                     </div>
                   </div>
 
                 
 
                   <div class="form-check d-flex justify-content-center mb-5">
                  
                     <label class="form-check-label" for="form2Example3">
                       You don't hava any account     <NavLink to="/SingUp" exact className="nav-link"><a href="">Sing up</a> </NavLink>
                     </label>
                   </div>
 
                   <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                   <button type="button" class="btn btn-primary btn-lg" onClick={userSubmit}>Register</button>
                   </div>
 
                 </form>
 
               </div>
               <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
 
                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                   class="img-fluid" alt="Sample image"/>
 
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   
 </section>
 <br /> <br /> <br />
 <br /> <br /> <br />
 <br /> <br /> 
 </div>
    );
};

export default Login;