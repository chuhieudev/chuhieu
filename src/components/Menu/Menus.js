import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Danh Sách Sản Phẩm',
        to: '/product-list',
        exact: false
    },
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {

    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={` my-link ${active}`}>
                    <Link className="nav-link" to={to}>{label}</Link>
                </li>
            )
        }} />
    )
}

class Menus extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    {this.ShowMenu(menus)}
                </ul>
            </nav>
        );
    }
    ShowMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
            })
        }
        return result;
    }
}

export default Menus;