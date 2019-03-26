import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lime, yellow } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const ytheme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: lime,
  },
});

const styles = theme => ({
  whitespace: {
      height: '30vh',
      background: theme.palette.background.paper,
  },
  layout: {
    width: '100vw',
    height: '40vh',
    paddingLeft: '30vw',
    paddingRight: '30vw',
    background: '#fffde7',
  },
  text: {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '6%',
  },
});

function NotFound(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <MuiThemeProvider theme={ytheme}>
      <CssBaseline />
      <header className={classes.whitespace}/>
      <main>
        <div className={classNames(classes.layout)}>
        
        <Grid container direction="row" justify="center">
          <Grid item className={classes.text}  xs={6}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary">
                404
            </Typography>
          </Grid>
          <Grid item className={classes.text}  xs={6}>
            <Typography component="h2" variant="h2" align="center" color="textPrimary">
                Looks like that's not what you are looking for
            </Typography>
          </Grid>
        </Grid>
        </div>
      </main>
      <footer className={classes.whitespace}/>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
