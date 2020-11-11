import React from 'react';
import { NavLink } from 'react-router-dom';





const HomePage = () => {
    return (
        <div className = "homeNav">
            <p>HomePage</p>

            <a href="http://localhost:3000/BeginnerPlants">
                <div className="card">
                    Beginner Plants Page
                </div>
            </a>
            <a href="http://localhost:3000/BeginnerPlants">
                <div className="card">
                    Beginner Plants Page
                </div>
            </a>
            <a href="http://localhost:3000/BeginnerPlants">
                <div className="card">
                    Beginner Plants Page
                </div>
            </a>
                
                
                {/* <nav>
                <NavLink to="/BeginnerPage">Beginner Plants</NavLink>
                <NavLink to="/BeginnerPage">Beginner Plants</NavLink>
                <NavLink to="/BeginnerPage">Beginner Plants</NavLink>
                </nav>
            </div> */}
        </div>
    )
}

export default HomePage;