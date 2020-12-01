import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import ThemeInsideLayout from './ThemeInsideLayout';
import Image from '../img/background3.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '../component/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

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

    const [fName, setfName] = useState('');
    const [fEmail, setfEmail] = useState('');
    const [fTitle, setfTitle] = useState('');
    const [fMessage, setfMessage] = useState('');
    const [double, setDouble] = useState(false);
    const [chgword, setChgword] = useState('Send');
    const [recap, setRecap] = useState('');

    const recaptchaRef = React.createRef();
    const reacptchaKey = process.env.REACT_APP_RECAPTCHA_KEY;
    //const reacptchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

    const onChange = (value) => {
        setRecap(value)

    }

    const clearValue = () => {
        setfName('');
        setfEmail('');
        setfTitle('');
        setfMessage('');
    }

    const submitValue = () => {
            if(fName===''||fEmail===''||fTitle===''||fMessage===''){
                alert('All field are mandatory. Please fill up.')
    
            }else{
                if(recap!==null && recap!==''){
                    setDouble(true);
                    setChgword('Sending');
        
                    const frmdetails = {
                        'Name' : fName,
                        'Email' : fEmail,
                        'Title' : fTitle,
                        'Message' : fMessage
                    }
        
                    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, frmdetails, process.env.REACT_APP_EMAILJS_USER_KEY)
                    .then((result) => {
                        alert(result.text);
                        setDouble(false);
                        setChgword('Send')
                        clearValue();
                    }, (error) => {
                        alert(error.text);
                    });
        
                    //JSON.stringify(frmdetails) *convert to json string
                }else{
                    alert("Please tick recaptcha checkbox.")
                }
            }
        
    }

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
                                    <TextField id="standard-basic" label="Name" value={fName} onChange={e => setfName(e.target.value)} disabled={double}/>
                                    <TextField id="standard-basic" label="Email" value={fEmail} onChange={e => setfEmail(e.target.value)} disabled={double}/> 
                                    
                                </div>
                                <div className={classes.div}> 
                                    <TextField id="standard-basic" label="Title" value={fTitle} fullWidth onChange={e => setfTitle(e.target.value)} disabled={double}/>   
                                </div>
                                <div className={classes.div}>
                                    <TextField id="standard-basic" label="Message" value={fMessage} fullWidth multiline rows={3} variant="outlined" onChange={e => setfMessage(e.target.value)} disabled={double}/>
                                    <Button variant="contained" color="secondary" onClick={submitValue} disabled={double}>
                                        {chgword}
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={clearValue}>
                                        Cancel
                                    </Button>
                                </div>
                                <div><ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={reacptchaKey}
                                    onChange={onChange}
                                    /></div>
                            </form>
                        </div>
                    </CardContent>
                </Card>     
            </div>
        </ThemeInsideLayout>
    )

}

export default  withStyles(styles)(ContactLayout);