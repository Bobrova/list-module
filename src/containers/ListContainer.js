import { connect } from 'react-redux';
import {
  setSongEdit,
  setSingerEdit,
  delItem,
  editItem,
} from '../actions';
import List from '../components/List';
import { getVisibleList } from '../selectors';

const mapStateToProps = state => ({
  list: getVisibleList(state),
  idEdit: state.idEdit,
});

export default connect(
  mapStateToProps,
  {
    setSongEdit,
    setSingerEdit,
    editItem,
    delItem,
  },
)(List);
