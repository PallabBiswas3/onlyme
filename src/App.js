import react from 'react';
import Navbar from './navbar';
import './App.css';
import Home from './home';
import OurCollection from './ourCollection';
import BestSelling from './bestSelling';
import Review from './review';
import Contact from './contact';
import Footer from './footer';
function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <OurCollection />
            <BestSelling />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
}
export default App;
