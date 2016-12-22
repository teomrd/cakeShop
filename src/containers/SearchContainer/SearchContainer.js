import { connect } from 'react-redux';
import SearchCakes from '../../components/CakeList/SearchCakes/SearchCakes';
import { searchCakes } from '../../actions/cakeActions/cakeActions';

const mapDispatchToProps = (dispatch) => {
  return {
    searchCakes: (value) => {
      dispatch(searchCakes(value));
    },
  };
};

const SearchContainer = connect(
  null,
  mapDispatchToProps,
)(SearchCakes);

export default SearchContainer;
