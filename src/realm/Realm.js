import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function Realm(props) {
    const { classes } = props;
    return (
        <React.Fragment>

        </React.Fragment>
    );
}

Realm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Realm);