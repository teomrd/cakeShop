import { connect } from 'react-redux';
import AddEditDialog from '../../components/CakeList/AddEditCakesDialog/AddEditDialog';
import { editCake, cancelCake, saveCake } from '../../actions/cakeActions/cakeActions';

const mapStateToProps = (state) => ({
  mode: state.manageCakes.mode,
  title: state.manageCakes.title,
  description: state.manageCakes.description,
});

const mapDispatchToProps = (dispatch) => {
  return {
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

const AddEditDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEditDialog);

export default AddEditDialogContainer;
