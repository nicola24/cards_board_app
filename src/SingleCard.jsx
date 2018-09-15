import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const SingleCard = ({ card, onDelete }) => {
  const styles = () => {
    const style = {
      width: 200,
      height: 200,
      backgroundColor: yellow[500],
    };

    if (card.color === 'orange') style.backgroundColor = orange[500];
    if (card.color === 'blue') style.backgroundColor = blue[500];
    if (card.color === 'pink') style.backgroundColor = pink[500];
    if (card.color === 'green') style.backgroundColor = green[500];

    return style;
  };

  return (
    <Grid item>
      <Card style={styles()}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {card.title}
          </Typography>
          <Typography component="p">
            {card.description}
          </Typography>
          <Typography color="textSecondary">
            {`created ${moment.utc(card.time).startOf('min').fromNow()}`}
          </Typography>
          <IconButton onClick={() => onDelete(card._id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

SingleCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
  card: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    _id: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default SingleCard;
