import moment from "moment";

export default [{
  id: '1',
  description: 'January Rent',
  note: 'This was the final payment for that address',
  amount: 54500,
  createdAt: 0
},{
  id: '2',
  description: 'Water Bill',
  note: 'This was the final payment for that address',
  amount: 14500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  description: 'Gas bill',
  note: 'This was the final payment for that address',
  amount: 10500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];