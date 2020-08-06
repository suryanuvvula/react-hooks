import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function FunctionContextComponent() {
    const themeContext = useContext(ThemeContext)
    const themeStyle = {
        backgroundColor: themeContext ? '#333' : '#CCC',
        color: themeContext ? '#CCC' : '#333',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={themeStyle}>Function Theme</div>
    )
}