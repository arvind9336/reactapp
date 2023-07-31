import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Rater from './Rater';
let a = [{ src: "images/ph3.webp", name: "Gaming Laptop", price: 40000 },
{ src: "images/ph4.jpeg", name: "Gaming Laptop", price: 50000 },
{ src: "images/mobile.jpg", name: "samsung", price: 15000}];
export default function Demo23() {
    return (
        <div className="conatiner">
                {
                    a.map(
                        (obj) => {
                            return (
                                <div className="card" style={{width: "18rem" , float : 'left', height : '900px', padding : '10px'}}>
                                    <img src={obj.src} className="card-img-top img-fluid" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{obj.name}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                        <Rater/>
                                </div>
    
                            )
                        }

                    )
                }
        </div>
    )
}
