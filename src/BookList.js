import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { updateStatement } from 'typescript'
//import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class BookList extends Component {
   

render () {
    const { books, onShelfUpdate } = this.props
    const currentlyReading = books.filter(shelf => shelf.shelf === 'currentlyReading')
    const wantToRead = books.filter(shelf => shelf.shelf === 'wantToRead')
    const read = books.filter(shelf => shelf.shelf === 'read')

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf
                    title="Currently Reading"
                    books={currentlyReading}
                    onShelfChange={onShelfUpdate}
                    />
                    <Shelf
                    title="Want To Read"
                    books={wantToRead}
                    onShelfChange={onShelfUpdate}
                    />
                    <Shelf
                    title="Read"
                    books={read}
                    onShelfChange={onShelfUpdate}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

}

export default BookList