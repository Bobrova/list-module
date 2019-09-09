import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Forms extends Component {
  handleSongChange = e => {
    const { actions } = this.props;
    const { setSong } = actions;
    const text = e.target.value;
    setSong(text);
  };

  handleSingerChange = e => {
    const { actions } = this.props;
    const { setSinger } = actions;
    const text = e.target.value;
    setSinger(text);
  };

  handleClick = () => {
    const {
      currentId,
      song,
      singer,
      actions,
    } = this.props;
    const { addItem } = actions;
    if (song !== '' && /\S/.test(song)) {
      if (singer !== '' && /\S/.test(singer)) {
        addItem({
          id: currentId + 1,
          Song: song.trim(),
          Singer: singer.trim(),
        });
      }
    }
  };

  render() {
    const { song, singer } = this.props;
    return (
      <section className={styles.dataInput}>
        <form>
          <div className={styles.nameSong}>
            <label htmlFor="song">Название песни</label>
            <input
              className={styles.songInput}
              type="text"
              id="song"
              placeholder="Песня"
              onChange={this.handleSongChange}
              value={song}
            />
          </div>
          <div className={styles.nameSinger}>
            <label htmlFor="singer">Имя исполнителя</label>
            <input
              className={styles.singerInput}
              type="text"
              id="singer"
              placeholder="Исполнитель"
              onChange={this.handleSingerChange}
              value={singer}
            />
          </div>
          <div className={styles.btnAdd} onClick={this.handleClick}>
            Добавить
          </div>
        </form>
      </section>
    );
  }
}

Forms.propTypes = {
  currentId: PropTypes.number.isRequired,
  song: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Forms;
