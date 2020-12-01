import React from 'react'
import PortfolioLayout from '../module/views/PortfolioLayout';
import withRoot from '../module/withRoot';
const Portfolio = () =>{

    return(
        <React.Fragment>
            <PortfolioLayout/>
        </React.Fragment>
    );
}

export default withRoot(Portfolio);