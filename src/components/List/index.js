import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./style.scss";

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

List.propTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default List;