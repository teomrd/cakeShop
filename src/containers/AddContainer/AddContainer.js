import { connect } from 'react-redux';
import AddCake from '../../components/CakeList/AddCake/AddCake';
import { addCake } from '../../actions/cakeActions/cakeActions';

const mapDispatchToProps = (dispatch) => {
  return {
    addCake: () => {
      dispatch(addCake());
    },
  };
};

const AddContainer = connect(
  null,
  mapDispatchToProps,
)(AddCake);

export default AddContainer;
