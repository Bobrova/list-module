import React, { Component } from "react";
import styles from "./style.css";
import SearchContainer from "../../containers/SearchContainer"

class Search extends Component {
  handleSearch = (e) => {
    const { actions } = this.props;
    const { setSearch } = actions;
    const text = e.target.value.trim();
    setSearch(text);
  }

  render() {
    return (
      <section className={styles.search}>
        <div className={styles.searchWrapper}>
          <div className={styles.loupe}>&#128269;</div>
          <input className={styles.searchInput} type="text" placeholder="Поиск" onChange={this.handleSearch}/>
        </div>
      </section>
    );
  }
}
export default Search;