import "./Header.css";
import { Link, Route } from "react-router-dom";
import React from 'react'

export default function Header({ searchValue, handleChange }) {
  return (
    <header>
      <Link to="/" className="app-title" aria-label="Return home"><h1>Top StoryTime</h1></Link>
      <Route exact path="/">
        <input type="search"
        className="search-stories"
        placeholder="Search Top Stories"
        value={searchValue}
        aria-label="Story search"
        onChange={(event) => handleChange(event)} />
      </Route>
    </header>
  )
}
