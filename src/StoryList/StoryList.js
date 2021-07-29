import "./StoryList.css";
import StoryCard from '../StoryCard/StoryCard';
import React from 'react'

export default function StoryList({ stories }) {
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
  return (
    <>
      {storyCards}
    </>
  )
}
