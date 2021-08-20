import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import Search from './Search'
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     //showSearchPage: false
  }

  history

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            < BookList />
          )} 
          />
          <Route exact path="/search"  render={({ history }) => (
            <Search
              // history={history.push('/')}
            />
          )}
          />
      </div>
    )
  }
}

export default BooksApp