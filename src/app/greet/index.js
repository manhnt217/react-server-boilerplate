import React, { Component } from 'react';
// import styles from '../style.module.css'

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <hr></hr>
        Greeting
        <p>
          {this.props.message}
        </p>
        <hr></hr>
      </div>
    )
  }
}
