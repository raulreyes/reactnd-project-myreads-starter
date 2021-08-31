# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course.

## Project Structre
```bash
├── README.md - This file.
├── .gitignore # Created to manage what will be commited.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookList.js # Component that holds the book shelfs
    ├── Search.js # Receive book list as prop and takes user input to search Book API.
    ├── Shelf.js # Receives book shelf as prop and return list of book for that specific shelf
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

#  Search Methods
### `userQuery`

Method Signature:

```js
userQuery(query, books) 
```

* Returns user query.
* Handles user queries to show messages when results are not available


### `displayBooks`

Method Signature:

```js
displayBooks(booksFound, books) 
```

* Map through the array built with BookAPI Search
* Check if book has author or image thumbnail available to render book
* Assign shefl value to book if boos is in one of the 3 shelves


## Backend Server

To simplify your development process, Udemy provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
