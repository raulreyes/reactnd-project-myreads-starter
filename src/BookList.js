import React, { Component } from 'react'
//import { updateStatement } from 'typescript'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class BookList extends Component {
    state = {
        books: []
    }
    componentDidMount(){
        BooksAPI.getAll().then((books) => {this.setState(() => ({ books }))})
      }

    updateState(book,shelf){
        this.setState()
    }
    
    handleChange = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.setState(({ books }) => ({
           books: [...books.filter(({ id }) => id !== book.id), { ...book, shelf }],
         }));
    }
   

render () {
    const currentlyReading = this.state.books.filter(shelf => shelf.shelf === 'currentlyReading')
    const wantToRead = this.state.books.filter(shelf => shelf.shelf === 'wantToRead')
    const read = this.state.books.filter(shelf => shelf.shelf === 'read')

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
                    onShelfChange={this.handleChange}
                    />
                    <Shelf
                    title="Want To Read"
                    books={wantToRead}
                    onShelfChange={this.handleChange}
                    />
                    <Shelf
                    title="Read"
                    books={read}
                    onShelfChange={this.handleChange}
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