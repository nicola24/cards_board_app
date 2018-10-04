import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import styles from './styles';
import cardStyle from './cardStyle';

const SingleMemo = ({ memo, onDelete }) => (
  <Grid item>
    <Card style={cardStyle(memo.color)}>
      <IconButton onClick={() => onDelete(memo._id)} style={styles.delete}>
        <DeleteIcon />
      </IconButton>
      <CardContent>
        <Typography variant="headline" component="h2" style={styles.word}>
          {memo.title}
        </Typography>
        <Typography component="p" style={styles.word}>
          {memo.description}
        </Typography>
        <Typography color="textSecondary" style={styles.time}>
          {`created ${moment.utc(memo.time).startOf('min').fromNow()}`}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

SingleMemo.propTypes = {
  onDelete: PropTypes.func.isRequired,
  memo: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    _id: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default SingleMemo;
