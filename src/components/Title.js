import { Component } from "react";

const styles = {
  title: {
    marginBottom: "30px",
    fontWeight: "bold",
  },
};

class Title extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.title}>Tienda</h1>
      </div>
    );
  }
}

export default Title;
