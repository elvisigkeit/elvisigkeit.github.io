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
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Footer from './Footer';
import Zoom from '@material-ui/core/Zoom';
import chess from './images/chess.png';
import necro from './images/necronomicon.png';
import poke from './images/pokemon.png';
import realm from './images/realm.png';

const ytheme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: lime,
    type: 'dark',
  },
});

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: '#424242',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 6}px 0 ${theme.spacing.unit * 4}px`,
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
    height: '98%',
    maxWidth: '20vw',
    [theme.breakpoints.down(1100 + theme.spacing.unit * 3 * 2)]: {
      maxWidth: '40vw',
    },
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    margin: '10px',
  },
  cardMedia: {
    height: '70%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cleanDecoration: {
    textDecoration: 'none',
  }
});

const cards = [ 
  {index: 1, path: "https://github.com/elvismdnin/match_gateway", img: chess, title: "CCHESS (2021)", desc: "Little chess development"},
  {index: 2, path: "https://github.com/elvismdnin/main_color", img: poke, title: "Pokemon Color Picker (2020)", desc: "Estudos em Flutter"},
  {index: 3, path: "/realm", img: realm, title: "Realm (2018)", desc: "Path of my OS development"},
  {index: 4, path: "/academia", img: necro, title: "Academia (2016)", desc: "Alguns estudos em CSS"},
];

function Portal(props) {
  const { classes } = props;

  return (
    <React.Fragment>
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
          <Grid container>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <Typography variant="h5" align="left" color="textPrimary" paragraph>
                Projects
              </Typography>
            </Grid>
            {cards.map(card => (
              <Zoom in={1}>
                <Grid item key={card.index} sm={6} md={4} lg={4} xs={4}>
                  <ProjectCard card={card} classes={classes}>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      image={card.img}
                      title={card.index}
                    />
                    <Divider variant="middle" />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                        {card.desc}
                      </Typography>
                    </CardContent>
                  </ProjectCard>
                </Grid>
              </Zoom>
            ))}
          </Grid>
        </div>
      </main>
      <Footer/>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

function ProjectCard(props) {
  let card = props.card
  let classes = props.classes
  if(card.path.startsWith("http")) {
    return ( 
      <a href={props.card.path} className={props.classes.cleanDecoration}>
        <Card className={classes.card}  to={card.path}>
          {props.children}
        </Card>
      </a>
    );
  } else {
    return (
      <Card className={classes.card} component={Link} to={card.path}>
        {props.children}
      </Card>
    );
  }
}

Portal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portal);
