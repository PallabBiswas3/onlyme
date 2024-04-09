import React from "react";
import './review.css';
import data from "./collection.json";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Review = () => {
    return (
        <div>
            <div className="header"><h1>Review of Our Customers</h1></div>
            <div className="bestSelling d-flex flex-wrap justify-content-center">
                {data.reviews.map((item, index) => (
                    <div key={index} className="card m-3" style={{ width: "18rem" }}>
                        <img src={process.env.PUBLIC_URL + '/image/' + item.image} className="card-img-top" alt="image" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="rating">
                                <div className="rating">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i} className={`fa fa-star ${i < Math.round(item.rating) ? 'checked' : ''}`}></span>
                                    ))}
                                </div>

                            </div>
                            <p className="card-text">{item.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Review;