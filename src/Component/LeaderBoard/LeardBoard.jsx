import React, { useContext, useEffect, useState } from 'react';
import rajibsir from '../Image/Abdullah Rajib SIr.jpeg';
import Asifsir from '../Image/Asif Sir.jpeg';
import cources from '../Image/Cources 1.jpg';
import jahangirsir from '../Image/Jahangir Sir.jpeg';
import rajsee from '../Image/Rajosree Sir.jpeg';
import './LeardBoard.css'
const LeardBoard = () => {
    const[data,setData]=useState([])
    useEffect(()=>{  
        fetch('http://localhost:5000/singup/Score',{
          method: 'GET',
          headers:{
            'Content-Type' : 'application/json',
            "authorization" : `Bearer ${sessionStorage.getItem("Token")}`
          }
        })
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])
    
    return (
        <div className='container LeaderBoard'>
            <div className="row top3">

                    <h1> <span className='mozar'>Top</span> <span className='sate'>Gainers</span> </h1>
                    <div className="col-md-3">
                    <div class="card">
  <img src={Asifsir} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Nahidul Islam Sayel</h5>
    <p class="card-text">He Solve The Quiz within 1 minite</p>
   
  </div>
</div>
                    </div>
                    
                    <div className="col-md-3">
                    <div class="card">
  <img src={jahangirsir} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Umor Faruk Jahangir</h5>
    <p class="card-text">He Solve The Quiz within 2 minite</p>
   
  </div>
</div>
                    </div>
                    <div className="col-md-3">
                    <div class="card">
  <img src={rajibsir} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Md. Abdullah Rajib</h5>
    <p class="card-text">He Solve The Quiz within 3 minite</p>
   
  </div>
</div>
                    </div>
              
            </div>
            <br /> <br /> <br />
            <h4>All User</h4>
            <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Institude</th>

    </tr>
  </thead>
  <tbody>
  {data && data.map(data=>   <tr>
    <th scope="row">{data.username}</th>
      <td>{data.number}</td>
      <td>{data.Institude}</td>
    </tr>)}
   
  </tbody>
</table>
            
        </div>
    );
};

export default LeardBoard;