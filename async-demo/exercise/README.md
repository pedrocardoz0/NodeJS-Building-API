# Async Javascript Exercise

---

#### Talking a little bit about the code itself, lets just start.

```javascript

async function display() {
  try {
    const customer = await getCustomer(1);
    console.log("Customer: ", customer);
    if (customer.isGold) {
      const topMovies = await getTopMovies();
      console.log("Top Movies: ", topMovies);
      await sendEmail(customer.email, topMovies);
      console.log("The email was sent ");
    }
  } catch (err) {
    console.log("Error " + err.message);
  }
}
display();

```

#### Noitce that is we are using await we must to add async function, at the same time we need to use try catch statment the reason is because we need to catch the reject error from the promises.

#### If the customer is gold the continuos to run the others functions, if not there is any problem. If some some promise return an error, it will be diplayed in the console.


```javascript
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}
```
#### Take a look at this example above, we see that the return is a promise and it executes the async code (setTimeout) and at the final of that operation it return the reoslve object, that sooner will be shown in the function *display()*