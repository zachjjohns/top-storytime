import './StoryDetails.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.story,
      error: "",
    }
  }
  
  render() {
    if (!this.state.story) {
      return (
      <div className="details-error">
        <h2>Story not found! Please reload or return home</h2>
        <Link to ="/" aria-label="Return Home">Return Home</Link>
      </div>
      )
    }
    return (
      <main className="details-container">
        <h2 className="details-title">{this.state.story.title}</h2>
        <h3 className="details-abstract">{this.state.story.abstract}</h3>
        <h4 className="details-byline">{this.state.story.byline}</h4>
        <h4 className="details-published">Published on: {this.state.story.published_date.substring(0, 10)}</h4>
        <a href={this.state.story.url} className="details-link">Click here to view the article on NYTimes.com</a>
        <img src={this.state.story.multimedia[0].url} alt={this.state.story.multimedia[0].caption} className="details-img"/>
      </main>
    )
  }
}