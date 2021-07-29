import './StoryDetails.css';
import React, { Component } from 'react'

export default class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.story
    }
  }
  render() {
    return (
      <main>
        <h2>boop</h2>
      </main>
    )
  }
}