import './App.css';
import Header from '../Header/Header';
import StoryList from '../StoryList/StoryList';
import StoryDetails from '../StoryDetails/StoryDetails';
import { getHomeStories } from '../apiCalls';
import { Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/'>
              <StoryList stories={this.state.stories} />
            </Route>
            <Route
            exact path="/:id"
            render={({ match }) => {
              const id  = match.params.id;
              return <StoryDetails id={id} />
            }}/>
          </Switch>
      </>
    )
  }
}

