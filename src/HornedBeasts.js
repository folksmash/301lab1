import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      { count: 0, };
  }
  increaseCount = () => {
    this.setState(
      {
        count: this.state.count + 1
      }

    );
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleBeast = () => {
    console.log('during handle beast', this.props.updateBeast)
    this.props.updateBeast(this.props.animal)
  }
 
  render() {

    return (
      <div>
          <Card border="primary" style={{ width: '30rem' }}>
          <Card.Header> {this.props.title}</Card.Header>
          <img
          src={this.props.imageURL}
          alt={this.props.keyword}
          title={this.props.title}
          onClick={this.handleBeast}></img>
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            <Card.Img onClick={this.increaseCount} src={this.props.img} />
            <Card.Text>
              {this.props.disc}
            </Card.Text>
            <Card.Text onClick={this.handleClick}>
              💖 {this.state.count}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

      </div>
    );
  }
}
export default HornedBeast;