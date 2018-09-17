import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import SingleMemo from './SingleMemo';

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 24,
    paddingLeft: 24,
  },
};

const Board = ({
  cards, onDelete, stateDialog, onDialog,
}) => (
  <div style={styles.root}>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={24}
    >
      {cards.map(x => (
        <SingleMemo
          key={x._id}
          card={x}
          onDelete={onDelete}
          stateDialog={stateDialog}
          onDialog={onDialog}
        />
      ))}
    </Grid>
  </div>
);

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  stateDialog: PropTypes.bool.isRequired,
  onDialog: PropTypes.func.isRequired,
};

export default Board;
