import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

import Footer from './Footer';
import Board from './Board';
import AddCard from './AddCard';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 400,
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      cards: [],
      stateTitle: '',
      stateDescription: '',
      stateCardColor: 'yellow',
    };
    this.toggle = this.toggle.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleCreateCard = this.handleCreateCard.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchCards();
  }

  fetchCards() {
    fetch('/getcards')
      .then(res => res.json())
      .then(data => this.setState({ cards: data }));
  }

  toggle() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  handleTitle(e) {
    this.setState({ stateTitle: e.target.value });
  }

  handleDescription(e) {
    this.setState({ stateDescription: e.target.value });
  }

  handleColor(e) {
    this.setState({ stateCardColor: e.target.value });
  }

  handleDelete(id) {
    fetch('/deletecard', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    this.fetchCards();
  }

  handleCreateCard(e) {
    const { stateTitle, stateDescription, stateCardColor } = this.state;

    fetch('/createcard', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: stateTitle,
        description: stateDescription,
        color: stateCardColor,
      }),
    });

    this.setState({ expanded: false });
    this.fetchCards();
    e.preventDefault();
  }

  render() {
    const {
      expanded, cards, stateCardColor,
    } = this.state;
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggle()}
            >
              <EditIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Cards Board App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={expanded} onClose={() => this.toggle()}>
          <div style={styles.list}>
            <Grid container justify="center">
              <Grid item>
                <AddCard
                  onChangeTitle={this.handleTitle}
                  onChangeDescription={this.handleDescription}
                  onCreateCard={this.handleCreateCard}
                  onChangeColor={this.handleColor}
                  stateCardColor={stateCardColor}
                />
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </div>
        </Drawer>
        <Board
          cards={cards}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Dashboard;
