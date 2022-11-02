import React from 'react';
import UpdateBookForm from './BookForm';
import { Modal } from 'react-bootstrap';


class BookFormModalUpdate extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.modalShow}
          onHide={this.props.modalHide}
        >
          <Modal.Header closeButton onHide={this.props.modalHide}>
            <Modal.Title>Update a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <UpdateBookForm handleSubmit={this.props.handleSubmit} book={this.props.book} />
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default BookFormModalUpdate;