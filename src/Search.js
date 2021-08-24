import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI";



class Search extends Component {
  state = {
    query: "",
    booksFound: [],
    invalidTerm: false,
}

userQuery = (query) => {
    let searchTerm = query.trim();
    this.setState({ query: query });
    if(query === ""){
      this.setState({ booksFound: [] });
      return;
    }
    BooksAPI.search(searchTerm).then((queriedBooks) => {
      queriedBooks.error
      ?
       this.setState({booksFound: [], invalidTerm: true})
      :
       this.setState({booksFound: queriedBooks, invalidTerm: false});
    })
}

clearQuery = () => {
    this.userQuery('')
}

displayBooks = (booksFound, books) => {
  return booksFound.map((booksFound) => {
    const index = books.findIndex((books) => books.id === booksFound.id);
    index !== -1 ? (booksFound.shelf = books[index].shelf) : (booksFound.shelf = "none");
    return booksFound

  });

}
    render() {
      const { query, booksFound, invalidTerm } = this.state
      const { books, onShelfUpdate } = this.props
      console.log(this.state.booksFound)

      return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.userQuery(event.target.value)}
                  
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {this.displayBooks(booksFound,books).map((booksFound) => {
                        return (
                        <li key={booksFound.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${booksFound.imageLinks.smallThumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={booksFound.shelf} onChange={(e) => onShelfUpdate(booksFound, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{booksFound.title}</div>
                            <div className="book-authors">
                            {/* {booksFound.authors.length>1 ? (booksFound.authors.join(', ')) : (booksFound.authors)} */}
                            </div>
                        </div>
                        </li> 
                          )
                        }
                      )
                    }
                  </ol>
                  {invalidTerm ? <p>No Books found, try again</p> : null }
            </div>
          </div>
        )
    }
}

export default Search