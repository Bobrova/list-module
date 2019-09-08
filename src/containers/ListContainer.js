import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import List from '../components/List';
import { getVisibleList} from '../selectors';

const mapStateToProps = state => ({
  list: getVisibleList(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
