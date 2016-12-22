import { connect } from 'react-redux';
import CakeList from '../../components/CakeList/CakeList';
import { fetchCakes } from '../../actions/cakeActions/cakeActions';

const mapStateToProps = (state) => ({
  cakes: state.entities.cakes,
  loading: state.loading.cakes,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchCakes());
  return {
    fetchCakes: () => {
      dispatch(fetchCakes());
    },
  };
};

const CakesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeList);

export default CakesContainer;
