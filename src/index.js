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
        return <span className={`autohide${hidden}`}>{children}</span>;
    }
}

AutoHide.propTypes = {
    ms: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

AutoHide.defaultProps = {
    ms: 1000,
};
