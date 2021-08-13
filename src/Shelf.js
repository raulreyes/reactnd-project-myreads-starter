import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

class Shelf extends Component {

render () {
    const { title, books } = this.props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                     <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                            {book.authors.length>1 ? (book.authors.join(', ')) : (book.authors)}
                        </div>
                    </div>
                    </li> 
                    )
                )}q
                </ol>
                            </div>
        </div>
    )
}

}

export default Shelf