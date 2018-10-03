import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import styles from './styles';

import SingleMemo from '../SingleMemo';

const Board = ({ memos, onDelete }) => (
  <div style={styles.root}>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={24}
    >
      {memos.map(x => (
        <SingleMemo
          key={x._id}
          memo={x}
          onDelete={onDelete}
        />
      ))}
    </Grid>
  </div>
);

Board.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Board;
