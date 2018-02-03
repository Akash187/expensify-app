//destructuring object.

const person = {
  name: 'Andrew',
  age: 26,
  location:{
    city: 'Philedelphia',
    temp: 92
  }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`);

const {city, temp : temperature} = person.location;
if(city && temperature){
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'penguin'
  }
};

const {name: publisherName = 'Self Publisher'} = book.publisher;

console.log(publisherName);

//------------------------------------------------//

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philedelphia', 'Pennsylvania', '19147'];

const [, town, state = 'New York'] = address;

console.log(`You are in ${town} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink = 'Coffee (cold)', , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}`);