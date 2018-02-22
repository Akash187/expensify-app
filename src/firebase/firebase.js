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

database.ref().set({
  name: 'Akash Kumar',
  age: 20,
  isSingle: true,
  location: {
    city: "Lucknow",
    country: "India"
  }
});

database.ref('age').set(27);
database.ref('location/city').set('Delhi');

database.ref('attributes').set({
  height: 168,
  weight: 65
});

