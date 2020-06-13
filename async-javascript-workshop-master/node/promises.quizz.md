# Question 1 - (10min)

Create a promise version of the async readFile function

```js
const fs = require("fs");

function readFile(filename, encoding) {
  return fs.readFile(filename, encoding, (err, data) => {
      if(err) return err;
      return data;
  });
}
readFile("./files/demofile.txt", "utf-8")
    .then(...)
});
```

# Question 2

Load a file from disk using readFile and then compress it using the async zlib node library, use a promise chain to process this work.

```js
const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) => {
      zlib.gzip(data, (err, result) => {
        if(err) reject(err);
        resolve(result);
    });
  })
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./files/demofile.txt", "utf-8")
    .then(
      data => {
        gzip(data).then(
          res => {console.log(res)},
          err => {console.error("failed :", err)}
        )
      },
      err => {console.error("failed to load :", err)}
    ); 

```

# Question 3

Convert the previous code so that it now chains the promise as well.

const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) => {
      zlib.gzip(data, (err, result) => {
        if(err) reject(err);
        resolve(result);
    });
  })
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./files/demofile.txt", "utf-8")
    .then(
      data => {
        return gzip(data)
      },
      err => {console.error("failed to load :", err)}
    ).then(
          res => {console.log(res)},
          err => {console.error("failed :", err)}
        );

# Question 4

Convert the previous code so that it now handles errors using the catch handler

const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) => {
      zlib.gzip(data, (err, result) => {
        if(err) reject(err);
        resolve(result);
    });
  })
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./files/demofile2.txt", "utf-8")
    .then( data => {return gzip(data)})
    .catch( err => {console.error("failed to load :", err)})
    .then(res => {console.log(res)})
    .catch(err => {console.error("failed :", err)});    

# Question 5

Create some code that tries to read from disk a file and times out if it takes longer than 1 seconds, use `Promise.race`

```js
function readFileFake(sleep) {
  return new Promise(resolve => setTimeout(resolve, sleep, "read"));
}

function timeOut(sleep){
  return new Promise(reject => setTimeout(reject, sleep, "Timeout"));
}

Promise.race([readFileFake(5000), timeOut(5000)])
  .then(data => console.log(data))
  .catch(err => console.log(err));

 // This resolves a promise after 5 seconds, pretend it's a large file being read from disk
```

# Question 6

Create a process flow which publishes a file from a server, then realises the user needs to login, then makes a login request, the whole chain should error out if it takes longer than 1 seconds. Use `catch` to handle errors and timeouts.

```js
function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race( [publish(), timeout(3000)])
  .then(...)
  .then(...)
  .catch(...);
```
