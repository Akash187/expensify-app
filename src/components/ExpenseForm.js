import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//file below override some style provided by default in react-dates module
import './../styles/DatePicker_Style.css';

const now = moment();
console.log(now.format('MMMM Do YYYY'));

export default class ExpenseForm extends React.Component{
  state = {
    amount:'',
    createdAt: now,
    description: '',
    note: '',
    calenderFocused: false
  };

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

  render() {
    return (
      <div>
        <form>
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