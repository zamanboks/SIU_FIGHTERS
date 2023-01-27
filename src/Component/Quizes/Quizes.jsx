import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import img1 from "../Image/Quiz/Apple Add.jpeg";
import img2 from "../Image/Quiz/Apple2.jpeg";
import img3 from "../Image/Quiz/Apple3.jpeg";
import img4 from "../Image/Quiz/Count number.jpeg";
import img5 from "../Image/Quiz/Count.jpeg";
import img6 from "../Image/Quiz/Count11.jpeg";
import img7 from "../Image/Quiz/CountNumber.jpeg";
import img8 from "../Image/Quiz/MinVSMX.jpeg";
import "./Quizes.css";
let x =1;
const Quizes = () => {
    const[num,setNum]=useState(0);
  
    const handleChange = ()=>{
        x+=1;
        setNum(x);
        console.log(num)
    }
    const handlesubmit=()=>{
        console.log(num)
      const number={
            totalNumber: num,
            name: sessionStorage.getItem('username'),
            University: "Sylhet Internationl Universiy"

      }
        axios.post('http://localhost:5000/Singup/add', number )
        .then(res=>console.log(res.json()));
    }
   
      

    return (
        <div className="quiz">
            <br /> <br /> <br />
            <div className="container">
                <div className="col-md-8">
                    <img src={img1} alt="" srcset="" className="quezimg" />
                </div>
                <br /> <br /> <br />
                <div className="radioInput row">
                    <h3>1. Choice The Write answer?</h3>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yes" value="yes" onChange={handleChange} />
                        <label for="yes">8</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="noo" value="noo" />
                        <label for="no">9</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yess" value="yess" />
                        <label for="yes">10</label>
                    </div>

                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="no" value="no" />
                        <label for="no">11</label>
                    </div>
                </div>
                <br /> <br /> <br />
                <div className="col-md-8">
                    <img src={img2} alt="" srcset="" className="quezimg" />
                </div>
                <br /> <br /> <br />
                <div className="radioInput row">
                    <h3>2. Choice The Write answer?</h3>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yes" value="yes"
                        onChange={handleChange}  />
                        <label for="yes">1</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="noo" value="noo" />
                        <label for="no">2</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yess" value="yess" />
                        <label for="yes">3</label>
                    </div>

                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="no" value="no" />
                        <label for="no">4</label>
                    </div>
                </div>
                <br /> <br />
                <div className="col-md-8">
                    <img src={img3} alt="" srcset="" className="quezimg" />
                </div>
                <br /> <br /> <br />
                <div className="radioInput row">
                    <h3>3.Choice The Write answer?</h3>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yes" value="yes"
                        onChange={handleChange}  />
                        <label for="yes">8</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="noo" value="noo" />
                        <label for="no">9</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yess" value="yess" />
                        <label for="yes">10</label>
                    </div>

                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="no" value="no" />
                        <label for="no">111</label>
                    </div>
                </div>
                <br /> <br />
                <div className="col-md-8">
                    <img src={img4} alt="" srcset="" className="quezimg" />
                </div>
                <br /> <br /> <br />
                <div className="radioInput row">
                    <h3>4.Choice The Write answer?</h3>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yes" value="yes" 
                        />
                        <label for="yes">0</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="noo" value="noo"
                        onChange={handleChange}  />
                        <label for="no">1</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yess" value="yess" />
                        <label for="yes">2</label>
                    </div>

                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="no" value="no" />
                        <label for="no">3</label>
                    </div>
                </div> <br /> <br />
                <div className="col-md-8">
                    <img src={img8} alt="" srcset="" className="quezimg" />
                </div>
                <br /> <br /> <br />
                <div className="radioInput row">
                    <h3>5. which number is big?</h3>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="yes" value="yes" />
                        <label for="yes">10</label>
                    </div>
                    <div className="col-md-2">
                        <input type="radio" name="my-input" id="noo" value="noo" onChange={handleChange} />
                        <label for="no">15</label>
                    </div>
                    
                </div>
                <br />
                <button className='btn btn-primary' onClick={handlesubmit}>Submit</button>   
                <br /> <br />
               
                <br /> <br /> <br />
             
            </div>
            
        </div>
    );
};

export default Quizes;
