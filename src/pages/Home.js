import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import assets
import BgImg from '../assets/bg-img-2.svg';
import Park from '../assets/Video park.svg';

// Import Components
import Navbar from '../components/_navigation_/Navbar'

// Import Components from MaterialUI
import {  makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import {PrimaryButton} from '../components/Styles/Buttons/StyledButton';

import { getToken } from'../_helpers/authenticationChecker'

const useStyles = makeStyles(theme => ({
    box: {
        marginTop: '4.5rem'
    },
    grid: {
        marginTop: '6rem'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        height: '100%',
        boxShadow: 'none'
    },
}))

export default function Home(props) {
    const classes = useStyles();

    useEffect(() => {
        const token = getToken();
        if (token) {
          window.location.href = '/dashboard';
        }
      }, [])

    return (
        <Box>
            <Navbar />
            <Grid className={classes.box} xs={12} sm={12} md={12} lg={12} container direction="row" justify="space-between" alignItems="center" >
                <Paper className={classes.paper}>
                    <div className="first-column col-sm-12 col-md-5 col-lg-5 col-xs-5">
                        <h1>Gain more control of your life as you go</h1>
                        <p>There is so much noise in the world today and it takes so little to get us distracted. 
                            We are here to help you discover values that helps cultivate your life</p>
                        <Link to="/signup">
                            <PrimaryButton>Get Started</PrimaryButton>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xs-5 second-column">
                        <img className="bg-img" src={BgImg} alt="background"/>
                    </div>
                </Paper>
            </Grid>
            <Grid className={classes.box} xs={12} sm={12} md={12} lg={12} container direction="row" justify="space-between" alignItems="center" >
                <Paper className={classes.paper}>
                    <div className="m-auto col-sm-12 col-md-6 col-lg-6 col-xs-6">
                        <p className="text-14 text-colored">YOU CAN CHOOSE YOUR VALUES</p>
                        <h3 className="text-36 text-dark">Choose What Matters To You</h3>
                        <p className="text-22">With Essentialism, you get to list your values and what is most important to you as a person. 
                            We are here to help you discover values that helps cultivate your life</p>
                    </div>
                </Paper>
            </Grid>
            <Grid className={classes.grid} xs={12} sm={12} md={12} lg={12} container direction="row" justify="space-between" alignItems="center" >
                <Paper className={classes.paper}>
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xs-5 second-column">
                        <img className="bg-img" src={Park} alt="background"/>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xs-5">
                        <p className="text-14 text-colored">YOU CAN MANAGE YOUR TIME</p>
                        <h3 className="text-36 text-dark">Sit down and relax</h3>
                        <p className="text-22">There is so much noise in the world today and it takes so little to get us distracted. 
                            We are here to help you discover values that helps cultivate your life</p>
                    </div>
                </Paper>
            </Grid>
      </Box>
    )
}