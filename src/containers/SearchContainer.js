import { connect } from 'react-redux';
import { setSearch } from '../actions';
import Search from '../components/Search';

const mapStateToProps = state => ({
  list: state.list,
});

export default connect(
  mapStateToProps,
  {
    setSearch,
  },
)(Search);
