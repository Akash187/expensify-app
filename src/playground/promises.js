const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('something get wrong!.');
  }, 5500);
});

console.log('before');

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');