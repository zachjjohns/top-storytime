import "./App.css";
import Header from "../Header/Header";
import StoryList from "../StoryList/StoryList";
import StoryDetails from "../StoryDetails/StoryDetails";
import { getHomeStories } from "../apiCalls";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      error: "",
    };
  }

  getStory = (date) => {
    return this.state.stories.find(story => story.published_date === date);
  };

  componentDidMount = async () => {
    try {
      const fetchedStories = await getHomeStories();
      this.setState({ stories: fetchedStories.results });
    } catch {
      this.setState({ error: "Oops! Failed to get NY Times Story data" });
    }
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <StoryList stories={this.state.stories} />
          </Route>
          <Route
            path="/:published_date"
            render={({ match }) => {
              const { published_date } = match.params;
              console.log(published_date);
              let story = this.getStory(published_date);
              console.log(story);
              return <StoryDetails story={story}/>;
            }}
          />
        </Switch>
      </>
    );
  }
}
