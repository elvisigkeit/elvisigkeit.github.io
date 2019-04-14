import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import me from './images/me.png';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  avatar: {
    borderRadius: '10px',
    height: '100%',
  },
  imgContainer: {
    height: '130px',
  },
  text: {
    paddingTop: '2%',
    paddingRight: '20px',
  }
});

function Footer(props) {
    const { classes } = props;
  
return (
    <React.Fragment>
    <CssBaseline />
      <footer className={classes.footer}>
        <Grid container direction="row" justify="center">
          <Grid item sm={2} md={2} lg={2} xs={2}/>
          <Grid className={classes.text} item sm={5} md={5} lg={5} xs={5}>
            <Typography variant="h6" align="right" gutterBottom>
              Elvis Nobrega
            </Typography>
            <Typography variant="subtitle1" align="right" color="textSecondary" component="p">
              An enthusiast of Operating Systems, Web and Statistics
            </Typography>
          </Grid>
          <Grid item className={classes.imgContainer} sm={3} md={3} lg={3} xs={3}>
            <img src={me} className={classes.avatar} alt="avatar"/>
          </Grid>
        </Grid>
    </footer>
  </React.Fragment>
);}

Footer.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
