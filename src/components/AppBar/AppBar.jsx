import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper, IconButton } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'flex',
        width: '100vw',
        minHeight: 64,
        backgroundColor: colors.background.white,
        alignItems: 'center',
        zIndex: 10000
    },
    icon: {
        marginLeft: 11
    },
    appTitle: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 11,
        fontSize: 24,
        fontWeight: 400
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class AppBar extends Component {
    render() {
        const { style, appTitle, showToggleDrawerButton, 
            onToggleDrawerClick, ...others } = this.props;

        return (
            <Paper style={getStyle(componentStyle, this.props)} {...others}>
                {this.renderToggleDrawerButton()}
                <h1 style={componentStyle.appTitle}>{appTitle}</h1>
            </Paper>
        );
    }

    renderToggleDrawerButton() {
        const { showToggleDrawerButton } = this.props;

        if (!showToggleDrawerButton) {
            return null;
        }

        return <IconButton
            style={componentStyle.icon}
            iconName="menu" 
            flat
            onClick={this.handleToggleDrawerClick.bind(this)} />;
    }

    handleToggleDrawerClick() {
        this.props.onToggleDrawerClick();
    }
}

AppBar.propTypes = {
    appTitle: PropTypes.string,
    showToggleDrawerButton: PropTypes.bool,
    onToggleDrawerClick: PropTypes.func
};

AppBar.defaultProps = {
    showToggleDrawerButton: true,
    onToggleDrawerClick: () => {}
};

export {
    AppBar
}
