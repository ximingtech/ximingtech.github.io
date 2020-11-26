import React from 'react';
//import AppAppBar from '../module/views/AppAppBar';
import ThemeLayout from '../module/views/ThemeLayout';
import withRoot from '../module/withRoot';
import AppBarV2 from '../module/views/AppBarV2';

const Home = () =>{

    return(
        <React.Fragment>
            {/* <AppAppBar /> */}
            <AppBarV2/>
            <ThemeLayout />
        </React.Fragment>
    );

}

export default withRoot(Home);