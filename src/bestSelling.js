import React from "react";
import './bestSelling.css';
import data from "./collection.json";

const BestSelling = () => {
    return (
        <div>
            <div className="header"><h1>Best Selling Books</h1></div>
            <div className="bestSelling d-flex flex-wrap justify-content-center">
                {data.bestSelling.map((item, index) => (
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

export default BestSelling;