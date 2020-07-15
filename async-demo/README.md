# Async Javascript
-----

### It's really important to we understand how does it works, because async code is a quite often in complex code.

#### In this example above we can see a short piece of that.

![](img/index-f55332f6ae.png)

#### I line 2 we are callin the function getUser and passin one as a parameter, if we see the line 7 we have setTimeout in the block, and what its going to happen is that the return from line 12 is going to appear and then the stament inside the setTimeout is going to run again, but, the return is not going anymore to appear.


#### Callback, Promises and Async Await are one of the options to get the result from a asynchronous operation.