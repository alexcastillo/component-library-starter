
import React, { Component } from 'react';
import { render } from 'react-dom';
import BlueKit from 'react-bluekit';
import styled from 'styled-components';
import componentsIndex from './components/componentsIndex';

class App extends Component {
    render() {
        return (
            <BlueKit componentsIndex={ componentsIndex } />
        );
    }
}

render(<App />, document.getElementById('app'));
