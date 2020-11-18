import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HomeCSS = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
margin: 20px;

div {
    display: flex;
    flex-direction: row;
    margin: 20px;

}

div div{
    height: 100px;
    width: 100px;
    background: linear-gradient(145deg, #bbbbbb, #111111);
    box-shadow:  5px 5px 10px #999999, 
             -5px -5px 10px #ffffff
}

#quotes{
    display: flex;
    flex-direction:column;
    align-items: center;
    h1{
        margin-top:200px;
    }
}

#pictures {
    display: flex;
    flex-direction: column;
    margin: 40px;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
        margin: 40px;
    }

}

#title {
    display:flex;
    flex-direction: column;
    justify-content: center;
    
}

#pic{
    display: flex;
    justify-content: center;
    width: auto;
    max-width: 120px;
    height: auto;
    max-height: 80px;
    margin-bottom:100px;
  }

#title{
    height:500px;
    h1{
        text-shadow: 4px 4px 8px #000000;
        font-size:60px;
    }
}
h1{
    text-shadow: 4px 4px 8px #000000;
    font-size:40px;
}

}

`


const HomePage = () => {
    return (
        <HomeCSS>
            
            <div id="title"> <h1>Welcome to your guide to houseplants</h1></div>
           
            <div id="space"></div>
            <div id="pic">
                    <img src="./plants.png" alt="img"></img>
                    <img src="./plants.png" alt="img"></img>
                    <img src="./plants.png" alt="img"></img>
            </div>
            <h1>Why You Should Have Houseplants</h1>


            <div id="quotes">
                <h1>Purify the air</h1>
                <h1>Bring life into your living space</h1>
                <h1>Gives you something you can control and notice progress</h1>
                <h1>Shows you what just a little care can do.</h1>
                <h1>Great conversation starter</h1>
                <h1>Easy to propogate and give as gifts</h1>
                <h1>Adds good vibes to any room. Just ask this dog. </h1>

            </div>

            <div id="pictures">
                <img src = "https://preview.redd.it/2fbfl3pzhpn41.jpg?width=640&crop=smart&auto=webp&s=4fa4e7d94f5717e4fcf9d8885761e3cd6730b10f" alt="img"/>
                <img src = "https://preview.redd.it/k74m2qsniv651.jpg?width=960&crop=smart&auto=webp&s=db4db4a9b210ea67c22a1fda05a9d04b2f550df3" alt="img"/>
                <img src = "https://preview.redd.it/35ztqoj7ijl51.jpg?width=640&crop=smart&auto=webp&s=08028ae060da36e4610d781c1442dcd745967db9" alt="img"/>

            </div>




            <div id = "homeNav">
                <Link to="/BeginnerPlants">
                    <div className="card">
                        Beginner Plants Page
                    </div>
                </Link>

                <Link to="/BeginnerPage">
                    <div className="card">
                        Beginner Plants Page
                    </div>
                </Link>

                <Link to="/BeginnerPage">
                    <div className="card">
                        Beginner Plants Page
                    </div>
                </Link>
                
            </div>
        </HomeCSS>
    )
}

export default HomePage;