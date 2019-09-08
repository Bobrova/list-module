import React, { Component } from "react";
import styles from "./style.css";
import FormsContainer from "../../containers/FormsContainer";

class Forms extends Component {

  handleSongChange = (e) => {
    const { actions } = this.props;
    const { setSong } = actions;
    const text = e.target.value.trim();
    setSong(text);
  }

  handleSingerChange = (e) => {
    const { actions } = this.props;
    const { setSinger } = actions;
    const text = e.target.value.trim();
    setSinger(text);
  }

  handleClick = () => {
    const { currentId, song, singer, actions } = this.props;
    const { addItem } = actions;
    addItem({id: currentId + 1, Song: song, Singer: singer});
  }

  render() {
    const { song, singer } = this.props;
    return (
      <section className={styles.dataInput}>
        <form>
          <div className={styles.nameSong}>
            <label htmlFor="song">Название песни</label>
            <input className={styles.songInput} type="text" id="song" placeholder="Песня" onChange={this.handleSongChange} value={song} />
          </div>
          <div className={styles.nameSinger}>
            <label htmlFor="singer">Имя исполнителя</label>
            <input className={styles.singerInput} type="text" id="singer" placeholder="Исполнитель" onChange={this.handleSingerChange} value={singer} />
          </div>
          <div className={styles.btnAdd} onClick={this.handleClick} >Добавить</div>
        </form>
      </section>
      );
  }
}
export default Forms;