import React from 'react';
import BookForm from './BookForm';
import { Modal } from 'react-bootstrap';


class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.modalShow}
          onHide={this.props.modalHide}
        >
          <Modal.Header closeButton onHide={this.props.modalHide}>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <BookForm handleSubmit={this.props.handleSubmit} />
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default BookFormModal;