import { connect } from 'react-redux';
import CakeList from '../../components/CakeList/CakeList';

const mapStateToProps = (state) => ({
  cakes: state.cakes,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     initRequest: () => {
//       dispatch(initRequest());
//     },
//     fetchNodes: () => {
//       dispatch(fetchNodes());
//     },
//     toggleNode: (id) => {
//       dispatch(toggleNode(id));
//     },
//     deleteNode: (id) => {
//       dispatch(deleteNode(id));
//     },
//   };
// };

const CakesContainer = connect(
  mapStateToProps,
  null,
  // mapDispatchToProps,
)(CakeList);

export default CakesContainer;
