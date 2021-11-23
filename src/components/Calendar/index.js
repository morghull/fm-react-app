import React, { Component } from 'react';
import {
  format,
  add,
  startOfMonth,
  getWeeksInMonth,
  startOfWeek,
} from 'date-fns';

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
  getWeekForDate = (date) => {
    const week = [];
    let dayOfWeek = startOfWeek(date);
    for (let i = 0; i < 7; i++) {
      week.push({
        name: format(dayOfWeek, 'cccc'),
        date: dayOfWeek,
      });
      dayOfWeek = add(dayOfWeek, { days: 1 });
    }
    return week;
  };
  getWeekJsx = (week) => {
    return week.map(({ name, date }) => (
      <li key={name}>
        {name}: {format(date, "dd MMMM yy'year, 'cccc")}
      </li>
    ));
  };
  render() {
    const { day } = this.state;
    const week = this.getWeekForDate(day);
    console.log(week);
    return (
      <div>
        <p>{format(day, "dd MMMM yy'year, 'cccc")}</p>
        <p>{format(startOfMonth(day), "dd MMMM yy'year, 'cccc")}</p>
        <ul>{this.getWeekJsx(week)}</ul>
        <p>{getWeeksInMonth(day)}</p>
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
