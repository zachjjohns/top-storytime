import './App.css';
import Header from "../Header/Header";
import StoryList from "../StoryList/StoryList";

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    }
  }
  
  render() {
    return (
      <>
        <Header />
        <StoryList />
      </>
    )
  }
}

