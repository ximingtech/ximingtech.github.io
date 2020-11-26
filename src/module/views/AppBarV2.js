import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar, { styles as toolbarStyles } from '../component/Toolbar';
import {Home, CastForEducation, ContactMail, Work} from '@material-ui/icons'
import clsx from 'clsx';
import LinkMUI from '@material-ui/core/Link';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    appbar:{
        background:"none",
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

    return(

        <div>
            <AppBar className={classes.appbar} elevation={0}>
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
                        >
                            <Home />
                        </LinkMUI>
               
     
                        <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink)}
                        href="#resume"
                        >
                            <CastForEducation />
                        </LinkMUI>
 

                        <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink)}
                        href="#portfolio"
                        >
                            <Work />
                        </LinkMUI>

                        <LinkMUI
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink, classes.linkSecondary)}
                        href="#contact"
                        >
                            <ContactMail />
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

