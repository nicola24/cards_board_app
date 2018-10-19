import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

import styles from './styles';

import Footer from '../Footer';
import Board from '../Board';
import AddMemo from '../AddMemo';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      memos: [],
      stateTitle: '',
      stateDescription: '',
      stateMemoColor: 'yellow',
    };
    this.toggleLeft = this.toggleLeft.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleCreateMemo = this.handleCreateMemo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMemos();
  }

  fetchMemos() {
    fetch('api/getmemos')
      .then(res => res.json())
      .then(data => this.setState({ memos: data }));
  }

  toggleLeft() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  handleForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDelete(id) {
    fetch('api/deletememo', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    this.fetchMemos();
  }

  handleCreateMemo(e) {
    const { stateTitle, stateDescription, stateMemoColor } = this.state;

    fetch('api/creatememo', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: stateTitle,
        description: stateDescription,
        color: stateMemoColor,
      }),
    });

    this.setState({ expanded: false });
    this.fetchMemos();
    e.preventDefault();
  }

  render() {
    const {
      expanded, memos, stateMemoColor,
    } = this.state;
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleLeft()}
            >
              <EditIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Memo Board App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={expanded} onClose={() => this.toggleLeft()}>
          <div style={styles.list}>
            <Grid container justify="center">
              <Grid item>
                <AddMemo
                  onChangeForm={this.handleForm}
                  onCreateMemo={this.handleCreateMemo}
                  stateMemoColor={stateMemoColor}
                />
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </div>
        </Drawer>
        <Board
          memos={memos}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Dashboard;
