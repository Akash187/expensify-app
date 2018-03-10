import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDQxej6ltkoI7n66HWMgUnAhCK-wTpHJws",
  authDomain: "expensify-ae35b.firebaseapp.com",
  databaseURL: "https://expensify-ae35b.firebaseio.com",
  projectId: "expensify-ae35b",
  storageBucket: "expensify-ae35b.appspot.com",
  messagingSenderId: "978853571193"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  console.log(`${snapshot.val().name} is a ${snapshot.val().job} at ${snapshot.val().location.city}`)
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data Fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(23);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off("value",onValueChange)
// }, 7000);
//
//
// setTimeout(() => {
//   database.ref('age').set(32);
// }, 10500);


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch(function (error) {
//     console.log("Error fetching data " + error.message)
// });

// database.ref().set({
//   name: 'Akash Kumar',
//   age: 20,
//   job: "Software Developer",
//   isSingle: true,
//   location: {
//     city: "Lucknow",
//     country: "India"
//   }
// }).then(() => {
//   console.log('Data is saved.')
// }).catch((e) => {
//   console.log('This failed - ', e);
// });
//
// database.ref().update({
//   job: "Manager",
//   'location/city': "Hyderabad"
// }).then();

// database.ref('isSingle').remove()
//   .then(function () {
//     console.log("Remove succeeded.")
//   })
//   .catch(function (error) {
//     console.log("Remove failed: " + error.message)
//   });

