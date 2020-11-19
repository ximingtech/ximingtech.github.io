import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const MIcon = props => <Icon className={props.name} style={{...props.iconStyle}}></Icon>

MIcon.propTypes = {
    name: PropTypes.string,
    iconStyle: PropTypes.object,
}

export default MIcon;