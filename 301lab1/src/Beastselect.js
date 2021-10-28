import React from "react";
import {Modal, Button, Card} from "react-bootstrap/";






class Beastselect extends React.Component {

  render() {
    return (
      <div>

      <Modal  show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          {/* <Modal.Title>{this.props.amimal.title}</Modal.Title> */}
          <Card.Img
            variant="top"
            // src={this.props.amimal.image_url}
            alt="horned"
            title="horned"
          />
        </Modal.Header>
        <Modal.Body>
            {/* <Card.Text>{this.props.amimal.description}</Card.Text> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default Beastselect;