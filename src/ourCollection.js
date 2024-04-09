import React from "react";
import './ourCollection.css';
import data from "./collection.json";

const OurCollection = () => {
    return (
        <div>
            <div className="header m-3"><h1>Our Collection</h1></div>
            <div className="ourCollection d-flex flex-wrap justify-content-center">
                {data.ourCollection.map((item, index) => (
                    <div key={index} className="card m-3" style={{ width: "18rem" }}>
                        <img src={process.env.PUBLIC_URL + '/image/' + item.image} className="card-img-top" alt="image" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}</p>
                            <p className="card-text">{item.review}</p>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-success">Buy Now</button>
                                <button type="button" className="btn btn-secondary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurCollection;