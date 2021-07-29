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

  getStory = (title) => {
    return this.state.stories.find(story => story.title === title);
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
    console.log(this.getStory("nyt://article/47562e7a-343c-5ab5-a7f4-085f55ee3d94"))
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <StoryList stories={this.state.stories} />
          </Route>
          <Route
            path="/:title"
            render={({ match }) => {
              console.log(match.params);
              const { title } = match.params;
              let story = this.getStory(title);
              return <StoryDetails story={story} title={title} />;
            }}
          />
        </Switch>
      </>
    );
  }
}
