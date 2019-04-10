import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RealmToolbar from './RealmToolbar';
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
import posts from './Posts';

import "../index.css"

const ytheme = createMuiTheme({
    palette: {
      primary: yellow,
      secondary: lime,
      type: 'dark',
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
    },
    postPic: {
      border: '3px solid #555',
      height: '50px',
      width: '150px',
    }
});

function Realm(props) {
    const { classes } = props;
    
    return (
        <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={ytheme}>
        <RealmToolbar/>
        <Grid container className={classes.mainTitle}>
          <Grid item md={3}/>
          <Grid item md={3}>
            <Typography component="h3" variant="h3" gutterBottom>
              Path of my OS development
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" style={{textAlign: 'justify'}} paragraph>
              The main objective of this project is to discover and show ways to play with 
              the harsh and complex challenge of coding from almost nothing
            </Typography>
            <Divider variant="middle" />
          </Grid>
          <Grid item md={3}/>
        </Grid>

        <div className={classes.layout}>
          <Paper>
            <Typography component="h4" variant="h4" align="left" className={classes.history}>
              History
            </Typography>
              
            <List className={classes.postList}>
              {posts.map(post => (
                <Link to={`/realm/post/${post.index}`} style={{textDecoration: 'none'}}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <img className={classes.postPic} alt={`PostIcon${post.index}`} src={post.image}/>
                    </ListItemAvatar>
                    <ListItemText style={{marginBottom: '1%', marginTop: '1%'}}
                      primary={post.title}
                      secondary={
                        <React.Fragment>
                          {post.summary}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider style={{marginBottom: '5%'}}/>
                </Link>
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