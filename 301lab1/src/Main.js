import { Component } from "react";
import HornedBeasts from "./HornedBeasts";

import data from "./Data.json";


class Main extends Component {
  render() {
    return (
      <>
        {this.props.data.map((animal) => (
        {data.map((animal) => (
          <HornedBeasts
            title={animal.title}
            imageURL={animal.image_url}
            description={animal.description}
            keyword={animal.keyword}
            horns={animal.horns}
            showModal={this.props.showModal}

          />
        ))}
      </>
    );
  }
}

export default Main;