import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class AddEditDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDesciptionChange = this.handleDesciptionChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.state.title
    || nextProps.description !== this.state.description) {
      this.setState({
        title: nextProps.title,
        description: nextProps.description,
      });
    }
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleDesciptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleSave = () => {
    this.props.saveCake(this.state.title, this.state.description);
    this.setState({
      title: '',
      description: '',
    });
  };

  handleClose = () => {
    this.setState({
      title: '',
      description: '',
    });
    this.props.cancelCake();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
    ];
    return(
      <Dialog
        title="Edit Cake"
        actions={actions}
        modal={true}
        open={this.props.mode !== 'closed'}
        onRequestClose={this.handleClose}
        style={{
          width: '100%',
        }}
        contentStyle={{
          width: '300px',
        }}
      >
        <TextField
          hintText="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <TextField
          hintText="Description"
          value={this.state.description}
          onChange={this.handleDesciptionChange}
        />
      </Dialog>
    )
  }
}

AddEditDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  mode: PropTypes.string,
  cancelCake: PropTypes.func,
  editCake: PropTypes.func,
  saveCake: PropTypes.func,
}

AddEditDialog.defaultProps = {
  title: '',
  description: '',
  mode: 'closed',
}

export default AddEditDialog;
