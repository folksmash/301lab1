import { Component } from "react";
import HornedBeasts from "./HornedBeasts";

class Main extends Component {
  render() {
    console.log('at main', this.props.updateBeast)
    return (
      <>
        {this.props.data.map((animal) => (
          <HornedBeasts
            updateBeast={this.props.updateBeast}
            animal={animal}
            title={animal.title}
            imageURL={animal.image_url}
            description={animal.description}
            keyword={animal.keyword}
            horns={animal.horns}
          />
        ))}
      </>
    );
  }
}

export default Main;