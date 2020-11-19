import React from 'react'
import withRoot from '../module/withRoot';
import ContactLayout from '../module/views/ContactLayout';

const Contact = () =>{
    return (
        <React.Fragment>
            <ContactLayout/>
        </React.Fragment>
    ); 
}

export default withRoot(Contact);