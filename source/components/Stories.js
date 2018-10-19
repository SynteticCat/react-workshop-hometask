import React, { Component } from 'react';
import stories from '../theme/assets/stories';
import Story from './Story';

export default class Stories extends Component {
    render() {
        const storiesJSX = stories.map((element) => {
            return (
            <Story key = { element.id }
                   src = { element.src }
                   message = { element.message }
            />);
        });

        return (
            <div className = "stories">
                {storiesJSX}
            </div>
        );
    }
}

