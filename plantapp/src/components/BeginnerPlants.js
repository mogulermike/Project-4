import React from 'react';
import axios from 'axios';


// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://trefle.io/api/v1/plants?token=dnI608FIjKz6IAXIegM-1eSy7kUmvFg-Tg88MEdHBWs');
//   const json = await response.json();
//   console.log(json);
// })();

async function asyncFunc() {
    const resp = await axios.get(
        "https://trefle.io/api/v1/plants?token=dnI608FIjKz6IAXIegM-1eSy7kUmvFg-Tg88MEdHBWs"
    )

    console.log(resp)
}

asyncFunc()



const BeginnerPlants = () => {
    return (
        <div>
            <p>Beginner Plants Page</p>
        </div>
    )
}

export default BeginnerPlants;