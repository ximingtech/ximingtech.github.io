import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar, { styles as toolbarStyles } from '../component/Toolbar';
import {Home, CastForEducation, ContactMail, Work} from '@material-ui/icons'
import clsx from 'clsx';
import LinkMUI from '@material-ui/core/Link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    appbar:{
        background:"none",
        transition:".5s"
    },
    appbarScroll:{
        background:"Black",
        transition:"1s"
    },
    title: {
        fontSize: 24,
      },
      placeholder: toolbarStyles(theme).root,
      toolbar: {
        justifyContent: 'space-between',
      },
      left: {
        flex: 1,
      },
      leftLinkActive: {
        color: theme.palette.common.white,
      },
      right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      },
      rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
      },
      linkSecondary: {
        color: theme.palette.secondary.main,
      },
}))

const AppBarV2 = () =>{
    const classes = useStyles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100
    });

    const [home,SetHome] = useState(<Home/>);
    const [resume,SetResume] = useState(<CastForEducation/>);
    const [portfolio,SetPortfolio] = useState(<Work/>);
    const [contact,SetContact] = useState(<ContactMail/>);

    const hoverEnter = value => e =>{
      value === 'home' ? SetHome('home') : 
      value === 'resume' ? SetResume('resume') : 
      value === 'portfolio' ? SetPortfolio('portfolio') : 
      value === 'contact' ? SetContact('contact') : console.log('nothing');      
    }

    const hoverLeave = value => e =>{
      value === 'home' ? SetHome(<Home/>) : 
      value === 'resume' ? SetResume(<CastForEducation/>) : 
      value === 'portfolio' ? SetPortfolio(<Work/>) : 
      value === 'contact' ? SetContact(<ContactMail/>) : console.log('nothing');  
    }

    return(
        <div>
            <AppBar className={`${trigger === false ? classes.appbar : classes.appbarScroll}`} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <LinkMUI
                    variant="h6"
                    underline="none"
                    color="inherit"
                    className={classes.title}
                    href="/"
                    >
                        {'XMTech'}
                    </LinkMUI>
                    <div className={classes.right}>
                        <LinkMUI
                        color="inherit"
                        variant="h6"
                        underline="none"
                        className={classes.rightLink}
                        href="#home"
                        onMouseEnter={hoverEnter('home')}
                        onMouseLeave={hoverLeave('home')}
                        >
                          {home}
                        </LinkMUI>
               
     
                        <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink)}
                        href="#resume"
                        onMouseEnter={hoverEnter('resume')}
                        onMouseLeave={hoverLeave('resume')}
                        >
                          {resume}
                        </LinkMUI>
 

                        <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink)}
                        href="#portfolio"
                        onMouseEnter={hoverEnter('portfolio')}
                        onMouseLeave={hoverLeave('portfolio')}
                        >
                          {portfolio}
                        </LinkMUI>

                        <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink, classes.linkSecondary)}
                        href="#contact"
                        onMouseEnter={hoverEnter('contact')}
                        onMouseLeave={hoverLeave('contact')}
                        >
                          {contact}
                        </LinkMUI>
                    </div>
                </Toolbar>

                {/* <Toolbar className={classes.toolbar}>
                    <LinkMUI
                    variant="h6"
                    underline="none"
                    color="inherit"
                    className={classes.title}
                    href="#home"
                    >
                        {'XMTech'}
                    </LinkMUI>

                    <div className={classes.right}>
                    <Link to="/home">
                      <LinkMUI
                        color="inherit"
                        variant="h6"
                        underline="none"
                        className={classes.rightLink}
                        href="#home"
                        >
                            <Home />
                        </LinkMUI>
                    </Link>
                    <Link to="/resume">
                      <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink)}
                        href="#resume"
                        >
                            <CastForEducation />
                        </LinkMUI>
                    </Link>
                    <Link to="/portfolio">
                      <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink)}
                        href="#portfolio"
                        >
                            <Work />
                        </LinkMUI>
                    </Link>
                    <Link to="/contact">
                      <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink, classes.linkSecondary)}
                        href="#contact"
                        >
                            <ContactMail />
                        </LinkMUI>
                    </Link>
                    </div>
                </Toolbar> */}
            </AppBar>
        </div>

    )

}

export default AppBarV2

