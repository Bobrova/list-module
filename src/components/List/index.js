import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList';
import styles from './style.scss';

class List extends Component {
  render() {
    const {
      list,
      setSingerEdit,
      setSongEdit,
      editItem,
      delItem,
      idEdit,
    } = this.props;
    const listItem = list.map(item => (
      <ItemList
        key={item.id}
        idEdit={idEdit}
        itemList={item}
        setSongEdit={setSongEdit}
        setSingerEdit={setSingerEdit}
        delItem={delItem}
        editItem={editItem}
      />
    ));

    return (
      <section className={styles.list}>
        <div className={styles.listMusic}>{listItem}</div>
      </section>
    );
  }
}

List.propTypes = {
  idEdit: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  setSingerEdit: PropTypes.func.isRequired,
  setSongEdit: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
};

export default List;
