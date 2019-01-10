import React, { Component } from 'react';
import Product from '../Product/Product';


class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <p>Dashboard</p>
                <Product />
            </div>
        )
    }
}

export default Dashboard;