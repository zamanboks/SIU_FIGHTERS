import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
const UserProfile = () => {
    const[data,setData]=useState({});
  const[allUser,setAllUser]=useState([]);
  
  if(data.length>0){
    sessionStorage.setItem('Doclogin', true)
    
}
  useEffect(()=>{  
    fetch('http://localhost:5000/Singup/Profile?username='+sessionStorage.getItem('username'),{
      method: 'GET',
      headers:{
        'Content-Type' : 'application/json',
        "authorization" : `Bearer ${sessionStorage.getItem("Token")}`
      }
    })
    .then(res=>res.json())
    .then(res=>setData(res[0]))
},[])

useEffect(()=>{
     
  fetch('http://localhost:5000/Upload/UploadReportPost',{
    method: 'GET'
  })
  .then(res=>res.json())
  .then(res=>
 setAllUser(res) 
  )
},[])
const[search,setSearch]=useState("");
const[testname,setTestName]=useState("");
    return (
        <div>
     <section>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    class="rounded-circle img-fluid"/>
                  <h5 class="my-3">{data.username}</h5>
                  <p class="text-muted mb-1">{data.email} </p>
                  <p class="text-muted mb-4">{data.institution}</p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">Follow</button>
                    <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
        
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{data.username}</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Emalil</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{data.email}</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Institution</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{data.institution}</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                      </p>
                      <p class="mb-1">Web Design</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar"  aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">Website Markup</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar" aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">One Page</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar" aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" >Mobile Template</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar" aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">Backend API</p>
                      <div class="progress rounded mb-2">
                        <div class="progress-bar" role="progressbar" aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                      </p>
                      <p class="mb-1">Web Design</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar"  aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">Website Markup</p>
                      <div class="progress roundeed">
                        <div class="progress-bar" role="progressbar"  aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">One Page</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar" aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">Mobile Template</p>
                      <div class="progress rounded">
                        <div class="progress-bar" role="progressbar" aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1">Backend API</p>
                      <div class="progress rounded mb-2">
                        <div class="progress-bar" role="progressbar" aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
};

export default UserProfile;