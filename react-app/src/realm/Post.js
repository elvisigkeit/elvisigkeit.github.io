import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RealmToolbar from './RealmToolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lime, yellow } from '@material-ui/core/colors';
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
      minHeight: '450px',
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

function Post(props) {
    const { classes } = props;
    const { match: { params } } = props;
    var post = posts[params.postid]
    console.log(post)
    
    return (
        <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={ytheme}>
        <RealmToolbar/>
        <div className={classes.layout}>
            {post.content()}
        </div>
        <Footer/>
        </MuiThemeProvider>
        </React.Fragment>
    );
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Post);