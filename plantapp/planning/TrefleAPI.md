In order to run node-fetch code, I had to run 
    npm install node-fetch

I could not get node-fetch to work without running into
    Access to fetch at 'https://trefle.io/api/v1/plants?token=dnI608FIjKz6IAXIegM-1eSy7kUmvFg-Tg88MEdHBWs' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

So I am now trying to use axios like we learned, but that is not in the documentation of Trefle. 

still had a CORS issue. Ran npm install cors --save

and put this in index.js
    var cors = require('cors')
    app.use(cors())

this did not work. 