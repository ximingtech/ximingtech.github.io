import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import ThemeInsideLayout from './ThemeInsideLayout';
import Image from '../img/background3.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '../component/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
      },
    root: {
        position: 'relative',
        minWidth: '85vw',
        diplay: 'flex',
        flexDirection: 'row',
        //height: '50vh',
      },
    cardContentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    iframe:{
        position: 'relative',
        width: '50%',
        height: '70vh'
    },
    border: {
        width: '50%',
        marginLeft: '2%',
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'row wrap',
        justifyContent: 'left',
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    div3: {
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    div2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:'10%',
        marginRight:'10%',
        //width:'50%'
    }
});

const ContactLayout = props => {
    const { classes } = props;
    return (
        <ThemeInsideLayout>
            <h1>Contact</h1>
            <div className={classes.root}>
                <Card>
                    <CardContent className={classes.cardContentContainer}>
                        <iframe id="gmap_canvas" width="100%" height="100%"
                            src="https://maps.google.com/maps?q=taman%20ria%20jaya&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className={classes.iframe}>
                        </iframe>
                        <div className={classes.border}>
                            <Box className={classes.div3} border={1} borderRadius={16} borderColor="secondary.main">
                                <div className={classes.div2}>
                                    <Typography variant="h6">
                                        Address
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        Sungai Petani, Kedah
                                    </Typography>
                                    <Typography variant="h6">
                                        Email
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        ximon0827@gmail.com
                                    </Typography>
                                </div>
                                <div className={classes.div2}>
                                    <Typography variant="h6">
                                        Phone
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        +6010-3961090
                                    </Typography>
                                    <Typography variant="h6">
                                        Freelance
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        Unavailable
                                    </Typography>
                                </div>
                            </Box>
                            <form  noValidate autoComplete="off">
                                <div className={classes.div}>
                                    <TextField id="standard-basic" label="Name" />
                                    <TextField id="standard-basic" label="Email" /> 
                                    
                                </div>
                                <div className={classes.div}> 
                                    <TextField id="standard-basic" label="Title" fullWidth/>   
                                </div>
                                <div className={classes.div}>
                                    <TextField id="standard-basic" label="Message" fullWidth multiline rows={3} variant="outlined"/>
                                    <Button variant="contained" color="secondary">
                                        Send
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                </Card>     
            </div>
        </ThemeInsideLayout>
    )

}

export default  withStyles(styles)(ContactLayout);