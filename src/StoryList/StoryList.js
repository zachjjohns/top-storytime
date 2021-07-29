import "./StoryList.css";
import StoryCard from '../StoryCard/StoryCard';
import React from 'react'

export default function StoryList({ stories, searchValue }) {
  const storyCards = stories.map(story => {
    return (
      <StoryCard
        id={story.published_date}
        key={story.uri}
        title={story.title}
        byLine={story.byline}
        abstract={story.abstract}
        url={story.url}
        imgLarge={story.multimedia[0].url}
        imgThumb={story.multimedia[3].url}
      />
    )
  })

  if (searchValue) {
    const filteredStories = storyCards.filter(story => story.props.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      <main className="card-container">
        {!filteredStories.length && <h2>No stories match your search.</h2>}
        {filteredStories}
      </main>
    )
  }

  return (
    <main className="card-container">
      {storyCards}
    </main>
  )
}
