import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';

import Footer from './Footer';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const { expanded } = this.state;
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu" onClick={() => this.toggle()}>
              <EditIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.grow}>
              Cards Board App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={expanded} onClose={() => this.toggle()}>
          <div style={styles.list}>
            <Footer />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Dashboard;
