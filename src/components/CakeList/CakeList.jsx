import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import CircularProgress from 'material-ui/CircularProgress';

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
  addButton: {
    marginRight: 20,
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  },
};

const CakeList = ({ cakes, loading }) => (
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
      <Subheader>Cakes</Subheader>
      {Object.keys(cakes).map((cake) => (
        <GridTile
          key={cake}
          title={cakes[cake].title}
          subtitle={<span><b>{cakes[cake].desc}</b></span>}
          actionIcon={
            <IconButton
              onTouchTap={() => { }}
            >
              <StarBorder color="white" />
            </IconButton>
          }
        >
          <img src={cakes[cake].image} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
    <FloatingActionButton style={styles.addButton}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

CakeList.propTypes = {
  cakes: PropTypes.object,
  loading: PropTypes.bool,
}

CakeList.defaultProps = {
  cakes: {},
  loading: false,
}

export default CakeList;
