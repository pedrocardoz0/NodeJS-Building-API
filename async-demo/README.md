# Async Javascript
-----

### It's really important to we understand how does it works, because async code is a quite often in complex code.

#### In this example above we can see a short piece of that.

![](img/index-f55332f6ae.png)

#### I line 2 we are callin the function getUser and passin one as a parameter, if we see the line 7 we have setTimeout in the block, and what its going to happen is that the return from line 12 is going to appear and then the stament inside the setTimeout is going to run again, but, the return is not going anymore to appear.


#### Callback, Promises and Async Await are one of the options to get the result from a asynchronous operation.

-----
## Callbacks

#### To receive the result from an async function we need to use callbacks, in the example above you will see it more clear

![](img/index-4c16d641e5.png)

#### If we pay attention to line 11 and 18 we will se that we have callback as a parameter, and these params are passed in lines 2 and line 5. I the *getUser()* we are passing a void function that will be our callback, it recieves the user as a parameter, in the console.log() from line 3 we will se the entire object from line 14.


#### At line 5 we noiteced that we can acess the object properties and nother void *function()* and receives as parameter the repositories array, and then this function will run the *console.log()* and show in the console the repo array