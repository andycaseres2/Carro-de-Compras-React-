import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 60px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
    height: "80px",
  },
};

class Navbar extends Component {
  render() {
    const { carro, carroVisible, mostrarCarro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carro={carro}
          carroVisible={carroVisible}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    );
  }
}

export default Navbar;
