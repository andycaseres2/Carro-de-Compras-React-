import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  carro: {
    backgroundColor: "#094293",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
  },
  bubble: {
    position: "relative",
    left: "15px",
    top: "20px",
    zIndex: "1",
  },
};
class Carro extends Component {
  render() {
    const { carro, carroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {carroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
