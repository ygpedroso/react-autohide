import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class AutoHide extends Component {
    state = {
        isHidden: false,
    };

    componentDidMount() {
        const { ms } = this.props;
        setTimeout(() => {
            this.hideComponent();
        }, ms);
    }

    hideComponent = () => {
        this.setState(previousState => ({
            ...previousState,
            isHidden: true,
        }));
    };

    render() {
        const { isHidden } = this.state;
        const hidden = isHidden ? ' hidden' : '';
        const { children } = this.props;
        return <div className={`autohide${hidden}`}>{children}</div>;
    }
}

AutoHide.propTypes = {
    ms: PropTypes.number,
    children: PropTypes.element.isRequired,
};

AutoHide.defaultProps = {
    ms: 1000,
};
