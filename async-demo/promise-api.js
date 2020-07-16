const p = Promise.reject(new Error("Error Message"))
p.catch(err => console.log(err))