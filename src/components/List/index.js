import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class List extends Component {
  // handleBlur = () => {
  //   const { actions } = this.props;
  //   actions.editItem(0);
  // }

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
              onBlur={this.handleBlur}
            />
            <input
              type="text"
              className={styles.textEditing}
              value={item.Singer}
              onChange={this.handleSingerChange}
              onBlur={this.handleBlur}
            />
            <div
              className={styles.btnSave}
              onClick={() => {
                actions.editItem(0);
              }}
            >
              Сохранить
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
              Удалить
            </div>
            <div
              className={styles.btnEdit}
              onClick={() => {
                actions.editItem(item.id);
              }}
            >
              Редактировать
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
