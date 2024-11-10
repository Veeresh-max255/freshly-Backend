// // console.log("Hello,World Js");
// var slugify = require('slugify')

// let a = slugify('some st#%$#$%$^#%ring') // some-string
// console.log(a);
// // if you prefer something other than '-' as separator
// let b = slugify('some s%#@^$%^*^&*)ptring', '_') 
// console.log(b);


//  Video 86: npm i express jsonwebtoken dotenv

// JWT (jsonwebtoken): Used for securely transmitting information and handling authentication tokens in your app.
// dotenv: Loads environment variables from a .env file to securely manage sensitive data like API keys or database credentials.
// Express: Web framework for building server-side applications, handling HTTP requests, routing, and middlewares.
// By combining these three packages, you can securely authenticate users in your web app and protect routes with JWT authentication
// crreatinng server.. server
const { createServer } = require('node:http');  // npm i nodemon
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');  // change the set header from text/plain to text/html 
                                               //at last if usinggg html
  res.end('Hello World <h1>Divya<h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
   
// see here we used require keyword for the package.. which loads package syncronouslyy that is blocking the code
// for asynchronous we add type as module in json, which uses import and loads asynchronously... as below

// import { createServer } from 'node:http';
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World  <h2> Divya </h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// $ nvm use 16
// Now using node v16.9.1 (npm v7.21.1)
// $ node -v
// v16.9.1
// $ nvm use 14
// Now using node v14.18.0 (npm v6.14.15)
// $ node -v
// v14.18.0
// $ nvm install 12
// Now using node v12.22.6 (npm v6.14.5)
// $ node -v
// v12.22.6         //nvm for managing different version of npm....

// importing and exportingg

// type = module

// import {a,b,d} from "./module.js";
// console.log(a,b,d);

// import vkk from "./module.js"
// console.log(vkk)


// type = common js

const a =  require("./comjs.js");
console.log(a,__dirname,__filename);  


// the common js file will be wrapped unnder the function 

// with parameter exports,module,require,__dirname,__filename..
// So this comes more easily...