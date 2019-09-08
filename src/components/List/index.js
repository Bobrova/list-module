import React, { Component } from "react";
import styles from "./style.css";

class List extends Component {

  render() {
    const { list, actions } = this.props;

    const listItem = list.map(item => (
      <div key={item.id} className={styles.listItem}>
        <div className={styles.listItem__name}>
          <p className={styles.list_nameSong}>{item.Song}</p>
          <p className={styles.list_nameSinger}>{item.Singer}</p>
          <div className={styles.btnDel} onClick={() => { actions.delItem(item.id) }}>Удалить</div>
        </div>
      </div>
    ));

    return (
      <section className={styles.list}>
        <div className={styles.listMusic}>
          {listItem}
        </div>
      </section>
      );
  }
}
export default List;