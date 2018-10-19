import React, { Component } from 'react';
import links from '../theme/assets/links';
import FooterLink from './FooterLink';

export default class Footer extends Component {
    render() {
        const linksJSX = links.map((element) => {
            return <FooterLink key = { element.id } message = { element.message }/>;
        });
        
        return (
            <div className = 'footer'>
                <ul>
                    {linksJSX}
                </ul>
            </div>
        );
    }
}

