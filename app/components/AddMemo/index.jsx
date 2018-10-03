import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './styles';

const AddMemo = ({ onCreateMemo, onChangeForm, stateMemoColor }) => (
  <Card style={styles.card}>
    <CardContent>
      <form onSubmit={onCreateMemo}>
        <FormControl>
          <input
            onChange={onChangeForm}
            maxLength="15"
            className="form-control"
            placeholder="Enter Title"
            name="stateTitle"
          />
          <textarea
            required
            onChange={onChangeForm}
            className="form-control mt-2"
            rows="5"
            placeholder="Enter Description *"
            name="stateDescription"
          />
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={8}
            style={styles.grid}
          >
            <Grid item>
              <Button
                variant="fab"
                mini
                style={styles.button1}
                onClick={onChangeForm}
                value="yellow"
                name="stateMemoColor"
              >
                {stateMemoColor === 'yellow' ? '✗' : ' '}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="fab"
                mini
                style={styles.button2}
                onClick={onChangeForm}
                value="orange"
                name="stateMemoColor"
              >
                {stateMemoColor === 'orange' ? '✗' : ' '}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="fab"
                mini
                style={styles.button3}
                onClick={onChangeForm}
                value="pink"
                name="stateMemoColor"
              >
                {stateMemoColor === 'pink' ? '✗' : ' '}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="fab"
                mini
                style={styles.button4}
                onClick={onChangeForm}
                value="green"
                name="stateMemoColor"
              >
                {stateMemoColor === 'green' ? '✗' : ' '}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="fab"
                mini
                style={styles.button5}
                onClick={onChangeForm}
                value="blue"
                name="stateMemoColor"
              >
                {stateMemoColor === 'blue' ? '✗' : ' '}
              </Button>
            </Grid>
          </Grid>
          <div style={styles.submitButton}>
            <Button variant="contained" type="submit">
              Create Memo
            </Button>
          </div>
        </FormControl>
      </form>
    </CardContent>
  </Card>
);

AddMemo.propTypes = {
  onCreateMemo: PropTypes.func.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  stateMemoColor: PropTypes.string.isRequired,
};

export default AddMemo;
