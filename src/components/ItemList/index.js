import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class ItemList extends Component {
  handleSongChange = e => {
    const { setSongEdit } = this.props;
    const text = e.target.value;
    setSongEdit(text);
  };

  handleSingerChange = e => {
    const { setSingerEdit } = this.props;
    const text = e.target.value;
    setSingerEdit(text);
  };

  handleClickSave = () => {
    const {
      editItem,
      itemList,
      idEdit,
      delItem,
    } = this.props;
    if (itemList.song === '' && itemList.singer === '') {
      delItem(idEdit);
    }
    editItem(0);
  }

  handleDelItem = () => {
    const { delItem, itemList } = this.props;
    delItem(itemList.id);
  };

  handleEditItem = () => {
    const { editItem, itemList } = this.props;
    editItem(itemList.id);
  };

  render() {
    const {
      itemList,
      idEdit,
    } = this.props;
    return (
      <div key={itemList.id} className={styles.listItem}>
        {itemList.id === idEdit ? (
          <div className={styles.listItem__name}>
            <input
              type="text"
              className={styles.textEditing}
              value={itemList.song}
              onChange={this.handleSongChange}
            />
            <input
              type="text"
              className={styles.textEditing}
              value={itemList.singer}
              onChange={this.handleSingerChange}
            />
            <div
              className={styles.btnSave}
              onClick={this.handleClickSave}
            >
            &#128190;
            </div>
          </div>
        ) : (
          <div className={styles.listItem__name}>
            <p className={styles.list_nameSong}>{itemList.song}</p>
            <p className={styles.list_nameSinger}>{itemList.singer}</p>
            <div
              className={styles.btnDel}
              onClick={this.handleDelItem}
            >
              &#x2718;
            </div>
            <div
              className={styles.btnEdit}
              onClick={this.handleEditItem}
            >
            &#x270e;
            </div>
          </div>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  itemList: PropTypes.object.isRequired,
  idEdit: PropTypes.number.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  setSingerEdit: PropTypes.func.isRequired,
  setSongEdit: PropTypes.func.isRequired,
};

export default ItemList;
