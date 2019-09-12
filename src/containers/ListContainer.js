import { connect } from 'react-redux';
import {
  setSongEdit,
  setSingerEdit,
  delItem,
  editItem,
  saveEdit,
} from '../actions';
import List from '../components/List';
import { getVisibleList } from '../selectors';

const mapStateToProps = state => ({
  list: getVisibleList(state),
  idEdit: state.edit.idEdit,
  song: state.edit.song,
  singer: state.edit.singer,
});

export default connect(
  mapStateToProps,
  {
    setSongEdit,
    setSingerEdit,
    editItem,
    delItem,
    saveEdit,
  },
)(List);
