import "./Header.css";

import React from 'react'

export default function Header({ searchValue, handleChange }) {
  return (
    <header>
      <h1 className="app-title">Top StoryTime</h1>
      <input type="search"
      placeholder="Search Top Stories"
      value={searchValue}
      onChange={(event) => handleChange(event)} />
    </header>
  )
}
