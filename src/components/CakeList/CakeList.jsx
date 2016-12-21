import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const CakeList = ({ cakes }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Cakes</Subheader>
      {cakes.map((cake) => (
        <GridTile
          key={cake.img}
          title={cake.title}
          subtitle={<span><b>{cake.desc}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={cake.image} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

CakeList.propTypes = {
  cakes: PropTypes.array,
}

CakeList.defaultProps = {
  cakes: [],
}

export default CakeList;
