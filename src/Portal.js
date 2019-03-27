import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Github from './Github.js'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lime, yellow } from '@material-ui/core/colors';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import necro from './images/necronomicon.png';
import realm from './images/realm.png';

const ytheme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: lime,
  },
});

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    width: '20vw',
    [theme.breakpoints.down(1100 + theme.spacing.unit * 3 * 2)]: {
      width: '40vw',
    },
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [ 
  {index: 1, path: "/realm", img: realm},
  {index: 2, path: "/academia", img: necro},
];

function Portal(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Router>
      <CssBaseline />
      <MuiThemeProvider theme={ytheme}>
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Grid container direction="row" justify="center">
              <Grid item className={classes.text}  xs={4}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Elvis' Realm
                </Typography>
              </Grid>
              <Grid item className={classes.text}  xs={8}>
                <Typography style={{paddingTop: '5%'}} variant="h6" align="center" color="textSecondary" paragraph>
                  Here is where I show my magic.
                </Typography>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" href="https://github.com/elvismdnin/" target="_blank" color="primary">
                      <Github/> whoami
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <Typography variant="h5" align="left" color="textPrimary" paragraph>
                Projects
              </Typography>
            </Grid>
            {cards.map(card => (
              <Grid item key={card.index} sm={6} md={6} lg={4} xs={4}>
                <Card className={classes.card} component={Link} to={card.path}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    image={card.image}
                    title={card.index}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      </MuiThemeProvider>
      </Router>
    </React.Fragment>
  );
}

Portal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portal);
