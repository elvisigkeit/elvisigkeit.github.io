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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Footer from '../Footer';

import "../index.css"

const ytheme = createMuiTheme({
    palette: {
      primary: yellow,
      secondary: lime,
    },
});

const styles = theme => ({
    layout: {
      width: 'auto',
      marginBottom: '4%',
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
    postList: {
      marginBottom: '4%',
      padding: '2% 7% 2% 7%',
      verticalAlign: 'middle',
    },
    history: {
      padding: '4% 0% 0% 5%',
    },
    mainTitle: {
      marginBottom: '3%',
    },
    post: {
      transform: 'scale(0.8)',
      margin: '2%',
    }
});

const posts = [
  {index: 0, image: '', title: 'The Hello World', summary: 'Does it work to develop OS in virtual machines?'},
  {index: 1, image: '', title: 'Starting the system', summary: 'How could I bootstrap my system?'},
  {index: 2, image: '', title: 'Writing on the screen', summary: 'How I write on the screen?'},
  {index: 3, image: '', title: 'Making the screen blink', summary: 'How I define a cursor?'},
  {index: 4, image: '', title: 'Linking the code', summary: 'How I make the program compile?'},
]

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
        <Paper>
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
          </div>
        </Paper>
        <Grid container className={classes.mainTitle}>
          <Grid item md={3}/>
          <Grid item md={3}>
            <Typography component="h3" variant="h3" gutterBottom>
              Path of my OS development
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" color="inherit" style={{textAlign: 'justify'}} paragraph>
              The main objective of this project is to discover and show ways to play with 
              the harsh and complex challenge of coding from almost nothing
            </Typography>
            <Divider variant="middle" />
          </Grid>
          <Grid item md={3}/>
        </Grid>

        <div className={classes.layout}>
          <Paper>
            <Typography component="h4" variant="h4" color="inherit" align="left" className={classes.history}>
              History
            </Typography>
              
            <List className={classes.postList}>
              {posts.map(post => (
                <div>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <img alt={`PostIcon${post.index}`} src={post.image}/>
                    </ListItemAvatar>
                    <ListItemText
                      primary={post.title}
                      secondary={
                        <React.Fragment>
                          {post.summary}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider style={{marginBottom: '5%'}}/>
                </div>
              ))}
            </List>
          </Paper>
        </div>
        <Footer/>
        </MuiThemeProvider>
        </React.Fragment>
    );
}

Realm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Realm);