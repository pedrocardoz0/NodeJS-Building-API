console.log("Before");
getUser( 1, gRepositories ); 
console.log("After");

function gRepositories(user) {
  getRepositories(user.gitHubUsername, gCommits)
  console.log(user)
}

function gCommits(repos) {
  getCommits(repos, displayCommits)
  console.log(repos)
}

function displayCommits(commits) {
  console.log(commits)
}


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

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Reading Commits from a database ...")
    callback(['Commit One', 'Commit Two', 'Commit Three'])
  }, 2000)
}