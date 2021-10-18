import { Component } from "react";

const styles = {
  detallescarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    width: "300px",
    right: "50px",
  },
  ul: {
    margin: 0,
    padding: 0,
  },

  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 15px",
    borderBottom: "solid 1px #aaa",
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallescarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="35" />
              {x.name} <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
