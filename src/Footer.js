import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

function Footer(props) {
    const { classes } = props;
  
return (
    <React.Fragment>
    <CssBaseline />
      <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Elvis Nobrega
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        An enthusiast of Operating Systems, Web and Statistics
      </Typography>
    </footer>
  </React.Fragment>
);}

Footer.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
