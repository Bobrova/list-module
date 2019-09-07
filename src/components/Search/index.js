import React, { Component } from "react";
import styles from "./style.css";
import SearchContainer from "../../containers/SearchContainer"

class Search extends Component {
  render() {
    return (
      <section className={styles.search}>
        <div className={styles.searchWrapper}>
          <div className={styles.loupe}>&#128269;</div>
          <input className={styles.searchInput} type="text" placeholder="Поиск" />
        </div>
      </section>
    );
  }
}
export default Search;