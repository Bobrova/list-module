import { connect } from 'react-redux';
import {
  setSong,
  setSinger,
  addItem,
} from '../actions';
import Forms from '../components/Forms';
import { getCurrentId } from '../selectors';

const mapStateToProps = state => ({
  list: state.list,
  song: state.formValue.song,
  singer: state.formValue.singer,
  currentId: getCurrentId(state),
});

export default connect(
  mapStateToProps,
  {
    setSong,
    setSinger,
    addItem,
  },
)(Forms);
