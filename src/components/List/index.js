import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class List extends Component {
  handleSongChange = e => {
    const { actions } = this.props;
    const { setSongEdit } = actions;
    const text = e.target.value;
    setSongEdit(text);
  };

  handleSingerChange = e => {
    const { actions } = this.props;
    const { setSingerEdit } = actions;
    const text = e.target.value;
    setSingerEdit(text);
  };

  handleClickSave = () => {
    const { actions, list, idEdit } = this.props;
    const [el] = list.filter(item => item.id === idEdit);
    if (el.Song === '' && el.Singer === '') {
      actions.delItem(idEdit);
    }
    actions.editItem(0);
  }

  render() {
    const { list, actions, idEdit } = this.props;
    const listItem = list.map(item => (
      <div key={item.id} className={styles.listItem}>
        {item.id === idEdit ? (
          <div className={styles.listItem__name}>
            <input
              type="text"
              className={styles.textEditing}
              value={item.Song}
              onChange={this.handleSongChange}
            />
            <input
              type="text"
              className={styles.textEditing}
              value={item.Singer}
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
            <p className={styles.list_nameSong}>{item.Song}</p>
            <p className={styles.list_nameSinger}>{item.Singer}</p>
            <div
              className={styles.btnDel}
              onClick={() => {
                actions.delItem(item.id);
              }}
            >
              &#x2718;
            </div>
            <div
              className={styles.btnEdit}
              onClick={() => {
                actions.editItem(item.id);
              }}
            >
              &#x270e;
            </div>
          </div>
        )}
      </div>
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
