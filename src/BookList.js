import React, { Component } from 'react'
import Shelf from './Shelf'

class BookList extends Component {

render () {
    const currentlyReading = this.props.books.filter(shelf => shelf.shelf === 'currentlyReading')
    const wantToRead = this.props.books.filter(shelf => shelf.shelf === 'wantToRead')
    const read = this.props.books.filter(shelf => shelf.shelf === 'read')

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
                    />
                    <Shelf
                    title="Want To Read"
                    books={wantToRead}
                    />
                    <Shelf
                    title="Read"
                    books={read}
                    />
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
    )
}

}

export default BookList