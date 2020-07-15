console.log("Before");
getUser(1, function (user) {
  console.log("User", user);

  getRepositories(user.gitHubUsername, function (repos) {
    console.log("Repositories", repos);
  });
}); 
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database ...");
    callback({ id: id, gitHubUsername: "Pedro" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Finding the repositories ...");
    callback(["Repo One", "Repo Two", "Repo Three"]);
  }, 2000);
}