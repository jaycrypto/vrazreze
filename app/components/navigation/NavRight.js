import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import { attemptLogout } from '../../actions/authActions';
import AdminDropdown from './AdminDropdown';

const NavRight = React.createClass({

    onLogoutClick () {
        this.props.dispatch(attemptLogout());
    },

    render () {
        return (
            this.props.userAuthSession.isLoggedIn ?
                <Nav pullRight>
                    <AdminDropdown />
                    <NavItem eventKey={1}>
                        {this.props.userAuthSession.userObject.username}
                    </NavItem>
                    <NavItem eventKey={2} onClick={this.onLogoutClick}>
                        Выйти
                    </NavItem>
                </Nav>
                :
                <Nav pullRight>
                    <AdminDropdown />
                    <LinkContainer to='/login'>
                        <NavItem eventKey={1}>Вход</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/signup'>
                        <NavItem eventKey={2}>Регистрация</NavItem>
                    </LinkContainer>
                </Nav>
        );
    }
});

function mapStateToProps(state) {
    return {
        userAuthSession: state.userAuthSession
    };
}

export default connect(mapStateToProps)(NavRight);
