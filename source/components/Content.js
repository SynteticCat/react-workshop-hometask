import React, { Component } from 'react';
import Profile from '../components/Profile';
import Images from '../components/Images';

export default class Content extends Component {
    render() {
        return (
            <div className = 'content'>
                <Profile />
                <Images />
            </div>
        );
    }
}
