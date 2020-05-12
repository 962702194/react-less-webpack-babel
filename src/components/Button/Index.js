import React from 'react';
import PropTypes from 'prop-types';
import './Index.less';

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<button {...this.props} className='my-btn-style'><span>{this.props.children}</span></button>);
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired
};

Button.defaultProps = {
    title: 'yyr'
}

export default Button