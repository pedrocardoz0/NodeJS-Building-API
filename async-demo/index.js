console.log("Before");

getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits " + commits))
  .catch((err) => console.log("Error" + err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database ...");
      resolve({ id: id, gitHubUsername: "Pedro" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Finding the repositories ...");
      resolve(["Repo One", "Repo Two", "Repo Three"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Commits from a database ...");
      resolve(["Commit One", "Commit Two", "Commit Three"]);
    }, 2000);
  });
}
