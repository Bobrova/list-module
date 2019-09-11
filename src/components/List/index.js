import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList';
import styles from './style.scss';

class List extends Component {
  render() {
    const { list, actions, idEdit } = this.props;
    const listItem = list.map(item => (
      <ItemList
        key={item.id}
        idEdit={idEdit}
        itemList={item}
        setSongEdit={actions.setSongEdit}
        setSingerEdit={actions.setSingerEdit}
        delItem={actions.delItem}
        editItem={actions.editItem}
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
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  idEdit: PropTypes.number.isRequired,
};

export default List;
