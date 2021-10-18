import { Component } from "react";

const styles = {
  bubblealert: {
    backgroundColor: "#ff4040",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
    fontWeight: "bold",
  },
};
class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+ " : n;
  }

  render() {
    const { value } = this.props;
    return <span style={styles.bubblealert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
