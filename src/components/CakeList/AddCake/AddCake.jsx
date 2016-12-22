import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  addButton: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
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
