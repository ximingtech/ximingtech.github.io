import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import ThemeInsideLayout from './ThemeInsideLayout';
import Image from '../img/background.jpg';
// import MIcon from '../component/MIcon';
// import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Collapse } from '@material-ui/core';
// import UserIcon from '../component/UserIcon';
const styles = (theme) => ({
  background: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
  },
  h5: {
    marginBottom: theme.spacing(4),
    // marginTop: theme.spacing(4),
    // [theme.breakpoints.up('sm')]: {
    //   marginTop: theme.spacing(10),
    // },
    color:'#FFFFFF',
  },
  nameStyle:{
    background: 'linear-gradient(45deg, #696969 1%, #240001 45%, #000000 100%)',
    borderRadius: 25,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0px 3px 5px 5px rgba(0, 0, 0, .3)',
  },
  goDown:{
    fontSize: '4rem',
    marginTop: 15
  },
  container:{
    display:'flex',
    flex: 1,
    justifyContent:'center',
    marginTop:'5%'
  }
});

const ThemeLayout = props => {
  const { classes } = props;
  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])

  return (
    <ThemeInsideLayout  backgroundClassName={classes.background}>
      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})} collapsedHeight={10}>
      <img style={{ display: 'none' }} src={Image} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        I Am <span className={classes.nameStyle}>XMTech</span>. Nice to meet you.
      </Typography>
      {/* <UserIcon/> */}
      {/* <Typography color="inherit" align="center" variant="h5"  marked="center" className={classes.h5}>
        Hi, I am XMTech. I am a Full Stack Developer with 2 years of experience. 
                    In my current job at Xend company, I had developed various of project to help the company 
                    grow their business and on-time rate over the two years. Now I am very eager to meet the challenge of developing new territories.
      </Typography>
      <div className={classes.container}>
        <Link href="https://www.linkedin.com/in/xi-ming-tan-3bb9321a4/" target="_blank" rel="noreferrer">
          <MIcon name="fa fa-linkedin-square" iconStyle={{fontSize:35, marginRight:20}} />
        </Link>
        <Link href="https://www.facebook.com/bright.ix.7/"  target="_blank" rel="noreferrer">
          <MIcon name="fa fa-facebook-square" iconStyle={{fontSize:35, marginRight:20}} />
        </Link>
        <Link href="https://www.instagram.com/ming_txm/?hl=en"  target="_blank" rel="noreferrer">
          <MIcon name="fa fa-instagram" iconStyle={{fontSize:35, marginRight:20}} />
        </Link>
        <Link href="https://github.com/ximingtech"  target="_blank" rel="noreferrer">
          <MIcon name="fa fa-github" iconStyle={{fontSize:35}} />
        </Link>
      </div> */}
      <div className={classes.container}>
        <ExpandMoreIcon className={classes.goDown}/>
      </div>
      </Collapse>
    </ThemeInsideLayout>

  );
}

ThemeLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeLayout);