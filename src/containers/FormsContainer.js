import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Forms from '../components/Forms';
import { getCurrentId } from '../selectors';

const mapStateToProps = state => ({
  list: state.list,
  song: state.formValue.song,
  singer: state.formValue.singer,
  currentId: getCurrentId(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forms);
