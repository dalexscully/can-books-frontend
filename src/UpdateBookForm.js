import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.Title.value,
      description: event.target.Description.value,
      status: event.target.Status.checked,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    // console.log('UPDATED: ', bookToUpdate);

    this.props.updatedBook(bookToUpdate);
    this.props.onHide();
  }


  render() {
    return (
      <>
        <Container >
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" defaultValue={this.props.book.title} />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" defaultValue={this.props.book.description} />
            </Form.Group>
            <Form.Group controlId="Status">
              <Form.Check type="checkbox" label="Status" defaultChecked={this.props.book.status} />
            </Form.Group>
            <Button type="submit">Update Book</Button>
          </Form>
        </Container>
      </>
    )
  }
}

export default UpdateBookForm;