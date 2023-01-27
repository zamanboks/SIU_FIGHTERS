import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './SingUp.css';
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const SingUp = () => {
    const[loginpage,setLoginpage]=useState(false)
    const[newUser, setNewUser]=useState({
        username:"",
        email:"",
        institution:"",
        age:"",
        class:"",
        password_1:"",
        password_2:""
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
        const{username,email,password_1,password_2,institution,age}=newUser;
       
        if(username&&email&&password_1&&regex.test(email)&&password_2&&institution&&age&&password_1===password_2&&password_1>=6){
            axios.post('http://localhost:5000/Singup/user',newUser )
            .then(res=>setLoginpage(true))
       
        }
        else if(!regex.test(email)) alert('email is invalid')
        else if(password_1!==password_2)alert('password 1 & password 2 does not match')
        else if(password_1<=6)alert('password lenght must be greater then 6')
        else  alert('Invalid input')
      }
      let navigate = useNavigate();
      useEffect(()=>{
        loginpage&& window.confirm("Sing up Successful")
        loginpage && navigate("/login", { replace: true });
       
      },[loginpage])
    return (
        <div className="SingUpFrom">
             <br /> <br /> <br />
        <section class="vh-100">
          
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form class="mx-1 mx-md-4">
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control" name="username"  value={newUser.username}
              onChange={handleChange} 
              required/>
                            <label class="form-label" for="form3Example1c">Your Name</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" name="email"  value={newUser.email}
              onChange={handleChange} 
              required />
                            <label class="form-label" for="form3Example3c" >Your Email</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example4cd" class="form-control" 
                            name="institution"  value={newUser.institution}
                            onChange={handleChange}
                            required/>
                            <label class="form-label" for="form3Example4cd">Institution Name</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="number" id="form3Example4cd" class="form-control" 
                            name="age"  value={newUser.age}
                            onChange={handleChange}
                            required/>
                            <label class="form-label" for="form3Example4cd">Age</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="number" id="form3Example4cd" class="form-control" 
                            name="class"  value={newUser.class}
                            onChange={handleChange}
                            required/>
                            <label class="form-label" for="form3Example4cd">Which class do you read?</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" 
                            name="password_1"  value={newUser.password_1}
                            onChange={handleChange}
                            required/>
                            <label class="form-label" for="form3Example4c" 
                            name="username" >Password</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control" 
                            name="password_2"  value={newUser.password_2}
                            onChange={handleChange}
                            required/>
                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>
                     
      
                        <div class="form-check d-flex justify-content-center mb-5">
                        
                          <label class="form-check-label" for="form2Example3">
                            I have alrady account     <NavLink to="/login" exact className="nav-link"><a href="">Login</a> </NavLink>
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

export default SingUp;