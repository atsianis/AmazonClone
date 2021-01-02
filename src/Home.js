import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = 'home'>
            <div className="home__container">
                <img className = "home__image" src = "https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" alt="Amazon Banner"/>
                <div className="home__row">
                    <Product 
                        title="The lean startup" 
                        price={19.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home;
