import { Link } from 'react-router-dom';
import './Home.css'
import beer from './beers.png'
import React from 'react';
import NewBeer from './new-beer.png'
import RandomBeer from './random-beer.png'

const Home = () => {

    return (
      <div className="home">
        <Link to="/allBeers" className="beer-index">
          <div>
            <img src={beer}></img>
            <h2>All Beers</h2>
            <p>
              Lorem fistrum la caidita se calle ustée mamaar ut. Ad ese pedazo
              de me cago en tus muelas incididunt officia ut ex sed. Diodenoo
              ese que llega nisi duis por la gloria de mi madre.
            </p>
          </div>
        </Link>
        <Link to="/new" className="beer-index">
          <div>
            <img src={NewBeer}></img>
            <h2>New Beer</h2>
            <p>
              Lorem fistrum la caidita se calle ustée mamaar ut. Ad ese pedazo
              de me cago en tus muelas incididunt officia ut ex sed. Diodenoo
              ese que llega nisi duis por la gloria de mi madre.
            </p>
          </div>
        </Link>
        <Link to="/allBeers" className="beer-index">
          <div>
            <img src={RandomBeer}></img>
            <h2>Random Beer</h2>
            <p>
              Lorem fistrum la caidita se calle ustée mamaar ut. Ad ese pedazo
              de me cago en tus muelas incididunt officia ut ex sed. Diodenoo
              ese que llega nisi duis por la gloria de mi madre.
            </p>
          </div>
        </Link>
      </div>
    );
    

}

export default Home