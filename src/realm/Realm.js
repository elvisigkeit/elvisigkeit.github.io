import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lime, yellow } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

const ytheme = createMuiTheme({
    palette: {
      primary: yellow,
      secondary: lime,
    },
  });

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    toolbarMain: {
        height: '120px',
    },
    toolbarTitle: {
      flex: 1,
    },
    mainTitle: {
      padding: '5%',
      verticalAlign: 'middle',
    },
    post: {
      padding: '2%',
      margin: '2%',
    }
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Realm(props) {
    const { classes } = props;
    return (
        <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={ytheme}>
        <div className={classes.layout}>
          <div width="100%">
            <Toolbar className={classes.toolbarMain}>
                <Typography component="h2" variant="h2" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
                  Realm OS
                </Typography>
                <IconButton align="right" component={Link} to="/">
                  <HomeIcon style={{ fontSize: 40, color: "#555" }} />
                </IconButton>
            </Toolbar>
          </div>
          <Paper>
            <Grid container className={classes.mainTitle}>
              <Grid item md={6}>
                <Typography component="h3" variant="h3" color="inherit" gutterBottom>
                  Path of my OS development
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5" color="inherit" style={{textAlign: 'justify'}} paragraph>
                  The main objective of this project is to discover and show ways to play with 
                  the harsh and complex challenge of coding from almost nothing
                </Typography>
                <Divider variant="middle" />
              </Grid>
            </Grid>
          </Paper>
          <Paper>
            <Card className={classes.post}>
              <Grid container className={classes.mainTitle}>
                <Grid item lg={3}>
                  <CardMedia
                    className={classes.cardMedia}
                  >
                  oie
                  </CardMedia>
                </Grid>
                <Grid item lg={9}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      a
                    </Typography>
                    <Typography>
                      b
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        </div>

        </MuiThemeProvider>
        </React.Fragment>
    );
}

Realm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Realm);