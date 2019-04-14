import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function RealmToolbar(props) {
    const { classes } = props;
    return (
      <Paper>
        <div className={classes.layout}>
          <div width="100%">
            <Toolbar className={classes.toolbarMain}>
                <Typography component="h2" variant="h2" align="left" noWrap className={classes.toolbarTitle}>
                  Realm OS
                </Typography>
                <IconButton align="right" component={Link} to="/">
                  <HomeIcon style={{ fontSize: 40, color: "#AAA" }} />
                </IconButton>
            </Toolbar>
          </div>
        </div>
      </Paper>
    )
};

RealmToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(RealmToolbar);