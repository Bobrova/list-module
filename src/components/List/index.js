import React, { Component } from "react";
import styles from "./style.css";
import FormsContainer from "../../containers/FormsContainer"

class App extends Component {
  render() {
    return (
      <section className={styles.list}>
        <div className={styles.listMusic}>
          <div className={styles.listItem}>
            <div className={styles.listItem__name}>
              <p className={styles.list_nameSong}>Graveyard Picnic</p>
              <p className={styles.list_nameSinger}>Voltaire</p>
            </div>
          </div>
          <div className={styles.listItem}>2</div>
          <div className={styles.listItem}>3</div>
          <div className={styles.listItem}>4</div>
          <div className={styles.listItem}>5</div>
          <div className={styles.listItem}>6</div>
          <div className={styles.listItem}>7</div>
          <div className={styles.listItem}>8</div>
          <div className={styles.listItem}>9</div>
        </div>
      </section>
      );
  }
}
export default App;