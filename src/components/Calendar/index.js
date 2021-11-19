import React, { Component } from 'react';
import { format, add } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date(),
    };
  }
  btnClickHandler = (duration) => {
    this.setState((state, props) => {
      const { day } = state;
      const newDate = add(day, duration);
      return { day: newDate };
    });
  };
  render() {
    const { day } = this.state;
    return (
      <div>
        <p>{format(day, "dd MMMM yy'year, 'cccc")}</p>
        <button onClick={() => this.btnClickHandler({ days: 1 })}>
          Add 1 day
        </button>
        <button onClick={() => this.btnClickHandler({ weeks: 1 })}>
          Add 1 week
        </button>
        <button onClick={() => this.btnClickHandler({ months: 1 })}>
          Add 1 month
        </button>
      </div>
    );
  }
}

export default Calendar;
