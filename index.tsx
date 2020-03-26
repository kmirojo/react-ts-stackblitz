import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './src/components/Hello';
import App from './src/components/App';
import './style.css';

render(<App title="Juan" />, document.getElementById('root'));
