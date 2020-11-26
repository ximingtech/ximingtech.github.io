import React from 'react'
import ResumeLayout from '../module/views/ResumeLayout';
import withRoot from '../module/withRoot';

const Resume = () =>{

    return(
        <React.Fragment>
            <ResumeLayout/>
        </React.Fragment>
    );
}

export default withRoot(Resume);