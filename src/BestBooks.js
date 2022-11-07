import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import BookFormModalUpdate from './BookFormModalUpdate';
import { withAuth0 } from '@auth0/auth0-react';




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      book: {},
      modalShow: false,
      modalShowUpdate: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  handleOpenModal = () => {
    this.setState({
      modalShow: true
    })
  }

  openUpdateModal = (bookObj) => {
    this.setState({
      modalShowUpdate: true,
      book: bookObj
    })
  }


  handleCloseModal = () => {
    this.setState({
      modalShow: false
    })
  }

  closeUpdateModal = () => {
    this.setState({
      modalShowUpdate: false
    })
  }


  handleBookSubmit = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.Title.value,
      description: event.target.Description.value,
      status: event.target.Status.checked
    }
    this.postBooks(newBook);
    this.handleCloseModal();

  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;

      let createdBook = await axios.post(url, newBookObj);

      this.setState({
        books: [...this.state.books, createdBook.data]
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updatedBooks
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  getBook =  async () => {
     if (this.props.auth0.isAuthenticated) {
       const res = await this.props.auth0.getIdTokenClaims();
 
       const jwt = res.__raw;
 
       console.log('token:  ', jwt);
 
       const config = {
         headers: { "Authorization": `Bearer ${jwt}` },
         baseURL: process.env.REACT_APP_SERVER,
         method: 'get',
         url: '/books'
       }
       let bookData = await axios(config);
       this.setState({
         books: bookData.data
       });
     }
   }

  updatedBook = async (bookToUpdate) => {

    try {

      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`
      let updatedBook = await axios.put(url, bookToUpdate);

      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook
      })

      this.setState({
        books: updatedBookArray
      });

    } catch (error) {
      console.log(error.message);
    }
  }

   componentDidMount() {
     this.getBook();
  }


  render() {

    /* TODO: render all the books in a Carousel */
    let books = this.state.books.map((book, key) => {

      return (
        <Carousel.Item
          key={book._id}>
          <img
            className="d-block w-100"
            src="../img/dandebook.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <h4>Description</h4>
            <p>{book.description}</p>
            <Button variant="dark" onClick={() => { this.deleteBooks(book._id) }}>Delete Book</Button>
            <Button variant="info" onClick={() => { this.openUpdateModal(book) }}>Update Book</Button>
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

        <Button variant='primary' onClick={this.handleOpenModal}>Add Book</Button>
        <BookFormModal modalShow={this.state.modalShow} modalHide={this.handleCloseModal} handleSubmit={this.handleBookSubmit} />
        <BookFormModalUpdate
          modalShowUpdate={this.state.modalShowUpdate} modalHideUpdate={this.closeUpdateModal} updatedBook={this.updatedBook} book={this.state.book}
        />
      </>

    )
  }
}



export default withAuth0(BestBooks);
