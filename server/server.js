// importing/required/include express
const express = require ('express');

//single application created to listen on specific IP and port, for that we need to 
//instantiate this single server by calling express function
const app = express();

//create a middleware
const fileServerMiddleware = express.static('public');

//for application to use the middleware we need to mount it on the application
app.use('/', fileServerMiddleware);

//start the server and let it server the HTTP request
app.listen(3000, () => {
  console.log("App started at port 3000");
});