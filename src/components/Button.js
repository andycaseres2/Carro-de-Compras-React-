import { Component } from "react";

const style = {
  button: {
    backgroundColor: "#292929",
    border: "none",
    color: "#fff",
    padding: "15px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

class Button extends Component {
  render() {
    return <button style={style.button} {...this.props} />;
  }
}
export default Button;
