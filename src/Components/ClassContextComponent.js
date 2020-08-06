import React from 'react';
import { ThemeContext } from '../App';

export default class ClassContextComponent extends React.Component {
    themeStyles(style) {
        return {
            backgroundColor: style ? '#333' : '#CCC',
            color: style ? '#CCC' : '#333',
            padding: '10px',
            margin: '10px'
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {themeStyle => {
                    return <div style={this.themeStyles(themeStyle)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}