import './StoryCard.css';
import { Link } from 'react-router-dom';
import React from 'react'

export default function StoryCard({ id, title, byLine, abstract, url, imgLarge, imgThumb }) {
  return (
    <Link to={`/${id}`} className="story-card" id={id}>
      <h2>{title}</h2>
    </Link>
  )
}
