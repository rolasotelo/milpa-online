import React from "react";
import { hot } from "react-hot-loader/root";
import { Link } from "react-router-dom";

interface Props {
  name: string;
}

class TestContainer extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-mexicanGreen hover:bg-mexicanGreen-light">
          Hola {name}
        </h1>
        <Link to="/play">A play</Link>
      </>
    );
  }
}

export default hot(TestContainer);
