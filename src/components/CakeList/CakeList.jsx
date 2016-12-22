import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/editor/mode-edit';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import CircularProgress from 'material-ui/CircularProgress';
import AddEditDialogContainer from '../../containers/AddEditDialogContainer/AddEditDialogContainer';
import AddContainer from '../../containers/AddContainer/AddContainer';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
  },
};

const CakeList = ({
  cakes,
  loading,
  editCake,
}) => (
  loading ?
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress
      style={{
        width: '100%',
      }}
    />
  </div>
  :
  <div style={styles.root}>
    <SearchContainer />
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>{Object.keys(cakes).length ? 'Cakes' : 'No Cakes found :('}</Subheader>
      {
        Object.keys(cakes).map((cake) => (
          <GridTile
            key={cake}
            title={cakes[cake].title}
            subtitle={<span><b>{cakes[cake].desc}</b></span>}
            actionIcon={
              <IconButton
                onTouchTap={() => { editCake(cakes[cake].title, cakes[cake].desc) }}
              >
                <StarBorder color="white" />
              </IconButton>
            }
          >
            <img src={cakes[cake].image} role="presentation"/>
          </GridTile>
        ))
      }
    </GridList>
    <AddContainer />
    <AddEditDialogContainer />
  </div>
);

CakeList.propTypes = {
  cakes: PropTypes.object,
  loading: PropTypes.bool,
  manageCakes: PropTypes.object,
}

CakeList.defaultProps = {
  cakes: {},
  loading: false,
}

export default CakeList;
