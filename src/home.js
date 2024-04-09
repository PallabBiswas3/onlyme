import React from "react";
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <span className="background-image">
                <img src={process.env.PUBLIC_URL + '/image/' + 'image.png'} alt="background" className="background-image" />
            </span>
            <span className="content">
                <h1 className="home-heading">Book Shop Template</h1>
                <p className="home-heading1">
                    TEMPLATE FOR BOOKSTORES, COLLECTIBLES. Book Shop is a free eCommerce website template built with newest version of WordPress, WooCommerce, Elementor, and WooVina theme. It comes with a unique homepage layout that prominently displays categories and a variety of products in an arrangement that is popular with bookstores and collectibles.
                </p>
            </span>
        </div>
    );
}

export default Home;

