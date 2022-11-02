import React from 'react';
import UpdateBookForm from './UpdateBookForm.js';
import { Modal } from 'react-bootstrap';


class BookFormModalUpdate extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.modalShowUpdate}
          onHide={this.props.modalHideUpdate}
        >
          <Modal.Header closeButton onHide={this.props.modalHideUpdate}>
            <Modal.Title>Update a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <UpdateBookForm onHide={this.props.modalHideUpdate} updatedBook={this.props.updatedBook} book={this.props.book}/>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default BookFormModalUpdate;