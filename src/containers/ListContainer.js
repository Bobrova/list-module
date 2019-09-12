import { connect } from 'react-redux';
import {
  delItem,
  saveEdit,
} from '../actions';
import List from '../components/List';
import { getVisibleList } from '../selectors';

const mapStateToProps = state => ({
  list: getVisibleList(state),
});

export default connect(
  mapStateToProps,
  {
    delItem,
    saveEdit,
  },
)(List);
