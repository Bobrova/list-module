import React, { Component } from "react";
import styles from "./style.css";
import FormsContainer from "../../containers/FormsContainer"
class Forms extends Component {
  render() {
    return (
      <section className={styles.dataInput}>
        <div className={styles.nameSong}>
          <label htmlFor="song">Название песни</label>
          <input className={styles.songInput} type="text" id="song" placeholder="Песня" />
        </div>
        <div className={styles.nameSinger}>
          <label htmlFor="singer">Имя исполнителя</label>
          <input className={styles.singerInput} type="text" id="singer" placeholder="Исполнитель" />
        </div>
        <div className={styles.btnAdd}>Добавить</div>
      </section>
      );
  }
}
export default Forms;