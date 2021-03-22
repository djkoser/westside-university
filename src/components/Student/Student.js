import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    };
  };

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(studentInfo => this.setState({ studentInfo: studentInfo.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { studentInfo } = this.state;
    return (
      <div>
        <svg onClick={()=> this.props.history.goBack()}className="arrow" width='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M3 12l7-9v4.99L21 8v8H10v5l-7-9z" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
        <div className="box">
          <h1>Student</h1>
          <h1>{`${studentInfo.first_name} ${studentInfo.last_name}`}</h1>
          <h3>{`Grade: ${studentInfo.grade}`}</h3>
          <h3>{`Email: ${studentInfo.email}`}</h3>
        </div>
      </div>
    )
  }
}