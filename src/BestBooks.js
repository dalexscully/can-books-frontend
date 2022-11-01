import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
      this.setState({
        books: bookData.data
      });

    } catch (error) {
      console.log('We have an error:', error.response)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */
    let books = this.state.books.map(book => {

      return (
        <Carousel.Item>
          <h3>{book.title}</h3>
          <Carousel.Caption>
            <h4>Description</h4>
            <p>{book.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel>{books}</Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
