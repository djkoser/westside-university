import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    };

  };

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(students => this.setState({ students: students.data }))
      .catch(err => console.log(err))
  }
  render() {
    const { students } = this.state;
    let studentList = students.map(student => (
      <Link key={student.id} to={`/student/${student.id}`}>
        <h3>{`${student.first_name} ${student.last_name}`}</h3>
      </Link>

    ))
    return (
      <div>
        <svg onClick={() => this.props.history.goBack()} className="arrow" width='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M3 12l7-9v4.99L21 8v8H10v5l-7-9z" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
        <div className="box">
          <h1>{this.props.match.params.class}</h1>
          <h2>ClassList:</h2>
          {studentList}
        </div>
      </div>
    )
  }
}