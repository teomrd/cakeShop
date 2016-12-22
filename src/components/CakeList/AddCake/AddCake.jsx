import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  addButton: {
    marginRight: 20,
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  },
};

const AddCake = ({addCake}) => (
  <FloatingActionButton
    onTouchTap={() => addCake()}
    style={styles.addButton}
  >
    <ContentAdd />
  </FloatingActionButton>
);

AddCake.propTypes = {
  addCake: PropTypes.func.isRequiered,
}

export default AddCake;
