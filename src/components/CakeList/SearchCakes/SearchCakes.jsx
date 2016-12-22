import React from 'react';
import TextField from 'material-ui/TextField';

class CakeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    //Get simultaneously results!
    this.props.searchCakes(event.target.value);
  }

  /*
    Captures Enter key press
   */
  onKeyUp(event) {
    if (event.which === 13) {
      this.props.searchCakes(this.state.value);
    }
  }

  render() {
    return(
      <TextField
        hintText="Search..."
        style={{
          width: '80%',
        }}
        onChange={this.handleChange}
        onKeyUp={this.onKeyUp}
      />
    )
  }

}


export default CakeList;
