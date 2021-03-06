# Using Middleware
-----
### *Introduction*

#### Now we are going to talk a little bit about middleware, one of the core features of *express.js*, at this first moment we can consider that Middleware is a function that recieves *req, res and next* as parameters.

* Execute everything
* Change Objects and Response and Request
* Close the req res cycle
* Call Another Function

### *Example*
#### Remember to import the function. *const logger = require("./logger"), const auther = require("./auth")*
![ExampleUsingMiddleware](prints/index-2d2ebbe1e1.png)

#### Example of middleware function, remember allways to import and export, all the functions receives *req, res and next* as parameters

![FunctionMiddleware](prints/auth-3646ff56f1.png)

-----

## Built-in Middleware

#### Sometimes we are going to see some built-in middlewares like these bellow.

![BuiltinMiddleware](prints/index-1b4aacb4ac.png)

#### In line one we can pass the values throw urlendode form in postman, check it out.

![UrlEncoded](prints/urlencoded.png)

#### In line 2 if you try to acess the *file.txt* you will see that the file will be there for you.

-----

## Third-party Middleware

#### In this case we had used the npm i morgan package help us to log all the request to the server, it help us to see what's going on with the requests and the server. Each request is going to be shown in the console, but, if you want to change a little bit, you can save as a file.

![Morgan](prints/morgan.png)