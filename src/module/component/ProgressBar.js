import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ProgressBar = props => {

    return (
        <Box display="flex" alignItems="center">
            <Box minWidth={70}>
                <Typography variant="body2" color="textSecondary">{`${props.label}`}</Typography>
            </Box>
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                props.value,
                )}%`}</Typography>
            </Box>
        </Box>
      );
}

ProgressBar.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    label: PropTypes.string,
    value: PropTypes.number.isRequired,
};

export default ProgressBar;
