import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import SingleCard from './SingleCard';

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 24,
    paddingLeft: 24,
  },
};

const Board = ({ cards, onDelete }) => (
  <div style={styles.root}>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={24}
    >
      {cards.map(x => <SingleCard key={x._id} card={x} onDelete={onDelete} />)}
    </Grid>
  </div>
);

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Board;
