import './StoryCard.css';
import { Link } from 'react-router-dom';
import React from 'react'

export default function StoryCard({ id, title, byLine, abstract, url, imgLarge, imgThumb }) {
  return (
    <Link to={`/${id}`} id={id} className="story-link">
      <div className="story-card" style={{ backgroundImage: `url(${imgThumb})` }}>
        <span className="story-title">{title}</span>
        <span className="story-by">{byLine}</span>
      </div>
    </Link>
  )
}
