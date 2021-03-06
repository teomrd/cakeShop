import { connect } from 'react-redux';
import CakeList from '../../components/CakeList/CakeList';
import { fetchCakes, editCake, cancelCake, saveCake } from '../../actions/cakeActions/cakeActions';

const mapStateToProps = (state) => ({
  cakes: state.entities.cakes,
  loading: state.loading.cakes,
  manageCakes: state.manageCakes,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchCakes());
  return {
    fetchCakes: () => {
      dispatch(fetchCakes());
    },
    editCake: (title, description) => {
      dispatch(editCake(title, description));
    },
    cancelCake: () =>{
      dispatch(cancelCake());
    },
    saveCake: (title, description) =>{
      dispatch(saveCake(title, description));
    },
  };
};

const CakesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeList);

export default CakesContainer;
