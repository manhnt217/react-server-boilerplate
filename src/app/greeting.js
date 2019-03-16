import React, { Component, PropTypes } from 'react';
import styles from './style.module.css'

export default class Greeting extends Component {
  render() {
    return (
      <div className={styles.greeting}>
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
