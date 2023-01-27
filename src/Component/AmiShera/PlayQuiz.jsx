import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import bangla from '../Image/Bangla.jpg';
import eng from '../Image/Englist.jpg';
import math from '../Image/Math.jpg';
const PlayQuiz = () => {
    return (
        <div className='bookbg'>
        <div className="container">
            <br /><br /><br />
            <h2> <span className='mozar'>Academic</span>

                <span className='sate'> books</span>  <BsFillArrowRightCircleFill className='shikbo' /></h2>
            <div className="row">
                <div className="col-md-4 cd">
                    <div class="card">
                        <img class="card-img-top" src={math} alt="Card image cap" />
                        <div class="card-body">
                        <NavLink to="/Quiz" exact className="nav-link">
                        <a href="#" class="btn btn-primary">Play Quiz</a></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 cd">
                    <div class="card">
                        <img class="card-img-top" src={bangla} alt="Card image cap" />
                        <div class="card-body">
                        <NavLink to="/Quiz" exact className="nav-link">
                        <a href="#" class="btn btn-primary">Play Quiz</a></NavLink>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4 cd">
                    <div class="card">
                        <img class="card-img-top" src={eng} alt="Card image cap" />
                        <div class="card-body">
                        <NavLink to="/Quiz" exact className="nav-link">
                        <a href="#" class="btn btn-primary">Play Quiz</a></NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default PlayQuiz;