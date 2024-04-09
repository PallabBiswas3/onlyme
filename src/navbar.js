import react from 'react';
import './navbar.css';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/ourCollection">All Products</a>
                </li>
                <li>
                    <a href="/BestSelling">Best Selling</a>
                </li>
                <li>
                    <a href="/reviews">Reviews</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/footer">Footer</a>
                </li>
            </ul>
        </nav>
    );



}
export default Navbar;