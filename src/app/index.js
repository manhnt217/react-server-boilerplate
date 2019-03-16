import React, { Component, PropTypes } from 'react';
import Greeting from './greeting'
import styles from './style.module.css'

export default class App extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div className={styles.banner}>
        <label>Awesome</label>
        <Greeting message={`hello world ${isMobile ? 'mobile' : 'desktop'}`}></Greeting>
      </div>
    );
  }
}
