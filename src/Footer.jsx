import React from 'react';

import Typography from '@material-ui/core/Typography';

const styles = {
  text: {
    padding: 20,
  },
};

const Footer = () => (
  <Typography variant="caption" style={styles.text}>
    Cards Board App by Nicolas Peyrichou, Copyright © 2018
  </Typography>
);

export default Footer;
