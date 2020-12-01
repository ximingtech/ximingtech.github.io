import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Image from '../img/background2.jpg';
import Typography from '@material-ui/core/Typography';
import ThemeInsideLayout from './ThemeInsideLayout';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import School from '@material-ui/icons/School';
import Work from '@material-ui/icons/BusinessCenter';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
    },
 
    cardRoot:{
        width: '40vw',
        maxWidth: '100vw',
        //backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(5),
    },
    cardMedia:{
        height: '50vh',
    },
    cardContainer:{
        display: 'flex',
        flexDirection: 'row',
        //alignItems: 'center'
    },
    paper: {
        padding: '6px 16px',
      },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
});

const PortfolioLayout = props => {
    const { classes } = props;
    return (
        <ThemeInsideLayout backgroundClassName={classes.background}>
            <div className={classes.cardContainer}>
                <div className={classes.cardRoot}> 
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <School fontSize="large" />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="h3" color="secondary">
                                    education
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        UTAR Kampar
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        JULY 2014 - August 2018
                                    </Typography>
                                    <Typography variant="body2">Bachelor of Information System Engineering (Hons) Information System Engineering</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        KTAR Penang
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        May 2011 - June 2014
                                    </Typography>
                                    <Typography variant="body2">Diploma in Science (Information System Engineering)</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>

                <div className={classes.cardRoot}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <Work fontSize="large" />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="h3" color="secondary">
                                    experience
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Xend Sdn Bhd
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        May 2018 - Present
                                    </Typography>
                                    <Typography variant="subtitle1">Full Stack Developer</Typography>
                                    <Typography variant="body2"> <strong>-</strong> Create, Innovate, and enhance from existing admin dashboard website.</Typography>
                                    <Typography variant="body2"> <strong>-</strong> Provide technical knowledge to solve complex business model and requirement.</Typography>
                                    <Typography variant="body2"> <strong>-</strong> Create and provide restful api to serve other business unit need.</Typography>
                                    <Typography variant="body2"> <strong>-</strong> Create various type of desktop application to help production.</Typography>
                                    
                                    {/* <Typography variant="body1">Create, Innovate, and enhance from existing admin dashboard website.</Typography> */}
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Thunder Print Sdn Bhd
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Sep 2017 - Dec 2017
                                    </Typography>
                                    <Typography variant="subtitle1">Intern</Typography>
                                    <Typography variant="body2"><strong>-</strong> Assist senior developer to develop android mobile application.</Typography>
                                    <Typography variant="body2"><strong>-</strong> Provide and created live chat feature in mobile application.</Typography>
                                    <Typography variant="body2"><strong>-</strong> Learned web service development.</Typography>
                                    {/* <Typography variant="body1">Assist senior developer to develop android mobile application.</Typography> */}
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </ThemeInsideLayout>
    )

}

export default  withStyles(styles)(PortfolioLayout);