import './App.css';
import Header from '../Header/Header';
import StoryList from '../StoryList/StoryList';
import { getHomeStories } from '../apiCalls';

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      error: '',
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedStories = await getHomeStories();
      console.log(fetchedStories.results)
      this.setState({ stories: fetchedStories.results })
    } catch {
      this.setState({ error: "Oops! Failed to get NY Times Story data"})
    }
  }
  
  render() {
    return (
      <>
        <Header />
        <StoryList stories={this.state.stories}/>
      </>
    )
  }
}

