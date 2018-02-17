import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


//practicing moment.js
// const now = moment();
// console.log(moment.unix("1546194600").format("dddd, MMMM Do YYYY, h:mm:ss a"));
// console.log(moment().add(4, 'days').valueOf());
// console.log(moment(1518718705810));

export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      amount:props.expense ? (props.expense.amount).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt): moment(),
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      error: '',
      calenderFocused: false
    };
  }


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}));
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({createdAt}));
  };

  onCalenderFocusChange = ({focused}) => {
    this.setState(() => ({calenderFocused: focused}));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({error: 'Please provide description and amount.'}))
    }else{
      this.setState(() => ({error: ''}));
      this.props.onExpenseSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onCalenderFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br/>
          <textarea
            placeholder="Add a note for your expenses (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <br/>
          <button>Add Expenses</button>
        </form>
      </div>
    )
  }
};