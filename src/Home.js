import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = 'home'>
            <div className="home__container">
                <img className = "home__image" src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg" alt='Banner'/>
                <div className="home__row">
                    <Product 
                        id = {234342}
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
