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
      search: '',
      error: '',
    };
  }

  componentDidMount = async () => {
    try {
      const fetchedStories = await getHomeStories();
      this.setState({ stories: fetchedStories.results });
    } catch {
      this.setState({ error: "Oops! Failed to get NY Times Story data" });
    }
  };

  getStory = (date) => {
    return this.state.stories.find((story) => story.published_date === date);
  };

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  removeSearchValue = () => {
    this.setState({search: ''});
  }

  render() {
    return (
      <>
        <Header searchValue={this.state.search} handleChange={this.handleChange} />
        <Switch>
          <Route exact path="/">
            <StoryList stories={this.state.stories} searchValue={this.state.search}/>
          </Route>
          <Route
            path="/:published_date"
            render={({ match }) => {
              const { published_date } = match.params;
              let story = this.getStory(published_date);
              return <StoryDetails story={story} />;
            }}
          />
        </Switch>
      </>
    );
  }
}
